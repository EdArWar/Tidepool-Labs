import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import CustomLink from "./../link/CustomLink";
import styles from "./MenuNavbar.module.css";

const MenuNavbar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <CustomLink to="/" active className="ml-1">
          Tidepool Labs
        </CustomLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          style={{ display: "flex", justifyContent: "space-around" }}
        >
          <Nav className={styles.menu_navbar}>
            <CustomLink to="/">Home</CustomLink>
            <CustomLink to="/create">Create</CustomLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MenuNavbar;
