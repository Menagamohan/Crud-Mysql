import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const NavigationBar = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="/s">Hideaway Resort</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <LinkContainer to="/s">
                        <Nav.Link>Home</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/create">
                        <Nav.Link>CreatePost</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/create">
                        <Nav.Link>Details</Nav.Link>
                    </LinkContainer>
                    
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavigationBar;