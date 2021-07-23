const db = require('../config/connection');
const { User, Event } = require('../models');
const userSeeds = require('./userSeeds.json');
// eventsSeeds.json has the old events for now (from project 2)
const eventSeeds = require('./eventSeeds.json');

db.once('open', async () => {
  try {
    // wait do we want to use the deleteMany() method? Is this just deleting existing if it's there? (to make room for this new db)
    await Event.deleteMany({});
    await User.deleteMany({});

    await User.create(userSeeds);

    // this is when it was with thoughts - thoughtAuthor and thoughtText - reconfigure to work for our events
    for (let i = 0; i < eventSeedßs.length; i++) {
      const { _id, eventAuthor } = await Event.create(eventSeeds[i]);
      const user = await User.findOneAndUpdate(
        { username: eventAuthor },
        {
          $addToSet: {
            event: _id,
          },
        }
          // Need to fix - have some way of saying who added each event
          `Special thanks to {{event.user.username}} for adding this event!`
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('Successfully seeded!');
  process.exit(0);
});