import Painting from '../models/painting';
import express from "express";

const router = express.Router();

// Define your routes and route handlers
router.get('/api/gallery', (req, res) => {
    // Your code to handle GET /api/paintings
  });
  
router.post('/api/gallery', createPainting);

// Export the router for use in your main application file
module.exports = router;