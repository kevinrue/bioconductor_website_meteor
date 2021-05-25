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
import { SigninForm } from '../pages/SigninForm.jsx';
import { SignupForm } from '../pages/SignupForm.jsx';
import { ProfilePage } from '../pages/ProfilePage.jsx';

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
	  	            <h1>Latest news</h1>
	  	          </Route>
	  	          <Route path="/packages">
	  	            <h1>Packages</h1>
	  	          </Route>
	  	          <Route path="/support">
	  	            <h1>Support</h1>
	  	          </Route>
	  	          <Route path="/signin">
	  	            <SigninForm />
	  	          </Route>
	  	          <Route path="/signup">
	  	            <SignupForm />
	  	          </Route>
	  	          <Route path="/profile">
	  	            <ProfilePage />
	  	          </Route>
				  <Redirect strict from="/signout" to="/" />
	  	        </Switch>

	  	        <Footer />
	  	      </div>
	  	    </Router>
	  	  )
	}
}
