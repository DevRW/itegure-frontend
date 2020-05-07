import React from 'react';
import {
  Container,
  Row,
  Nav,
  NavItem,
  Navbar,
  NavbarBrand,
  NavLink,
  Button,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logo-pro.svg';
const Header = () => {
  return (
    <div className="index-header">
      <Navbar>
        <Container>
          <NavbarBrand className="menu-brand">
            <img className="logo-default" src={logo} alt="logo" />
          </NavbarBrand>
          <i className="menu-btn"></i>
          <div className="menu-cnt">
            <Nav pills>
              <NavItem>
                <Link className="btn btn-xs btn-border btn-circle" to="/">
                  <Button type="button" className="auth-link-btn">
                    Subscribe
                  </Button>
                </Link>
              </NavItem>
              <NavItem>
                <Link className="btn btn-xs btn-border btn-circle" to="/">
                  <Button type="button" className="auth-link-btn signin-link">
                    Sign in
                  </Button>
                </Link>
              </NavItem>
            </Nav>
            <div className="clear"></div>
          </div>
        </Container>
      </Navbar>
    </div>
  );
};
export default Header;
