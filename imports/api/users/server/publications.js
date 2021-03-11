import { Meteor } from 'meteor/meteor';

import { Users } from '../users';

Meteor.publish('users.all', () => Users.find({}, {
  fields: {
    distanceInMeters: 1,
    peakId: 1,
    slope: 1,
    name: 1,
    numberOfCheckpoints: 1,
    checkPoints: 1,
  },
}).toArray());
