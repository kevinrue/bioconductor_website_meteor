import { Meteor } from 'meteor/meteor';
import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { UsersCollection } from '/imports/api/UsersCollection';

export const ListUsersPage = () => {

  const users = useTracker(() => UsersCollection.find({}).fetch());
  // Why is this returning only one user (current one) when there are two in the collection?
  console.log(users);

  return (
    <div>
      <h1>List of users</h1>
 
      <ul>
        { users.map(user => <li key={user._id}>{user.username || user.profile.name}</li>) }
      </ul>
    </div>
  );

}
