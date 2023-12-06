const express = require('express');
const router = express.Router();
const Session = require('../models/Session');

// GET API
router.get('/:sessionId', async (req, res) => {
  const sessionId = req.params.sessionId;

  try {
    const session = await Session.findById(sessionId);
    if (session) {
      res.status(200).json(session);
    } else {
      res.status(404).json({ error: 'Session not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST
router.post('/start', async (req, res) => {
  console.log('Received startFocusSession request', req.body);

  const { startTime, participants, expectedDuration } = req.body;

  try {
    const newSession = await Session.create({
      startTime,
      participants: Array.isArray(participants) ? participants : [participants],
      expectedDuration,
    });

    // Return only the session ID in the response
    res.status(201).json({ sessionId: newSession._id });
  } catch (error) {
    console.error('Error creating session:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});



// PUT
// PUT
router.put('/:sessionId', async (req, res) => {
  console.log('Received endFocusSession request', req.body);
  const sessionId = req.params.sessionId;
  const { endTime, status } = req.body;

  try {
    const session = await Session.findById(sessionId);

    if (!session) {
      return res.status(404).json({ error: 'Session not found' });
    }

    // Update endTime and status
    session.endTime = endTime;
    session.status = status || 'active';

    // Calculate duration
    session.calculateDuration();

    // Check if the actual duration matches the expected duration
    if (session.duration === session.expectedDuration) {
      // Increment completedTimers
      session.incrementCompletedTimers();
    }

    // Save the changes to the database
    await session.save();

    res.status(200).json(session);
  } catch (error) {
    console.error('Error updating session:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


// DELETE
router.delete('/:sessionId', async (req, res) => {
  const sessionId = req.params.sessionId;

  try {
    await Session.findByIdAndDelete(sessionId);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
