import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

export const BodyHeader = () => {

    return (
        <Navbar className="color-nav">
            <Navbar.Brand href="#home"><img src="logo/bioconductor.gif" height="100%" /></Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#news">Latest News</Nav.Link>
                <Nav.Link href="#packages">Packages</Nav.Link>
                <Nav.Link href="#support">Support</Nav.Link>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info">Search</Button>
            </Form>
        </Navbar>
    );
};
