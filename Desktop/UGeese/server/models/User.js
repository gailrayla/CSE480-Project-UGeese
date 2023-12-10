/*
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  studentId: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  sessions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Session' }],
  googleId: {
    type: String,
    required: false, //optional
  },
  // Add other fields as needed
});

const User = mongoose.model('User', userSchema);

module.exports = User;
*/
const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: false,
  },
  studentId: {
    type: String,
    required: false, //optional
  },
  department: {
    type: String,
    required: false, //optional
  },
  googleId: {
    type: String,
    required: false, //optional
  },
  sessions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Session' }],
});

const User = mongoose.model('User', userSchema);
module.exports = User;
