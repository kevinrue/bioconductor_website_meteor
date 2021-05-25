import { Meteor } from 'meteor/meteor';
import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { Redirect } from 'react-router-dom';

export const ProfilePage = () => {
  const { user, userId, isLoggingIn, isLoggedIn } = useTracker(() => {
    const user = Meteor.user()
    const userId = Meteor.userId()
    const isLoggingIn = Meteor.loggingIn()
    return {
      user,
      userId,
      isLoggingIn
    }
  })

  // If user is logged in, let them in
  if (user) {
    return (
      <div>
        <h1>Profile</h1>
        <ul>
          <li><strong>Username:</strong> {user.username}</li>
          <li><strong>Password:</strong> ***************</li>
        </ul>
      </div>
    )
  } else {
    // If user is logging in, give them more time
    if (isLoggingIn) {
      return <Redirect to={location.pathname} />;
    } else {
      // If user is neither logged in nor logging in, redirect them to the signin page
      return <Redirect to='/signin' />;
    }
  }

}
