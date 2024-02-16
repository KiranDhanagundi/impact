import AWS from "aws-sdk";
import AWSConfig from "./Config";
// import CryptoJS from "crypto-js";

const s3 = new AWS.S3({
  accessKeyId: AWSConfig.accessKeyId,
  secretAccessKey: AWSConfig.secretAccessKey,
  region: AWSConfig.region,
});

const fetchFileFromS3 = async (fileName) => {
  const params = {
    Bucket: AWSConfig.bucketName,
    Key: fileName,
  };

  try {
    const data = await s3.getObject(params).promise();
    console.log("File content:", data.Body.toString());
    return data.Body.toString();
  } catch (error) {
    console.error("Error fetching file from S3:", error);
    throw error;
  }
};
// AES256 encryption function
// const encryptAES256 = (data, key) => {
//   const cipher = crypto.createCipher("aes256", key);
//   let encrypted = cipher.update(data, "utf8", "hex");
//   encrypted += cipher.final("hex");
//   return encrypted;
// };

// // AES256 decryption function
// const decryptAES256 = (encryptedData, key) => {
//   const decipher = crypto.createDecipher("aes256", key);
//   let decrypted = decipher.update(encryptedData, "hex", "utf8");
//   decrypted += decipher.final("utf8");
//   return decrypted;
// };

export default fetchFileFromS3;
