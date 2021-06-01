import React from 'react'
import { useTracker } from 'meteor/react-meteor-data';

export const useAccount = () => useTracker(() => {
  const user = Meteor.user();
  const userId = Meteor.userId();
  const isLoggingIn = Meteor.loggingIn();

  var username = (user === undefined) ? '...' : user.username;
  var username_github = (user === undefined || user.profile === undefined) ? '...' : user.profile.name;
  username = (username === undefined) ? username_github : username;

  return {
    user,
    userId,
    isLoggingIn,
    username
  }
}, [])
