import React, { Fragment, useState } from 'react';
import { Nav, NavItem, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { IS_AUTH, IS_SUBSCRIBED } from '../../../redux/subscriptions/types';
import { getStorage, logout } from '../../../redux/helpers/action.helper';
import { BsPower } from 'react-icons/bs';
import { FaLocationArrow, FaSignInAlt, FaShower } from 'react-icons/fa';
import { GrTextAlignRight } from 'react-icons/gr';
import Animista, { AnimistaTypes } from 'react-animista';
const MAuthMenu = (props) => {
  const [state, setState] = useState({ openMenu: false });
  const { onOpen } = props;
  const onHandleMenu = () => {
    setState({ ...state, openMenu: !state.openMenu });
  };
  return (
    <div className="m-auth-menu">
      <div className="m-menu-icon" onClick={onHandleMenu}>
        <GrTextAlignRight />
      </div>
      {state.openMenu && (
        <Animista type={AnimistaTypes.SLIDE_BOTTOM}>
          <div className="m-auth-list">
            <Nav vertical>
              {getStorage(IS_AUTH) === String(true) ? (
                <Fragment>
                  <NavItem>
                    <Link
                      to={
                        getStorage(IS_SUBSCRIBED) === String(true)
                          ? '/home'
                          : '/itegure-dashboard'
                      }
                    >
                      <FaSignInAlt />
                      &nbsp; my account
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link to="#" onClick={() => logout()}>
                      <FaShower />
                      &nbsp;logout
                    </Link>
                  </NavItem>
                </Fragment>
              ) : (
                <Fragment>
                  {' '}
                  <NavItem>
                    <Link to="#" onClick={() => onOpen({ log: true, sub: false })}>
                      <FaSignInAlt />
                      &nbsp;signin
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link to="#" onClick={() => onOpen({ log: false, sub: true })}>
                      <FaShower />
                      &nbsp;signup
                    </Link>
                  </NavItem>
                </Fragment>
              )}
            </Nav>
          </div>
        </Animista>
      )}
    </div>
  );
};
export default MAuthMenu;
