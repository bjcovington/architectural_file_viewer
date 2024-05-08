const express = require('express');
const multer = require('multer');
const path = require('path');
const { projectFiles } = require('../models/user'); // Assumes projectFiles is stored in a model or in-memory

const router = express.Router();

// Set up Multer for file uploads, storing files in 'uploads/' directory
const storage = multer.diskStorage({
  destination: '../uploads/', // Path to the directory where files are stored
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname)); // Unique filename to avoid conflicts
  },
});

const upload = multer({ storage }); // Initialize Multer with disk storage

// File upload endpoint
router.post('/:userid', upload.single('file'), (req, res) => {
  const { userid } = req.params;
  const file = req.file; // The uploaded file

  if (!file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }

  // Store the file information in memory or database
  if (!projectFiles[userid]) {
    projectFiles[userid] = [];
  }

  projectFiles[userid].push({
    filename: file.filename, // The unique filename used for storage
    originalname: file.originalname, // Original filename for reference
  });

  res.status(200).json({
    message: 'File uploaded successfully!',
    filename: file.filename, // Return the stored filename
  });
});

// File download endpoint
router.get('/:filename', (req, res) => {
  const { filename } = req.params;

  if (!filename) {
    return res.status(400).json({ message: 'Invalid filename' });
  }

  // Construct the file path for downloading
  const filePath = path.join(__dirname, '../uploads', filename);

  res.download(filePath, (err) => {
    if (err) {
      console.error('File download failed:', err);
      res.status(404).json({ message: 'File not found' });
    }
  });
});

module.exports = router;
