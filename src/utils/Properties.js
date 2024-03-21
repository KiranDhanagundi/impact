import AWS from "aws-sdk";
import { AWSConfig } from "./Config";
import CryptoJS from "crypto-js";

const s3 = new AWS.S3({
  accessKeyId: AWSConfig.accessKeyId,
  secretAccessKey: AWSConfig.secretAccessKey,
  region: AWSConfig.region,
});

export const fetchFileFromS3 = async (fileName) => {
  const params = {
    Bucket: AWSConfig.bucketName,
    Key: fileName,
    Expression: "SELECT s.reactEnvVariables FROM S3Object s",
    ExpressionType: "SQL",
    InputSerialization: {
      JSON: {
        Type: "LINES",
      },
    },
    OutputSerialization: {
      JSON: {},
    },
  };

  try {
    const data = await s3.selectObjectContent(params).promise();
    const records = [];

    // Process data directly from the Payload object
    for await (const event of data.Payload) {
      console.log("Received event:", event); // Log the received event
      if (event.Records) {
        const chunk = event.Records.Payload.toString("utf-8");
        const parsedChunk = JSON.parse(chunk); // Parse chunk as JSON
        records.push(parsedChunk);
      }
    }

    console.log("Query results:", records);
    return records;
  } catch (error) {
    console.error("Error fetching object from S3:", error);
    throw error;
  }
};

// AES256 encryption function
// const key = mscale@2024
export const encryptAES256 = (data, key) => {
  return CryptoJS.AES.encrypt(data, key).toString();
};

// AES256 decryption function
export const decryptAES256 = (data, key) => {
  const bytes = CryptoJS.AES.decrypt(data, key);
  console.log("bytes", bytes);
  return bytes.toString(CryptoJS.enc.Utf8);
};
