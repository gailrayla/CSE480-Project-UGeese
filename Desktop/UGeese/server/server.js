const express = require('express')
const cors = require('cors')
const http = require('http')
const bodyParser = require('body-parser')
const app = express();

app.use(cors());
app.options('*', cors());
app.use(bodyParser.json())

//Sample Data
let users = [
    {id: 1, name: 'John Doe', email: 'john@example.com'},
    {id: 2, name: 'Jane Doe', email: 'jane@example.com'}
];

//User Profile API - GET USER
app.get('/user/:userId', (req, res) => {
    const userId = parseInt(req.params.userId); // extracts the userId parameter from the request URL and converts it to an integer.
    const user = users.find(u => u.id === userId); // searches the users array for a user with the specified userId.
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({error: 'User not found'}); // sends a JSON response with the user's information if found, or a 404 error response if the user is not found.
    }
});

//User Profile API - POST USER
app.post('/user', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    res.json(newUser);
  });

//User Profile API - PUT
app.put('/user/:userId', (req, res) => {
    const userId = parseInt(req.params.userId);
    const updatedUser = req.body;
    const index = users.findIndex(u => u.id === userId);
    if (index !== -1) {
      users[index] = { ...users[index], ...updatedUser };
      res.json(users[index]);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  });

// User Profile API - DELETE
app.delete('/user/:userId', (req, res) => {
    const userId = parseInt(req.params.userId);
    users = users.filter(u => u.id !== userId);
    res.json({ message: 'User deleted successfully' });
  });
  


  
app.listen(5001, () => {console.log("Server started on port 5001")})