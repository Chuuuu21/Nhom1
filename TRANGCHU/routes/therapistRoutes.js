const express = require('express');
const router = express.Router();
const Therapist = require('../models/therapistModel');

async function findTherapist (req, res)  {
  try {
    const therapists =await Therapist.find();
    console.error(therapists)
    res.json(therapists);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

module.exports = {findTherapist };