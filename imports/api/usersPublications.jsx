import { Meteor } from 'meteor/meteor';
import { UsersCollection } from '/imports/db/UsersCollection';

Meteor.publish('users', function publishUsers() {
  return UsersCollection.find({}, {
    fields: { 'profile.name': 1, username: 1 }
  });
});
