const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const rewardsRoutes = require('./routes/rewardsRoutes');

const app = express();
const PORT = 5001;

app.use(cors());
app.options('*', cors());
app.use(bodyParser.json());

// Mounting the routes
app.use('/user', userRoutes);
app.use('/rewards', rewardsRoutes);
app.use('/statistics', statisticsRoutes);
app.use('/leaderboards', leaderboardsRoutes);
app.use('/challenges', challengesRoutes);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
