import React from 'react';
import { Container, Navbar } from 'reactstrap';
import logo from '../../../assets/images/itegure.svg';
import { useLocation, Link } from 'react-router-dom';
import AuthMenu from './auth.menu';
import Profile from './subscriber.profile';
const Header = (props) => {
  const { onOpen } = props;
  const location = useLocation().pathname;
  return (
    <div className="index-header">
      <Navbar>
        <Container>
          <Link to="/">
            <img className="logo-default" src={logo} alt="logo" />
          </Link>
          <i className="menu-btn"></i>
          {location === '/' && <AuthMenu onOpen={onOpen} />}
          {location !== '/' && <Profile />}
        </Container>
      </Navbar>
    </div>
  );
};
export default Header;
