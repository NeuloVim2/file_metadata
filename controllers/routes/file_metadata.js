const express = require('express');
const FileMetadata = express.Router();

// import 'multer' to process 'multipart/form-data'
const multer  = require('multer')
const upload = multer({ dest: './public/data/uploads/' });

FileMetadata.post('/fileanalyse', upload.single('upfile'), (req, res) => {
    resObject = {
        name: req.file.originalname,
        size: req.file.size,
        type: req.file.mimetype
    }

    res.status(200).json(resObject);
})

module.exports = FileMetadata