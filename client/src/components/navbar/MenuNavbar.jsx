import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import CustomLink from "./../link/CustomLink";

const MenuNavbar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <CustomLink to="/" active className="ml-1">
          Tidepool Labs
        </CustomLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <CustomLink to="/">Home</CustomLink>
            <CustomLink to="/search">Search</CustomLink>
            <CustomLink to="/search">Logout</CustomLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MenuNavbar;
