import React from 'react';
import { Nav, NavItem, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const AuthMenu = (props) => {
    const { onOpen } = props;
  return (
    <div className="menu-cnt">
      <Nav pills>
        <NavItem>
          <Link className="btn btn-xs btn-border btn-circle" to="#">
            <Button
              type="button"
              className="auth-link-btn"
              onClick={() => onOpen({ log: false, sub: true })}
            >
              Subscribe
            </Button>
          </Link>
        </NavItem>
        <NavItem>
          <Link className="btn btn-xs btn-border btn-circle" to="#">
            <Button
              type="button"
              className="auth-link-btn signin-link"
              onClick={() => onOpen({ log: true, sub: false })}
            >
              Sign in
            </Button>
          </Link>
        </NavItem>
      </Nav>
      <div className="clear"></div>
    </div>
  );
};
export default AuthMenu;
