import React, { Fragment, useState } from 'react';
import { Nav, NavItem, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { IS_AUTH, IS_SUBSCRIBED } from '../../../redux/subscriptions/types';
import { getStorage, logout } from '../../../redux/helpers/action.helper';
import { FaSignInAlt, FaPowerOff, FaShower, FaRedoAlt } from 'react-icons/fa';
import { GrTextAlignRight } from 'react-icons/gr';
import Animista, { AnimistaTypes } from 'react-animista';
import { unSubscribe } from '../../../redux/subscriptions/actions';
import { connect } from 'react-redux';
import Unsubscribe from '../../index/unsubscribe/unsbuscribe';

const MSubscriberMenu = (props) => {
  const [state, setState] = useState({ openMenu: false, unsubscribe: false });
  const { onOpen } = props;
  const onHandleMenu = () => {
    setState({ ...state, openMenu: !state.openMenu });
  };
  const onRemoveAccount = () => {
    setState({ ...state, unsubscribe: !state.unsubscribe });
  };
  return (
    <div className="m-auth-menu">
      {state.unsubscribe && <Unsubscribe close={onRemoveAccount} />}
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
                    <Link to="#" onClick={onRemoveAccount}>
                      <FaRedoAlt />
                      &nbsp;unsubscribe
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link to="#" onClick={() => logout()}>
                      <FaPowerOff />
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
export default MSubscriberMenu;
