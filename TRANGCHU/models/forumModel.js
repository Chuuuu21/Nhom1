const mongoose = require('mongoose');

const forumSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: String,
  createdAt: { type: Date, default: Date.now }
});
const Forum = mongoose.model('ForumPost', forumSchema);

module.exports = Forum;