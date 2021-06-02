import { Meteor } from 'meteor/meteor';
import React, {Component, Fragment} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import { NavBar } from '../components/NavBar.jsx';
import { Footer } from '../components/Footer.jsx';
import { HomePage } from '../pages/HomePage.jsx';
import { SigninPage} from '../pages/SigninPage.jsx';
import { SignupPage } from '../pages/SignupPage.jsx';
import { ProfilePage } from '../pages/ProfilePage.jsx';
import { ListUsersPage } from '../pages/ListUsersPage.jsx';

export default class App extends Component {

	render(){
	  return(
	  	    <Router>
	  	      <div>
	  	      	<NavBar />
	  	
	  	        {/* A <Switch> looks through its children <Route>s and
	  	            renders the first one that matches the current URL. */}
	  	        <Switch>
	  	          <Route exact path="/">
	  	            <HomePage />
	  	          </Route>
	  	          <Route path="/news">
	  	          	{/* TODO: should be a real page itself. */}
	  	            <h1>Latest news</h1>
	  	          </Route>
	  	          <Route path="/packages">
	  	          	{/* TODO: should be a real page itself. */}
	  	            <h1>Packages</h1>
	  	          </Route>
	  	          <Route path="/support">
	  	          	{/* TODO: should be a real page itself. */}
	  	            <h1>Support</h1>
	  	          </Route>
	  	          <Route path="/signin">
	  	          	{Meteor.userId() ? <Redirect to="/profile" /> : <SigninPage />}
	  	          </Route>
	  	          <Route path="/signup">
	  	            <SignupPage />
	  	          </Route>
	  	        	{/* TODO: signout should be a real page that signs out and then redirects, if users navigate to the page directly themselves. */}
				  			<Redirect strict from="/signout" to="/" />
	  	          <Route path="/profile">
	  	            <ProfilePage />
	  	          </Route>
	  	          <Route path="/admin/users">
	  	            <ListUsersPage />
	  	          </Route>
	  	          <Route path="/_oauth/github">
	  	          	{Meteor.userId() ? <Redirect to="/profile" /> : <Redirect to="/" />}
	  	          </Route>
	  	        </Switch>

	  	        <Footer />
	  	      </div>
	  	    </Router>
	  	  )
	}
}
