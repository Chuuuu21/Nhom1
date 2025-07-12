const express = require('express');
const router = express.Router();
const ForumPost = require('../models/forumModel');

async function findForums (req, res) {
  try {
    const posts = await ForumPost.find();
    console.log(posts)
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
module.exports = {findForums};