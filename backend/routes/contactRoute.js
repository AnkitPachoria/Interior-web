const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

// POST API - Data Save MongoDB
router.post("/contact", async (req, res) => {

  try {

    const { name, email, subject, message } = req.body;

    const newContact = new Contact({
      name,
      email,
      subject,
      message,
    });

    await newContact.save();

    res.status(201).json({
      success: true,
      message: "Form data saved successfully ✅",
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      error: error.message,
    });

  }

});

module.exports = router;
