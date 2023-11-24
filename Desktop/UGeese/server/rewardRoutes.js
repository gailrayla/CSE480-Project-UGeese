const express = require('express');
const router = express.Router();

// Sample Data
let rewards = [
  { id: 1, userId: 1, name: 'Gold Badge' },
  { id: 2, userId: 1, name: '500 Points' },
  { id: 3, userId: 2, name: 'Silver Badge' },
];

// Rewards API - GET USER'S EARNED REWARDS
router.get('/:userId', (req, res) => {
  const userId = parseInt(req.params.userId);
  const userRewards = rewards.filter((reward) => reward.userId === userId);
  res.json(userRewards);
});

// Rewards API - ADD NEW REWARD TO USER'S COLLECTION
router.post('/:userId', (req, res) => {
  const userId = parseInt(req.params.userId);
  const newReward = req.body;
  newReward.userId = userId;
  newReward.id = rewards.length + 1;
  rewards.push(newReward);
  res.json(newReward);
});

// Rewards API - REMOVE REWARD FROM USER'S COLLECTION
router.delete('/:rewardId', (req, res) => {
  const rewardId = parseInt(req.params.rewardId);
  rewards = rewards.filter((reward) => reward.id !== rewardId);
  res.json({ message: 'Reward removed from user\'s collection successfully' });
});

module.exports = router;
