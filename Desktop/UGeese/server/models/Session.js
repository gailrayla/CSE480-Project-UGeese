const mongoose = require('mongoose');

const focusSessionSchema = new mongoose.Schema({
  startTime: { type: Date, required: true },
  endTime: { type: Date },
  participants: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  status: { type: String, default: 'active' },
  completedTimers: { type: Number, default: 0 },
  duration: { type: Number, default: 0 },
  expectedDuration: { type: Number, required: true },
});


// Add any additional methods or virtual properties here

focusSessionSchema.methods.endSession = function (endTime) {
  this.endTime = endTime;
  this.status = 'completed';
  this.calculateDuration();

  // Check if the actual duration matches the expected duration
  if (this.duration === this.expectedDuration) {
    this.incrementCompletedTimers();
  }

  // Add logging to see the values
  console.log('Duration:', this.duration);
  console.log('Expected Duration:', this.expectedDuration);

  // Update the duration and increment completedTimers
  this.save(); // Save the changes to the database
};


focusSessionSchema.methods.calculateDuration = function () {
  if (this.startTime && this.endTime) {
    const startTime = new Date(this.startTime);
    const endTime = new Date(this.endTime);

    // Add logging to see intermediate values
    console.log('Start Time:', startTime);
    console.log('End Time:', endTime);

    const durationInMilliseconds = endTime - startTime;
    this.duration = Math.floor(durationInMilliseconds / (1000 * 60)); // Convert to minutes

    // Add logging to see the calculated duration
    console.log('Calculated Duration:', this.duration);
  }
};


focusSessionSchema.methods.getStartHour = function () {
  if (this.startTime) {
    const startDateTime = new Date(this.startTime);
    return startDateTime.getHours();
  }
  return null;
};

focusSessionSchema.methods.getStartDay = function () {
  if (this.startTime) {
    const startDateTime = new Date(this.startTime);
    return startDateTime.getDate();
  }
  return null;
};

focusSessionSchema.methods.getStartWeek = function () {
  if (this.startTime) {
    const startDateTime = new Date(this.startTime);
    const weekStartDate = new Date(startDateTime.getFullYear(), 0, 1);
    const weekNumber = Math.ceil(((startDateTime - weekStartDate) / 86400000 + weekStartDate.getDay() + 1) / 7);
    return weekNumber;
  }
  return null;
};

focusSessionSchema.methods.getStartMonth = function () {
  if (this.startTime) {
    const startDateTime = new Date(this.startTime);
    return startDateTime.getMonth() + 1; // Months are zero-based
  }
  return null;
};

focusSessionSchema.methods.incrementCompletedTimers = function () {
  this.completedTimers += 1;
};

const Session = mongoose.model('Session', focusSessionSchema);

module.exports = Session;
