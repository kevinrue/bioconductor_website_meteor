import React from 'react'
import { useTracker } from 'meteor/react-meteor-data';

export function getDisplayName(user) {
  var displayName = undefined;

  // password
  if (user && user.username) {
    displayName = user.username
  }

  // github
  if (displayName === undefined && user && user.profile && user.profile.name) {
    displayName = user.profile.name;
  }

  return(displayName)
}

export const useAccount = () => useTracker(() => {
  const user = Meteor.user();
  const userId = Meteor.userId();
  const isLoggingIn = Meteor.loggingIn();

  const displayName = getDisplayName(user);

  return {
    user,
    userId,
    isLoggingIn,
    displayName
  }
}, [])
