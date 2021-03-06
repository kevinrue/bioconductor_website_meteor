import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Redirect } from 'react-router-dom';
import { useAccount } from '../hooks/useAccount.jsx';

export const ProfilePage = () => {
  const { user, displayName, isLoggingIn } = useAccount();

  // If user is logged in, let them in
  if (user) {
    return (
      <div>
        <h1>Profile</h1>
        <ul>
          <li><strong>Display name:</strong> {displayName}</li>
        </ul>
      </div>
    )
  } else {
    // If user is logging in, give them more time
    if (isLoggingIn) {
      return <Redirect to={location.pathname} />;
    } else {
      // If user is neither logged in nor logging in, redirect them to the signin page
      // TODO: add some context so that the page displays "you need to sign in to access this page"
      return <Redirect to='/signin' />;
    }
  }

}
