import React, {Component, Fragment} from 'react';
import { BodyHeader } from './BodyHeader.jsx';
import { BodyFooter } from './BodyFooter.jsx';
import { LoginForm } from './LoginForm.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import history from './history.jsx'

export default class App extends Component {

	render(){
	  return(
	  	    <Router history={history}>
	  	      <div>
	  	      	<BodyHeader />
	  	
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

	  	        <BodyFooter />
	  	      </div>
	  	    </Router>
	  	  )
	}
}
