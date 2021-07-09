const config = require('config')
const AWS = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');
const { v4: uuidv4 } = require('uuid');

const s3Config = new AWS.S3({
    accessKeyId: config.get('AWSAccessKeyId'),
    secretAccessKey: config.get('AWSSecretKey'),
    Bucket: config.get('S3JobsBucket')
});

const fileFilter = (req, file, callback) => {

    const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];

    if (allowedFileTypes.includes(file.mimetype)) {
        callback(null, true);
    } else {
        callback(null, false);
    }
}

// Uploading images locally if multer is working.
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, './uploads/jobs');
    },
    filename: (req, file, callback) => {
        const fileName = file.originalname.toLowerCase().split(' ').join('-');
        callback(null, uuidv4() + '-' + fileName)
    }
});

// Uploading images to aws
const multerS3Config = multerS3({
    s3: s3Config,
    bucket: config.get('S3JobsBucket'),
    metadata: (req, file, callback) => {
        callback(null, { fieldName: file.fieldname });
    },
    key: (req, file, callback) => {
        const fileName = file.originalname.toLowerCase().split(' ').join('-');
        callback(null, uuidv4() + '-' + fileName)
    }
});

const upload = multer({
    storage: multerS3Config,
    fileFilter: fileFilter,
    limits: {
        fileSize: 1000000 // 1000000 Bytes = 1 MB
    }
})

exports.jobUpload = upload;