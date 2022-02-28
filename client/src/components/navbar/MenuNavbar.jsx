import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { MdLogin, MdLogout } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { globalSel } from "../../store/global";
import { modalOp } from "../../store/modal";
import { userOp } from "../../store/user";
import { getModalParams, MODAL_NAME } from "../../utils/ModalParams";
import CustomLink from "./../link/CustomLink";

const MenuNavbar = () => {
  const isAuth = useSelector(globalSel.isAuth);
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(userOp.handleSetUserInfoPanel(true));
    document.body.classList.add("disable_scroll");
  };

  const onLogin = () => {
    dispatch(modalOp.handleSetModalState(getModalParams(MODAL_NAME.SIGN_IN)));
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <CustomLink to="/" active className="ml-1">
          CRUD
        </CustomLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <CustomLink to="/">Home</CustomLink>
            <CustomLink to="/search">Search</CustomLink>
            {isAuth && <CustomLink to="/create">Create</CustomLink>}
          </Nav>
          <Nav>
            {!!isAuth ? (
              <MdLogout
                style={{
                  color: "white",
                  cursor: "pointer",
                  fontSize: "22px",
                }}
                onClick={onLogout}
              />
            ) : (
              <MdLogin
                style={{
                  color: "white",
                  cursor: "pointer",
                  fontSize: "22px",
                }}
                onClick={onLogin}
              />
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MenuNavbar;
