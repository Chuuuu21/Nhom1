const mongoose = require('mongoose');

const therapistSchema = new mongoose.Schema({
  name: String,
  specialty: String,
});

module.exports = mongoose.model('Therapist', therapistSchema);