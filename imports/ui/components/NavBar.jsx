import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import React, { Fragment } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import { useAccount } from '../hooks/useAccount.jsx';

export const NavBar = () => {
    const { user, displayName } = useAccount();
    const signout = () => Meteor.logout();

    return (
        <Navbar className="bioconductor-nav">
            <Navbar.Brand href="/"><img src="/logo/bioconductor.gif" height="100%" /></Navbar.Brand>
            
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
                <NavDropdown alignRight title="Signed in" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/signout">
                        <div className="user" onClick={signout}>
                            Sign out
                        </div></NavDropdown.Item>
                </NavDropdown>
              </Fragment>
            ) : (
              <Fragment>
                <Nav className="justify-content-end">
                    <Nav.Link href="/signin">Sign in</Nav.Link>
                </Nav>
              </Fragment>
            )}

        </Navbar>
    );
};
