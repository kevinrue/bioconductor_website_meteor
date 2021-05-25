import { Meteor } from 'meteor/meteor';
import React, { useState } from 'react';
import history from '../components/history'

export const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function redirect_profile (e) {
    console.log(e);
    // Redirect to profile if there is no log in error
    if (!e) {
      // TODO: replace by a cleaner way to redirect users
      console.log('yay!');
      history.push('/profile');
    } else {
      // TODO: display an error message on failed login
      console.log('nay!');
    }
  }

  const submit = e => {
    e.preventDefault();

    Meteor.loginWithPassword(username, password, redirect_profile);
  };

  return (
    <form onSubmit={submit} className="login-form">
      <label htmlFor="username">Username</label>

      <input
        type="text"
        placeholder="Username"
        name="username"
        required
        onChange={e => setUsername(e.target.value)}
      />

      <label htmlFor="password">Password</label>

      <input
        type="password"
        placeholder="Password"
        name="password"
        required
        onChange={e => setPassword(e.target.value)}
      />

      <button type="submit">Log In</button>
    </form>
  );
};
