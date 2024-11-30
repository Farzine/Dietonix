// routes/userPreferenceRoutes.js
const express = require('express');
const router = express.Router();
const { getUserPreferences, saveUserPreferences, deleteUserPreferences } = require('../controllers/userPreferenceController');
const { authMiddleware } = require("../controllers/auth/auth-controller") 

// Get preferences for the logged-in user
router.get('/', authMiddleware, getUserPreferences);

// Create or update preferences for the logged-in user
router.post('/', authMiddleware, saveUserPreferences);

// Delete preferences for the logged-in user
router.delete('/', authMiddleware, deleteUserPreferences);

module.exports = router;
