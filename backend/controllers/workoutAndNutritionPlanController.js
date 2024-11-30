const axios = require("axios");
const Plan = require("../models/workoutAndNutrationPlan"); 

// Generate Workout and Nutrition Plans
const generatePlans = async (req, res) => {
  const { age, weight, height, fitnessGoal, workoutType, dietaryRestriction } = req.body;

  try {
    // Call GPT API
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-4",
        messages: [
          {
            role: "user",
            content: `Create two types of plans (easy and hard) for a 4-week fitness program based on the following user details:
            Age: ${age}, Weight: ${weight}kg, Height: ${height}cm, Fitness Goal: ${fitnessGoal}, Workout Type: ${workoutType}, Dietary Restriction: ${dietaryRestriction}.
            Add any number of excercises in the workout array and items in the breakfast,lunch,dinner object.
            The response should follow this JSON format:
            {
              "easy": {
                "duration": "4 weeks",
                "schedule": {
                  "saturday": {
                    "workout": [{ "exercise": "", "duration": "", "description": "" }],
                    "nutrition": {
                      "breakfast": [{ "item": "", "calories": , "quantity": "" }],
                      "lunch": [{ "item": "", "calories": , "quantity": "" }],
                      "dinner": [{ "item": "", "calories": , "quantity": "" }]
                    }
                  },
                  "sunday": {
                    "workout": [{ "exercise": "", "duration": "", "description": "" }],
                    "nutrition": {
                      "breakfast": [{ "item": "", "calories": , "quantity": "" }],
                      "lunch": [{ "item": "", "calories": , "quantity": "" }],
                      "dinner": [{ "item": "", "calories": , "quantity": "" }]
                    }
                  },
                  "monday": {
                    "workout": [{ "exercise": "", "duration": "", "description": "" }],
                    "nutrition": {
                      "breakfast": [{ "item": "", "calories": , "quantity": "" }],
                      "lunch": [{ "item": "", "calories": , "quantity": "" }],
                      "dinner": [{ "item": "", "calories": , "quantity": "" }]
                    }
                  },
                  "tuesday": "Rest Day",
                  "wednesday": {
                    "workout": [{ "exercise": "", "duration": "", "description": "" }],
                    "nutrition": {
                      "breakfast": [{ "item": "", "calories": , "quantity": "" }],
                      "lunch": [{ "item": "", "calories": , "quantity": "" }],
                      "dinner": [{ "item": "", "calories": , "quantity": "" }]
                    }
                  },
                  "thursday": {
                    "workout": [{ "exercise": "", "duration": "", "description": "" }],
                    "nutrition": {
                      "breakfast": [{ "item": "", "calories": , "quantity": "" }],
                      "lunch": [{ "item": "", "calories": , "quantity": "" }],
                      "dinner": [{ "item": "", "calories": , "quantity": "" }]
                    }
                  },
                  "friday": {
                   "workout": [{ "exercise": "", "duration": "", "description": "" }],
                    "nutrition": {
                      "breakfast": [{ "item": "", "calories": , "quantity": "" }],
                      "lunch": [{ "item": "", "calories": , "quantity": "" }],
                      "dinner": [{ "item": "", "calories": , "quantity": "" }]
                    }
                  },
                }
              },
              "hard": {
                "duration": "4 weeks",
                "schedule": {
                  "saturday": {
                    "workout": [{ "exercise": "", "duration": "", "description": "" }],
                    "nutrition": {
                      "breakfast": [{ "item": "", "calories": , "quantity": "" }],
                      "lunch": [{ "item": "", "calories": , "quantity": "" }],
                      "dinner": [{ "item": "", "calories": , "quantity": "" }]
                    }
                  },
                  "sunday": {
                    "workout": [{ "exercise": "", "duration": "", "description": "" }],
                    "nutrition": {
                      "breakfast": [{ "item": "", "calories": , "quantity": "" }],
                      "lunch": [{ "item": "", "calories": , "quantity": "" }],
                      "dinner": [{ "item": "", "calories": , "quantity": "" }]
                    }
                  },
                  "monday": {
                    "workout": [{ "exercise": "", "duration": "", "description": "" }],
                    "nutrition": {
                      "breakfast": [{ "item": "", "calories": , "quantity": "" }],
                      "lunch": [{ "item": "", "calories": , "quantity": "" }],
                      "dinner": [{ "item": "", "calories": , "quantity": "" }]
                    }
                  },
                  "tuesday": "Rest Day",
                  "wednesday": {
                    "workout": [{ "exercise": "", "duration": "", "description": "" }],
                    "nutrition": {
                      "breakfast": [{ "item": "", "calories": , "quantity": "" }],
                      "lunch": [{ "item": "", "calories": , "quantity": "" }],
                      "dinner": [{ "item": "", "calories": , "quantity": "" }]
                    }
                  },
                  "thursday": {
                    "workout": [{ "exercise": "", "duration": "", "description": "" }],
                    "nutrition": {
                      "breakfast": [{ "item": "", "calories": , "quantity": "" }],
                      "lunch": [{ "item": "", "calories": , "quantity": "" }],
                      "dinner": [{ "item": "", "calories": , "quantity": "" }]
                    }
                  },
                  "friday": {
                    "workout": [{ "exercise": "", "duration": "", "description": "" }],
                    "nutrition": {
                      "breakfast": [{ "item": "", "calories": , "quantity": "" }],
                      "lunch": [{ "item": "", "calories": , "quantity": "" }],
                      "dinner": [{ "item": "", "calories": , "quantity": "" }]
                    }
                  },
                }
              },
            }`
          }
        ],
        temperature: 0.7,
      },
      { headers: { Authorization: `Bearer ${process.env.OPENAI_API_KEY_NAFI}` } }
    );

    // console.log("GPT Response Content:", response.data.choices[0].message.content);


     // Attempt to parse GPT response as JSON
     let plans;
     try {
       plans = JSON.parse(response.data.choices[0].message.content);
     } catch (parseError) {
       console.error("Error parsing GPT response as JSON:", parseError.message);
       throw new Error("Invalid JSON response from GPT");
     }

    // Respond with generated plans
    res.status(200).json({
      success: true,
      message: "Plans generated successfully",
      plans,
    });
  } catch (error) {
    console.error("Error generating plans:", error.response?.data || error.message);
    res.status(500).json({
      success: false,
      message: "Failed to generate plans",
    });
  }
};

// Save a selected plan
const savePlan = async (req, res) => {
  const { difficulty, plans } = req.body;
  const userId = req.user.id;

  try {
    // Check if the selected difficulty exists in the generated plans
    if (!plans[difficulty]) {
      return res.status(400).json({ success: false, message: "Invalid plan difficulty selected" });
    }

    // Prepare the plan to be saved in the database
    const newPlan = new Plan({
      userId,
      difficulty,
      duration: plans[difficulty].duration, 
      schedule: plans[difficulty].schedule,
    });

    // Save the new plan to the database
    const savedPlan = await newPlan.save();

    // Simulate saving to DB (replace with your DB logic)
    res.status(200).json({
      success: true,
      message: "Plan saved successfully",
      data: savedPlan,
    });
  } catch (error) {
    console.error("Error saving plan:", error.message);
    res.status(500).json({
      success: false,
      message: "Failed to save plan",
    });
  }
};

module.exports = { generatePlans, savePlan };
