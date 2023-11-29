const express = require('express');
const router = express.Router();

// Sample Data
let users = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Doe', email: 'jane@example.com' },
];

// User Profile API - GET USER
router.get('/:userId', (req, res) => {
  const userId = parseInt(req.params.userId);
  const user = users.find(u => u.id === userId);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});

// User Profile API - POST USER
router.post('/', (req, res) => {
  const newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);
  res.json(newUser);
});

// User Profile API - PUT
router.put('/:userId', (req, res) => {
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
router.delete('/:userId', (req, res) => {
  const userId = parseInt(req.params.userId);
  users = users.filter(u => u.id !== userId);
  res.json({ message: 'User deleted successfully' });
});

module.exports = router;
