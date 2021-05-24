import React, { Fragment } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import { useTracker } from 'meteor/react-meteor-data';
import { LoginForm } from './LoginForm';

export const BodyHeader = () => {
    const user = useTracker(() => Meteor.user());
    const logout = () => Meteor.logout();

    console.log(user);

    return (
        <Navbar className="bioconductor-nav">
            <Navbar.Brand href="/"><img src="logo/bioconductor.gif" height="100%" /></Navbar.Brand>
            
            <Nav className="mr-auto">
                <Nav.Link href="/news">Latest News</Nav.Link>
                <Nav.Link href="/packages">Packages</Nav.Link>
                <Nav.Link href="/support">Support</Nav.Link>
            </Nav>
            
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info">Search</Button>
            </Form>

            {user ? (
              <Fragment>
                <NavDropdown alignRight title="Profile" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/profile">Signed in as <strong>{user.username}</strong></NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/logout">
                        <div className="user" onClick={logout}>
                            Sign out
                        </div></NavDropdown.Item>
                </NavDropdown>
              </Fragment>
            ) : (
              <LoginForm />
            )}

        </Navbar>
    );
};
