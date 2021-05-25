import { Meteor } from 'meteor/meteor';
import React from 'react'
import { useTracker } from 'meteor/react-meteor-data';

export const SignupForm = () => {
  const user = useTracker(() => Meteor.user());
  console.log(user);

  return (
  	<h1>This page will host a registration form.</h1>
  )
}

