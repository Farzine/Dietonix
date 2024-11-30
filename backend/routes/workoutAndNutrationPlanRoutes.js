// routes/planRoutes.js
const express = require("express");
const { generatePlans, savePlan } = require("../controllers/workoutAndNutritionPlanController");
const { authMiddleware } = require("../controllers/auth/auth-controller")  

const router = express.Router();

// Route to generate plans
router.post("/generate", authMiddleware, generatePlans);

// Route to save a selected plan
router.post("/save", authMiddleware, savePlan);

module.exports = router;
