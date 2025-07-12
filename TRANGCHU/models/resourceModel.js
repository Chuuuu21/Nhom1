const mongoose = require('mongoose');

const resourceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  link: String
}, { timestamps: true });

const Resource = mongoose.model('Resource', resourceSchema);

module.exports = Resource;
