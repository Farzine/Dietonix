// models/Plan.js
const mongoose = require("mongoose");

const foodItemSchema  = new mongoose.Schema({
    item: { type: String, },
    calories: { type: Number, },
    quantity: { type: String, },
});
const workoutSchema = new mongoose.Schema({
  exercise: { type: String, },
  duration: { type: String },
  reps: { type: Number },
  sets: { type: Number },
  description: { type: String, },
});

const nutritionSchema = new mongoose.Schema({
  breakfast: [foodItemSchema ],
  lunch: [foodItemSchema ],
  dinner: [foodItemSchema ],
});


const dayScheduleSchema = new mongoose.Schema({
  workout: [workoutSchema],
  nutrition: nutritionSchema,
});

const planSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, 
  difficulty: { type: String, enum: ["easy", "hard"],},
  duration: { type: String, default: "4 weeks" },
  schedule: {
    saturday: { type: dayScheduleSchema, },
    sunday: { type: dayScheduleSchema, },
    monday: { type: dayScheduleSchema, },
    tuesday: { type: String, default: "Rest Day" },
    wednesday: { type: dayScheduleSchema, },
    thursday: { type: dayScheduleSchema, },
    friday: { type: dayScheduleSchema, },
    
    
  },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Plan", planSchema);
