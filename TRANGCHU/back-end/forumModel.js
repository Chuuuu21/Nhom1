const mongoose = require('mongoose');

const forumSchema = new mongoose.Schema({
  author: String,
  title: String,
  content: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('ForumPost', forumSchema);