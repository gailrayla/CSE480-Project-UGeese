const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const rewardsRoutes = require('./routes/rewardRoutes');
const mongoose = require('mongoose');
const uri = "mongodb+srv://ugeese:ugeesepass@ugeese.10qe9tz.mongodb.net/?retryWrites=true&w=majority"

async function connect() {
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDb");
  } catch(error) {
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
app.use('/user', userRoutes);
app.use('/rewards', rewardsRoutes);
// app.use('/statistics', statsRoutes);
// app.use('/leaderboards', leaderboardsRoutes);
// app.use('/challenges', challengesRoutes);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
