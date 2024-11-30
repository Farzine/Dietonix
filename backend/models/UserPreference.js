// models/UserPreference.js
const mongoose = require('mongoose');

const userPreferenceSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', 
    required: true,
    unique: true
  },
  age: { type: String, required: true },
  weight: { type: String, required: true },
  height: { type: String, required: true },
  fitnessGoal: {
    type: String,
    enum: ['weightloss', 'muscle gain', 'endurance'],
    required: true
  },
  workoutType: {
    type: String,
    enum: ['instrumental', 'free hand'],
    required: true
  },
  dietaryRestriction: { type: String, default: 'None' }
}, { timestamps: true });

module.exports = mongoose.model('UserPreference', userPreferenceSchema);
