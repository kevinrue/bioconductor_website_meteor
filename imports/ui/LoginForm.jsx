import { Meteor } from 'meteor/meteor';
import React, { useState } from 'react';
import history from './history'

export const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function redirect_profile (e) {
    console.log(e);
    if (!e) {
      console.log('yay!');
      history.push('/profile');
    } else {
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
