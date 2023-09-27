const Painting = require('../models/painting'); // Assuming you have a Painting model

export const createPainting = async (req, res) => {
  try {
    const { image, dimensions, medium, title, text, width, height } = req.body; // Extract data from the request body
    // Create a new painting using the data
    const newPainting = new Painting({ image, dimensions, medium, title, text, width, height });
    const savedPainting = await newPainting.save();

    // Respond with the saved painting data
    res.status(201).json(savedPainting);
  } catch (error) {
    // Handle errors, e.g., validation errors or database errors
    res.status(400).json({ error: 'Bad request' });
  }
}

module.exports = {
  createPainting,
};
