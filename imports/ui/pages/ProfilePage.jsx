import { Meteor } from 'meteor/meteor';
import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { Redirect } from 'react-router-dom';

export const ProfilePage = () => {
  const user = useTracker(() => Meteor.user());

  if (!user) {
  	return <Redirect to='/signin'/>;
  }

  return (
  	<div>
	  	<h1>Profile</h1>
	  	<ul>
	  		<li><strong>Username:</strong> {user.username}</li>
	  		<li><strong>Password:</strong> ***************</li>
	  	</ul>
  	</div>
  	)
}
