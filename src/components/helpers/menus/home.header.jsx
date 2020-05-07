import React, { Fragment } from 'react';
import { Container, Nav, NavItem, Navbar, NavbarBrand, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logo-pro.svg';
import { useLocation } from 'react-router-dom';
import { FaEllipsisH } from 'react-icons/fa';
import AuthMenu from './auth.menu';
import Profile from './subscriber.profile';
const Header = (props) => {
  const { onOpen } = props;
  const location = useLocation().pathname;
  return (
    <div className="index-header">
      <Navbar>
        <Container>
          <NavbarBrand className="menu-brand">
            <img className="logo-default" src={logo} alt="logo" />
          </NavbarBrand>
          <i className="menu-btn"></i>
          {location === '/' && <AuthMenu onOpen={onOpen}/>}
          {location !== '/' && <Profile/>}
        </Container>
      </Navbar>
    </div>
  );
};
export default Header;
