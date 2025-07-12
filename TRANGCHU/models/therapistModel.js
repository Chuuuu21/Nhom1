const mongoose = require('mongoose');

const therapistSchema = new mongoose.Schema({
  name: String,
  specialty: String,
  bio: String,
  image: String
});
 const Therapist = mongoose.model('Therapist', therapistSchema)
module.exports = Therapist