const mongoose = require('mongoose');

const { Schema } = mongoose;

// for saved list of events
const listSchema = new Schema({
  savedDate: {
    type: Date,
    default: Date.now
  },
  events: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Event'
    }
  ]
});

const List = mongoose.model('List', listSchema);

module.exports = List;
