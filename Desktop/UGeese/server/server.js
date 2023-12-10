// server.js
//const express = require('express');
//const cors = require('cors');
/*
const bodyParser = require('body-parser');
require('dotenv').config();
// const errorMiddleware = require('./middlewares/errorMiddleware');

const userRoutes = require('./routes/userRoutes');  // Note: userRoutes is now a function
const focusRoutes = require('./routes/focusRoutes');
const authRoute = require('./routes/auth');
const rewardsRoutes = require('./routes/rewardRoutes');
const statsRoutes = require('./routes/statsRoutes');
const leaderboardRoutes = require('./routes/leaderboardRoutes');
const challengesRoutes = require('./routes/challengesRoutes');
const passport = require('passport');
const passportStrategy = require('./passport');

const session = require('express-session');


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
const PORT = process.env.PORT || 5001;

app.use(cors());
app.options('*', cors());
app.use(bodyParser.json());

app.use(session({
  secret: "Our little secret.",
  resave: false,
  saveUninitialized: false
}));


app.use(passport.initialize());
app.use(passport.session());

app.use(
  '/auth',
  cors({
    origin: 'http://localhost:3000',
    methods: 'GET, POST, PUT, DELETE',
    credentials: true,
  })
);
app.use('/auth', authRoute);

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


*/




// require('dotenv').config({ path: './config/config.env' });
// const express = require('express');
// const passport = require('passport');
// // const cookieSession = require('cookie-session');
// const connectDB = require('./config/db');
// const passportStrategy = require('./passport');
// const authRoute = require('./routes/auth');
// const userRoutes = require('./routes/userRoutes');
// const focusRoutes = require('./routes/focusRoutes');
// const bodyParser = require('body-parser');
// const morgan = require('morgan');
// const cors = require('cors');

// const session = require('express-session');

// const app = express();
// connectDB();

// // logging and CORS
// if (process.env.NODE_ENV === 'development') {
//   app.use(morgan('dev'));
//   app.use(cors({ origin: true, credentials: true })); // for communication with client
// }

// app.use(bodyParser.json());

// const User = require('./models/User');

// app.use('/user', userRoutes(User)); 
// app.use('/focus', focusRoutes);


// app.use(session({
//   secret: "Our little secret.",
//   resave: false,
//   saveUninitialized: false
// }));

// app.use(passport.initialize());
// app.use(passport.session());

// app.use(
//   '/auth',
//   cors({
//     origin: 'http://localhost:3000',
//     methods: 'GET, POST, PUT, DELETE',
//     credentials: true,
//   })
// );

// app.use('/auth', authRoute);

// // run dev
// const PORT = process.env.PORT || 3000;
// app.listen(
//   PORT,
//   console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
// );

require('dotenv').config({ path: './config/config.env' });
const express = require('express');
const passport = require('passport');
const connectDB = require('./config/db');
const passportStrategy = require('./passport');
const authRoute = require('./routes/auth');
const userRoutes = require('./routes/userRoutes');
const focusRoutes = require('./routes/focusRoutes');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const session = require('express-session');

const app = express();
connectDB();

// Logging and CORS
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Allow CORS for all routes
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));

app.use(bodyParser.json());

const User = require('./models/User');

app.use('/user', userRoutes(User));
app.use('/focus', focusRoutes);

app.use(
  session({
    secret: 'Our little secret.',
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

// Configure CORS for the '/auth' route
app.use('/auth', cors({ origin: 'http://localhost:3000', credentials: true }));

app.use('/auth', authRoute);

// Run the server
const PORT = process.env.PORT || 3000;
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
