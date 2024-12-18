require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); 
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const frontUrl = process.env.VITE_PUBLIC_APP_FRONTEND_URL;



////////////////////////////////////////////////////////////////////
const authRouter = require("./routes/auth/auth-routes");
const userPreferenceRoutes = require("./routes/userPreferenceRoutes");
const workoutAndNutritionPlanRoutes = require("./routes/workoutAndNutrationPlanRoutes");

////////////////////////////////////////////////////////////////////


const { MONGO_URI } = require('./config/config');


const corsOptions ={
  origin:`${frontUrl}`, 
  methods:['GET','POST','PUT','DELETE'],
  allowedHeaders: [
    "Content-Type",
    "Authorization",
    "Cache-Control",
    "Expires",
    "Pragma",
  ],
  credentials:true,            
  optionSuccessStatus:200,
}


const app = express();
const PORT = 5000;
app.use(cors(corsOptions));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());
app.use(cookieParser());




/////////////////////////////////////////////////////////////////////////
app.use("/api/auth", authRouter);
app.use("/api/user-preferences", userPreferenceRoutes);
app.use("/api/workout-nutrition-plans", workoutAndNutritionPlanRoutes);

/////////////////////////////////////////////////////////////////////////

app.get('/', (req, res) => {
  res.send('Welcome Farm AI');
});

mongoose.connect(MONGO_URI) 
  .then(async () => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB', err);
  });
