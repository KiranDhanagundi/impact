import { AwsUserAuthConfig, awsConfig } from "./Config";
import { memoize } from "lodash";

const AWS = require("aws-sdk");
const s3 = new AWS.S3({
  accessKeyId: awsConfig.accessKeyId,
  secretAccessKey: awsConfig.secretAccessKey,
  region: awsConfig.region,
});

const ses = new AWS.SES({
  accessKeyId: awsConfig.accessKeyId,
  secretAccessKey: awsConfig.secretAccessKey,
  region: awsConfig.region,
});

// Function to store all users' login details in a single JSON file in S3 bucket
export const storeUsersLoginDetails = async (args) => {
  console.log("aws args", args);
  const newUserDetails = {
    id: args?.email,
    name: args?.name + " " + args?.lastname,
    firstName: args?.name,
    lastName: args?.lastname,
    email: args?.email,
    password: args?.password,
    role: "user",
    status: "active",
    subscriptionType: "Free",
    domain: "impact",
    createdDate: new Date().toLocaleDateString("en-GB"),
    updatedDate: null,
    about: null,
    access:
      "['app_home','app_profie',app_myproducts',app_myblogs','app_dashboard','app_cart',app_subscription']",
  };

  try {
    // Fetch existing user details from S3
    const existingUserDetails = await fetchAwsS3UserList();

    // Append new user details to the existing array

    const updatedUserDetails = [...existingUserDetails, newUserDetails];

    const params = {
      Bucket: AwsUserAuthConfig.bucketName,
      Key: AwsUserAuthConfig.fileName, // Specify the file name for storing all users' login details
      Body: JSON.stringify(updatedUserDetails),
      ContentType: "application/json",
    };

    const data = await s3.upload(params).promise();
    console.log("All users login details stored successfully:", data.Location);
    return data.Location;
  } catch (error) {
    console.error("Error storing users login details:", error);
    throw error;
  }
};

// Function to fetch all users' login details from the single JSON file in S3 bucket
export const fetchAwsS3UserList = async () => {
  const params = {
    Bucket: AwsUserAuthConfig.bucketName,
    Key: AwsUserAuthConfig.fileName, // Specify the file name for storing all users' login details
  };
  try {
    const response = await s3.getObject(params).promise();
    const userList = JSON.parse(response.Body.toString());

    return userList;
  } catch (error) {
    console.error("Error fetching users list from AWS S3:", error);
    throw error;
  }
};

export const isUserExists = async (args) => {
  try {
    const params = {
      Bucket: AwsUserAuthConfig.bucketName,
      Key: AwsUserAuthConfig.fileName, // Specify the file name for storing all users' login details
    };

    const data = await s3.getObject(params).promise();
    const userDetails = JSON.parse(data.Body.toString());

    // Find user details based on email
    const user = userDetails.find((user) => user.email === args.email);
    return user;
  } catch (error) {
    console.error("Error fetching user details:", error);
    throw error;
  }
};

export const sendEmail = async (recipient, subject, message) => {
  console.log("inside aws send email");
  const params = {
    Destination: {
      ToAddresses: [recipient],
    },
    Message: {
      Body: {
        Text: {
          Data: message,
        },
      },
      Subject: {
        Data: subject,
      },
    },
    Source: awsConfig.source, // Replace with the sender email address verified in AWS SES
  };

  try {
    const data = await ses.sendEmail(params).promise();
    console.log("Email sent:", data.MessageId);
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};

const fetchUserDetailsFromS3 = async (args) => {
  try {
    const params = {
      Bucket: AwsUserAuthConfig.bucketName,
      Key: AwsUserAuthConfig.fileName, // Specify the file name for storing all users' login details
    };

    const response = await s3.getObject(params).promise();
    const userDetails = await JSON.parse(response.Body.toString());

    // Find user details based on email
    const user = userDetails.find(
      (user) => user.email === args.email && user.password === args.password
    );

    return user;
  } catch (error) {
    console.error("Error fetching user details:", error);
    throw error;
  }
};

export const fetchAwsS3Config = async () => {
  const params = {
    Bucket: awsConfig.bucketName,
    Key: awsConfig.fileName, // Specify the file name for storing all users' login details
  };
  try {
    const response = await s3.getObject(params).promise();
    const awsConfig = await JSON.parse(response.Body.toString());
    console.log("Aws S3 Config fetched successfully:", awsConfig);
    return awsConfig;
  } catch (error) {
    console.error("Error fetching aws config:", error);
    throw error;
  }
};

// Memoize the fetchUserDetails function to cache results
const fetchUserDetails = memoize(fetchUserDetailsFromS3);

export { fetchUserDetails };
