const fs = require('fs');
const path = require('path');

const mime = require('mime-types');
const slash = require('slash');
const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');

const {
  NODE_ENV,
  VERCEL_GIT_COMMIT_REF,
  AWS_REGION_CUSTOM: s3Region,
  AWS_ACCESS_KEY_ID_CUSTOM: accessKeyId,
  AWS_SECRET_ACCESS_KEY_CUSTOM: secretAccessKey,
  AWS_BUCKET_CUSTOM: s3Bucket,
} = process.env;

const isProduction = NODE_ENV === 'production';
const isQAorMaster =
  VERCEL_GIT_COMMIT_REF === 'master' || VERCEL_GIT_COMMIT_REF === 'qa';

function validateCredentials() {
  if (!s3Region || !s3Bucket || !accessKeyId || !secretAccessKey) {
    const errorMessages = [];

    if (!s3Region) {
      errorMessages.push('Bucket region missing');
    }
    if (!s3Bucket) {
      errorMessages.push('Bucket name missing');
    }
    if (!accessKeyId) {
      errorMessages.push('Missing access key');
    }
    if (!secretAccessKey) {
      errorMessages.push('Missing secret access key');
    }

    errorMessages.forEach(errorMessage => {
      console.error(errorMessage);
    });
    process.exit(1);
  }
}

const client = new S3Client({
  region: s3Region,
  credentials: {
    accessKeyId,
    secretAccessKey,
  },
});

function uploadFile({ filePath, folderPath, bucketBasePath = '' }) {
  /**
   * remove folder path to get only the relative url based on the folderPath
   * remove folder path to get only the relative url based on the folderPath
   */
  const filename = filePath.replace(folderPath, '');
  /**
   * append the folder to upload
   * from 'chunks/app.js' to => '_next/static/chunks/app.js'
   */
  const s3File = slash(path.join(bucketBasePath, filename));
  /**
   * remove the '/' at the start of the string if it exists
   * some files are in the format '/image.png', this is a problem because it'll upload the file to a folder '/'
   */
  const s3KeyFile = s3File[0] === '/' ? s3File.slice(1, s3File.length) : s3File;

  const params = {
    Bucket: s3Bucket, // The name of the bucket. For example, 'sample_bucket_101'.
    Key: s3KeyFile, // The name of the object. For example, 'sample_upload.txt'.
    Body: fs.readFileSync(filePath), // The content of the object. For example, 'Hello world!".
    ContentType: mime.lookup(filePath),
  };

  console.log('Uploading file: ', s3KeyFile);
  const uploadCommand = new PutObjectCommand(params);
  return client.send(uploadCommand).catch(err => {
    console.log('Error to upload file', err);
    process.exit(1);
  });
}
function walk(dir, callback) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);

    if (fs.statSync(filePath).isDirectory()) {
      walk(filePath, callback);
    } else {
      callback(filePath);
    }
  });
}
async function uploadFolderToS3(folderPath, bucketBasePath) {
  validateCredentials();
  const filesArr = [];

  walk(folderPath, filePath => {
    filesArr.push(filePath);
  });

  filesArr.reduce((p, filePath) => {
    return p.then(_ => uploadFile({ filePath, folderPath, bucketBasePath }));
  }, Promise.resolve());
}

if (isProduction && isQAorMaster) {
  const staticFolderPath = path.join(process.cwd(), './.next/static');
  const publicPath = path.join(process.cwd(), './public');
  uploadFolderToS3(staticFolderPath, '_next/static');
  uploadFolderToS3(publicPath);
} else {
  console.log(
    '> The upload-assets step was skipped because we are not in a production deployment.',
  );
}
