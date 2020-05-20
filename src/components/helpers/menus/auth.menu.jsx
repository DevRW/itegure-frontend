import React, { Fragment } from 'react';
import { Nav, NavItem, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { IS_AUTH, IS_SUBSCRIBED } from '../../../redux/subscriptions/types';
import { getStorage, logout } from '../../../redux/helpers/action.helper';
import { BsPower } from 'react-icons/bs';
import { FaLocationArrow } from 'react-icons/fa';
import MobileAuthMenu from './m.auth.menu';
const AuthMenu = (props) => {
  const { onOpen } = props;
  return (
    <Fragment>
      <MobileAuthMenu onOpen={onOpen} />
      <div className="menu-cnt">
        <Nav pills>
          {getStorage(IS_AUTH) === String(true) ? (
            <Fragment>
              <NavItem>
                <Link to="#">
                  <Button type="button" className="auth-link-btn">
                    <div className="d-flex logout-btn" onClick={() => logout()}>
                      <div className="log-icon">
                        <BsPower />
                      </div>
                      <div>logout</div>
                    </div>
                  </Button>
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  className="btn btn-xs btn-border btn-circle"
                  to={
                    getStorage(IS_SUBSCRIBED) === String(true)
                      ? '/home'
                      : '/itegure-dashboard'
                  }
                >
                  <div
                    className="font-weight-bold mt-3"
                    style={{ fontSize: '14px' }}
                  >
                    <FaLocationArrow /> My dashboard
                  </div>
                </Link>
              </NavItem>
            </Fragment>
          ) : (
            <Fragment>
              <NavItem>
                <Link className="btn btn-xs btn-border btn-circle" to="#">
                  <Button
                    type="button"
                    className="auth-link-btn"
                    onClick={() => onOpen({ log: false, sub: true })}
                  >
                    Signup
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
            </Fragment>
          )}
        </Nav>
        <div className="clear"></div>
      </div>
    </Fragment>
  );
};
export default AuthMenu;
