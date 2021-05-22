import React, { Fragment } from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { LoginForm } from './LoginForm';
import { BodyHeader } from './BodyHeader.jsx';
import { BodyFooter } from './BodyFooter.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

export const App = () => {
	const user = useTracker(() => Meteor.user());
	const logout = () => Meteor.logout();

	console.log(user)

	return (

      <div className="main">
        {user ? (
          <Fragment>
          	<div className="user" onClick={logout}>
              {user.username} 🚪
            </div>

            <BodyHeader />
		    <h1>Welcome to Bioconductor!</h1>
		    <BodyFooter />
          </Fragment>
        ) : (
          <LoginForm />
        )}
      </div>
	)
}
