import React from 'react'
import { useTracker } from 'meteor/react-meteor-data';

export const useAccount = () => useTracker(() => {
  const user = Meteor.user();
  const userId = Meteor.userId();
  const isLoggingIn = Meteor.loggingIn();

  var username = undefined;

  // password
  if (user && user.username) {
    username = user.username
  }

  // github
  if (username === undefined && user && user.profile && user.profile.name) {
    username = user.profile.name;
  }

  return {
    user,
    userId,
    isLoggingIn,
    username
  }
}, [])
