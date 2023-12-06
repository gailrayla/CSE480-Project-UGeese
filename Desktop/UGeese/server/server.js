// server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
// const errorMiddleware = require('./middlewares/errorMiddleware');

const userRoutes = require('./routes/userRoutes');  // Note: userRoutes is now a function
const focusRoutes = require('./routes/focusRoutes');
const rewardsRoutes = require('./routes/rewardRoutes');
const statsRoutes = require('./routes/statsRoutes');
const leaderboardRoutes = require('./routes/leaderboardRoutes');
const challengesRoutes = require('./routes/challengesRoutes');

const mongoose = require('mongoose');
const uri = "mongodb+srv://ugeese:ugeesepass@ugeese.10qe9tz.mongodb.net/?retryWrites=true&w=majority";
// mongoose.connect(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useFindAndModify: false,
// });


// Import the User model
const User = require('./models/User');
// const Session = require('./models/Session');


async function connect() {
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(error);
  }
}
connect();

const app = express();
const PORT = 5001;

app.use(cors());
app.options('*', cors());
app.use(bodyParser.json());

// Mounting the routes
app.use('/user', userRoutes(User));  // Pass the User model to the userRoutes
app.use('/focus', focusRoutes);
app.use('/rewards', rewardsRoutes);
app.use('/statistics', statsRoutes);
app.use('/leaderboard', leaderboardRoutes);
app.use('/challenges', challengesRoutes);

// app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
