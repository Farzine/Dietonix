const UserPreference = require("../models/UserPreference");

// Get user preferences for logged-in user
const getUserPreferences = async (req, res) => {
  try {
    const userId = req.user.id; 
    const preferences = await UserPreference.findOne({ userId });

    if (!preferences) {
      return res.status(404).json({
        success: false,
        message: "Preferences not found!",
      });
    }

    res.status(200).json({
      success: true,
      message: "User preferences retrieved successfully",
      data: preferences,
    });
  } catch (error) {
    console.error("Error retrieving preferences:", error);
    res.status(500).json({
      success: false,
      message: "Some error occurred while fetching preferences",
    });
  }
};

// Create or update user preferences
const saveUserPreferences = async (req, res) => {
  const userId = req.user.id; 
  const { age, weight, height, fitnessGoal, workoutType, dietaryRestriction } =
    req.body;

  try {
    const preferences = await UserPreference.findOneAndUpdate(
      { userId },
      { age, weight, height, fitnessGoal, workoutType, dietaryRestriction },
      { new: true, upsert: true } 
    );

    res.status(200).json({
      success: true,
      message: "User preferences saved successfully",
      data: preferences,
    });
  } catch (error) {
    console.error("Error saving preferences:", error);
    res.status(500).json({
      success: false,
      message: "Some error occurred while saving preferences",
    });
  }
};

// Delete user preferences
const deleteUserPreferences = async (req, res) => {
  const userId = req.user.id; 

  try {
    const deleted = await UserPreference.findOneAndDelete({ userId });

    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: "No preferences found to delete!",
      });
    }

    res.status(200).json({
      success: true,
      message: "User preferences deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting preferences:", error);
    res.status(500).json({
      success: false,
      message: "Some error occurred while deleting preferences",
    });
  }
};

module.exports = {
  getUserPreferences,
  saveUserPreferences,
  deleteUserPreferences,
};
