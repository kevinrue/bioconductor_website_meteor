import { Meteor } from 'meteor/meteor';
import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { UsersCollection } from '/imports/api/UsersCollection';

export const ListUsersPage = () => {

  const users = useTracker(() => UsersCollection.find({}).fetch());

  return (
    <div>
      <h1>List of users</h1>
 
      <ul>
        { users.map(task => <li>{task.username}</li>) }
      </ul>
    </div>
  );

}
