import {
  AwsUserAuthConfig,
  awsConfig,
  AwsResourceConfig,
  AwsRolesConfig,
} from "./Config";
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

export const storeUsersLoginDetails = async (args) => {
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
    updatedDate: new Date().toLocaleDateString("en-GB"),
    about: null,
    access: `['app_home','app_profie',app_myproducts',app_myblogs','app_dashboard','app_cart',app_subscription']`,
  };

  try {
    // Fetch existing user details from S3
    const existingUserDetails = await fetchAwsS3UserList();

    // Append new user details to the existing array

    const updatedUserDetails = [...existingUserDetails, newUserDetails];

    const params = {
      Bucket: AwsUserAuthConfig.bucketName,
      Key: AwsUserAuthConfig.fileName,
      Body: JSON.stringify(updatedUserDetails),
      ContentType: "application/json",
    };

    const data = await s3.upload(params).promise();

    return data.Location;
  } catch (error) {
    console.error("Error storing users login details:", error);
    throw error;
  }
};

export const addUsertoAwsS3 = async (args) => {
  const newUserDetails = {
    id: args?.email,
    name: args?.firstName + " " + args?.lastName,
    firstName: args?.firstName,
    lastName: args?.lastName,
    email: args?.email,
    password: "Password@1100",
    role: args.role?.roleName,
    status: "active",
    subscriptionType: "Free",
    domain: "impact",
    createdDate: new Date().toLocaleDateString("en-GB"),
    updatedDate: new Date().toLocaleDateString("en-GB"),
    about: null,
    access: args?.role?.resources,
  };
  try {
    // Fetch existing user details from S3
    const existingUserDetails = await fetchAwsS3UserList();
    // Append new user details to the existing array
    const updatedUserDetails = [...existingUserDetails, newUserDetails];
    const params = {
      Bucket: AwsUserAuthConfig.bucketName,
      Key: AwsUserAuthConfig.fileName,
      Body: JSON.stringify(updatedUserDetails),
      ContentType: "application/json",
    };
    const data = await s3.upload(params).promise();
    return data.Location;
  } catch (error) {
    console.error("Error while adding user to Aws S3 :", error);
    throw error;
  }
};

export const editUsertoAwsS3 = async (args) => {
  const editedUserDetails = {
    id: args?.email, // Assuming email is the unique identifier
    name: args?.firstName + " " + args?.lastName,
    firstName: args?.firstName,
    lastName: args?.lastName,
    email: args?.email,
    password: args?.password,
    role: args?.role?.roleName ? args?.role?.roleName : args?.role,
    status: args?.status,
    subscriptionType: args?.subscriptionType,
    domain: "impact",
    createdDate: args?.createdDate,
    updatedDate: new Date().toLocaleDateString("en-GB"),
    about: args?.about,
    access: args?.role?.resources ? args?.role?.resources : args?.access,
  };

  try {
    // Fetch existing user details from S3
    const existingUserDetails = await fetchAwsS3UserList();

    // Find the index of the user to be edited in the existing list
    const userIndex = existingUserDetails.findIndex(
      (user) => user.id === args.email
    );

    // If the user is found, update its details
    if (userIndex !== -1) {
      existingUserDetails[userIndex] = editedUserDetails;
    } else {
      // If the user is not found, throw an error or handle it as needed
      throw new Error(`User with email ${args.email} not found.`);
    }

    // Upload the updated user details back to AWS S3
    const params = {
      Bucket: AwsUserAuthConfig.bucketName,
      Key: AwsUserAuthConfig.fileName,
      Body: JSON.stringify(existingUserDetails),
      ContentType: "application/json",
    };

    const data = await s3.upload(params).promise();
    console.log("User details updated successfully in AWS S3:", data.Location);
    return data.Location;
  } catch (error) {
    console.error("Error while updating user details in AWS S3:", error);
    throw error;
  }
};

export const inactivateUserfromAwsS3 = async (args) => {
  try {
    // Fetch existing user details from S3
    const existingUserDetails = await fetchAwsS3UserList();

    // Find the index of the user to be inactivated in the existing list
    const userIndex = existingUserDetails.findIndex(
      (user) => user.id === args.email
    );

    // If the user is found, update its status to "inactive"
    if (userIndex !== -1) {
      existingUserDetails[userIndex].status = "inactive";
    } else {
      // If the user is not found, throw an error or handle it as needed
      throw new Error(`User with email ${args.email} not found.`);
    }

    // Upload the updated user details back to AWS S3
    const params = {
      Bucket: AwsUserAuthConfig.bucketName,
      Key: AwsUserAuthConfig.fileName,
      Body: JSON.stringify(existingUserDetails),
      ContentType: "application/json",
    };

    const data = await s3.upload(params).promise();
    console.log("User status updated successfully in AWS S3:", data.Location);
    return data.Location;
  } catch (error) {
    console.error("Error while updating user status in AWS S3:", error);
    throw error;
  }
};

export const fetchAwsS3UserList = async () => {
  const params = {
    Bucket: AwsUserAuthConfig.bucketName,
    Key: AwsUserAuthConfig.fileName,
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
      Key: AwsUserAuthConfig.fileName,
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
    Source: awsConfig.source,
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
      Key: AwsUserAuthConfig.fileName,
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
    Key: awsConfig.fileName,
  };
  try {
    const response = await s3.getObject(params).promise();
    const awsConfig = await JSON.parse(response.Body.toString());

    return awsConfig;
  } catch (error) {
    console.error("Error fetching aws config:", error);
    throw error;
  }
};

export const fetchAwsS3ResourceList = async () => {
  const params = {
    Bucket: AwsResourceConfig.bucketName,
    Key: AwsResourceConfig.fileName,
    ExpressionType: "SQL",
    Expression: "SELECT s.resourcesList FROM S3Object s",
    InputSerialization: {
      JSON: {
        Type: "DOCUMENT",
      },
    },
    OutputSerialization: {
      JSON: {},
    },
  };

  try {
    const data = await s3.selectObjectContent(params).promise();
    let resourcesList = [];
    // Process the response data
    for await (const event of data.Payload) {
      if (event.Records) {
        // Parse each record and extract resourcesList
        const records = event.Records.Payload.toString("utf-8");
        const parsedRecords = JSON.parse(records);
        resourcesList.push(...parsedRecords.resourcesList);
      }
    }
    return resourcesList;
  } catch (error) {
    console.error("Error fetching resourceList:", error);
    throw error;
  }
};

export const fetchAwsS3AccessConfig = async () => {
  const params = {
    Bucket: AwsResourceConfig.bucketName,
    Key: AwsResourceConfig.fileName,
  };
  try {
    const response = await s3.getObject(params).promise();
    const awsConfig = await JSON.parse(response.Body.toString());

    return awsConfig;
  } catch (error) {
    console.error("Error fetching aws S3 Access config:", error);
    throw error;
  }
};

export const addResourcetoAwsS3 = async (args) => {
  try {
    // Fetch existing resource list from AWS S3
    let accessConfig = await fetchAwsS3AccessConfig();

    // Add the new resource to the existing list
    await accessConfig.resourcesList.push(args);

    const params = {
      Bucket: AwsResourceConfig.bucketName,
      Key: AwsResourceConfig.fileName,
      Body: JSON.stringify(accessConfig),
      ContentType: "application/json",
    };

    const data = await s3.upload(params).promise();

    return data.Location;
  } catch (error) {
    console.error("Error while adding resource to AWS S3:", error);
    throw error;
  }
};

export const editResourcetoAwsS3 = async (args) => {
  try {
    // Fetch existing resource list from AWS S3
    let accessConfig = await fetchAwsS3AccessConfig();

    // Find the index of the resource to be edited in the existing list
    const resourceIndex = accessConfig.resourcesList.findIndex(
      (resource) => resource.name === args?.name
    );

    // If the resource is found, update its properties
    if (resourceIndex !== -1) {
      accessConfig.resourcesList[resourceIndex].description = args.description;
    } else {
      throw new Error(`Resource with name ${args?.name} not found.`);
    }

    const params = {
      Bucket: AwsResourceConfig.bucketName,
      Key: AwsResourceConfig.fileName,
      Body: JSON.stringify(accessConfig),
      ContentType: "application/json",
    };

    const data = await s3.upload(params).promise();

    return data.Location;
  } catch (error) {
    console.error("Error while adding resource to AWS S3:", error);
    throw error;
  }
};

export const deleteResourceFromAwsS3 = async (args) => {
  try {
    // Fetch existing resource list from AWS S3
    let accessConfig = await fetchAwsS3AccessConfig();

    // Find the index of the resource to be deleted in the existing list
    const resourceIndex = accessConfig.resourcesList.findIndex(
      (resource) => resource.name === args?.name
    );

    // If the resource is found, remove it from the list
    if (resourceIndex !== -1) {
      accessConfig.resourcesList.splice(resourceIndex, 1);
    } else {
      // If the resource is not found, throw an error or handle it as needed
      throw new Error(`Resource with name ${args.name} not found.`);
    }

    // Upload the updated resource list back to AWS S3
    const params = {
      Bucket: AwsResourceConfig.bucketName,
      Key: AwsResourceConfig.fileName,
      Body: JSON.stringify(accessConfig),
      ContentType: "application/json",
    };

    const data = await s3.upload(params).promise();
    console.log("Resource deleted successfully from AWS S3 :", data.Location);
    return data.Location;
  } catch (error) {
    console.error("Error while deleting resource from AWS S3:", error);
    throw error;
  }
};

export const fetchAwsS3RolesConfig = async () => {
  const params = {
    Bucket: AwsRolesConfig.bucketName,
    Key: AwsRolesConfig.fileName,
  };
  try {
    const response = await s3.getObject(params).promise();
    const awsConfig = await JSON.parse(response.Body.toString());

    return awsConfig;
  } catch (error) {
    console.error("Error fetching aws S3 role config:", error);
    throw error;
  }
};

export const addRoletoAwsS3 = async (args) => {
  try {
    // Fetch existing resource list from AWS S3
    let accessConfig = await fetchAwsS3RolesConfig();

    // Add the new resource to the existing list
    await accessConfig.roles.push(args);

    const params = {
      Bucket: AwsRolesConfig.bucketName,
      Key: AwsRolesConfig.fileName,
      Body: JSON.stringify(accessConfig),
      ContentType: "application/json",
    };
    const data = await s3.upload(params).promise();
    return data.Location;
  } catch (error) {
    console.error("Error while adding role to AWS S3:", error);
    throw error;
  }
};

export const editRoleToAwsS3 = async (args) => {
  try {
    // Fetch existing role list from AWS S3
    let rolesData = await fetchAwsS3RolesConfig();

    // Find the index of the role to be edited in the existing list
    const roleIndex = rolesData.roles.findIndex(
      (role) => role.roleName === args.roleName
    );

    // If the role is found, update its properties
    if (roleIndex !== -1) {
      rolesData.roles[roleIndex].roleDescription = args.roleDescription;
      rolesData.roles[roleIndex].resources = args.resources;
    } else {
      // If the role is not found, throw an error or handle it as needed
      throw new Error(`Role with name ${args.roleName} not found.`);
    }

    // Upload the updated roles data back to AWS S3
    const params = {
      Bucket: AwsRolesConfig.bucketName,
      Key: AwsRolesConfig.fileName,
      Body: JSON.stringify(rolesData),
      ContentType: "application/json",
    };

    const data = await s3.upload(params).promise();
    return data.Location;
  } catch (error) {
    console.error("Error while updating role in AWS S3:", error);
    throw error;
  }
};

export const deleteRoleFromAwsS3 = async (args) => {
  try {
    // Fetch existing role list from AWS S3
    let rolesData = await fetchAwsS3RolesConfig();

    // Find the index of the role to be deleted in the existing list
    const roleIndex = rolesData.roles.findIndex(
      (role) => role.roleName === args.roleName
    );

    // If the role is found, remove it from the roles array
    if (roleIndex !== -1) {
      rolesData.roles.splice(roleIndex, 1);
    } else {
      // If the role is not found, throw an error or handle it as needed
      throw new Error(`Role with name ${args.roleName} not found.`);
    }

    // Upload the updated roles data back to AWS S3
    const params = {
      Bucket: AwsRolesConfig.bucketName,
      Key: AwsRolesConfig.fileName,
      Body: JSON.stringify(rolesData),
      ContentType: "application/json",
    };
    const data = await s3.upload(params).promise();
    return data.Location;
  } catch (error) {
    console.error("Error while deleting role in AWS S3:", error);
    throw error;
  }
};

// Memoize the fetchUserDetails function to cache results
const fetchUserDetails = memoize(fetchUserDetailsFromS3);

export { fetchUserDetails };
