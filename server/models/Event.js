const mongoose = require('mongoose');

const { Schema } = mongoose;

const eventSchema = new Schema({
  date: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
    required: true
  },
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String
  },
  locationName: {
    type: String,
    required: true,
  },
  locationAddress: {
    type: String,
    required: true,
  },
  time: {
    // UPDATE to correct format - maybe do something similar to Date?
    type: DataTypes.TIME,
    defaultValue: DataTypes.NOW,
  },
  image: {
    type: String
  },
  link: {
    type: String
  },
  // Person who added event
  contributor: {
    type: String,
    required: false
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  }
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
