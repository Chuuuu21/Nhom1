const express = require('express');
const Resource = require('../models/resourceModel');
 
async function findResources  (req, res)  {
  try {
    const resources = await  Resource.find();
    console.log("Resources " , resources)
    res.json(resources);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

module.exports = {findResources};