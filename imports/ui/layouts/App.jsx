import React, {Component, Fragment} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import { NavBar } from '../components/NavBar.jsx';
import { Footer } from '../components/Footer.jsx';
import { LoginForm } from '../pages/LoginForm.jsx';
import history from '../components/history.jsx';

export default class App extends Component {

	render(){
	  return(
	  	    <Router history={history}>
	  	      <div>
	  	      	<NavBar />
	  	
	  	        {/* A <Switch> looks through its children <Route>s and
	  	            renders the first one that matches the current URL. */}
	  	        <Switch>
	  	          <Route exact path="/">
	  	            <h1>Welcome to Bioconductor!</h1>
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
	  	            <LoginForm />
	  	          </Route>
	  	          <Route path="/profile">
	  	            <h1>Your profile</h1>
	  	          </Route>
				  <Redirect strict from="/logout" to="/" />
	  	        </Switch>

	  	        <Footer />
	  	      </div>
	  	    </Router>
	  	  )
	}
}
