import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { UsersCollection } from '/imports/api/UsersCollection';
import { User } from '../components/User';

export const ListUsersPage = () => {

  const users = useTracker(() => UsersCollection.find({}).fetch());
  // Why is this returning only one user (current one) when there are two in the collection?
  console.log(users);

  return (
    <div>
      <h1>List of users</h1>
 
      <ul>
        { users.map(user => <User key={ user._id } user = { user } />) }
      </ul>
    </div>
  );

}
