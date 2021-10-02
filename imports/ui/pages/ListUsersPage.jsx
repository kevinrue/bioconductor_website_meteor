import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { UsersCollection } from '/imports/db/UsersCollection';
import { User } from '../components/User';
import { BiocIdentitiesCollection } from '/imports/db/BiocIdentitiesCollection';
import { BiocIdentity } from '../components/BiocIdentity';

export const ListUsersPage = () => {

  const { users } = useTracker(() => {
    const handler = Meteor.subscribe('users');

    return ({
      users: UsersCollection.find().fetch()
    });
  });

  const { biocidentities } = useTracker(() => {
    const handler = Meteor.subscribe('biocidentities');

    return ({
      biocidentities: BiocIdentitiesCollection.find().fetch()
    });
  });

  return (
    <div>
      <h1>List of users in UserCollection</h1>

      <ul>
        {users.map(user => <User key={user._id} user={user} />)}
      </ul>

      <h1>List of users in BiocIdentities</h1>

      <ul>
        {biocidentities.map(biocidentity => <BiocIdentity key={biocidentity._id} biocidentity={biocidentity} />)}
      </ul>
    </div>
  );

}
