const express = require('express');
const router = express.Router();

// Sample Data
let challenges = [
  { id: 'challenge1', title: 'Challenge 1', description: 'Complete daily tasks', active: true },
  { id: 'challenge2', title: 'Challenge 2', description: 'Exercise for 30 minutes daily', active: true },
];

// Challenges API - GET LIST OF ACTIVE CHALLENGES
router.get('/', (req, res) => {
  const activeChallenges = challenges.filter(challenge => challenge.active);
  res.json(activeChallenges);
});

// Challenges API - CREATE A NEW CHALLENGE
router.post('/', (req, res) => {
  const newChallenge = req.body;
  newChallenge.id = `challenge${challenges.length + 1}`;
  challenges.push(newChallenge);
  res.json(newChallenge);
});

// Challenges API - GET DETAILS OF A SPECIFIC CHALLENGE
router.get('/:challengeId', (req, res) => {
  const challengeId = req.params.challengeId;
  const challenge = challenges.find(challenge => challenge.id === challengeId);
  if (challenge) {
    res.json(challenge);
  } else {
    res.status(404).json({ error: 'Challenge not found' });
  }
});

// Challenges API - UPDATE CHALLENGE DETAILS
router.put('/:challengeId', (req, res) => {
  const challengeId = req.params.challengeId;
  const updatedChallenge = req.body;
  const index = challenges.findIndex(challenge => challenge.id === challengeId);
  if (index !== -1) {
    challenges[index] = { ...challenges[index], ...updatedChallenge };
    res.json(challenges[index]);
  } else {
    res.status(404).json({ error: 'Challenge not found' });
  }
});

// Challenges API - END A CHALLENGE
router.delete('/:challengeId', (req, res) => {
  const challengeId = req.params.challengeId;
  challenges = challenges.filter(challenge => challenge.id !== challengeId);
  res.json({ message: 'Challenge ended successfully' });
});

module.exports = router;
