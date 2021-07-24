const mongoose = require('mongoose');

const { Schema } = mongoose;

const defaultImage = '../client/public/images/cadmium-images/cadmiumCircle.png';

const eventSchema = new Schema({
  date: {
    // timestamp includes date?
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
    required: true
  },
  time: {
    // UPDATE to correct format - maybe do something similar to Date?
    // Actually, might not need - timestamp should show date and time down to the millisecond
    // type: DataTypes.TIME,
    // defaultValue: DataTypes.NOW,
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

  image: {
    type: String,
    default: defaultImage
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