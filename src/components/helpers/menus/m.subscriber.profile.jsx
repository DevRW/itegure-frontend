import React, { Fragment, useState } from 'react';
import { Nav, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { IS_AUTH, PHONE_NUMBER, NAME } from '../../../redux/subscriptions/types';
import { getStorage, logout } from '../../../redux/helpers/action.helper';
import { FaSignInAlt, FaPowerOff, FaShower, FaRedoAlt } from 'react-icons/fa';
import { GrTextAlignRight } from 'react-icons/gr';
import Animista, { AnimistaTypes } from 'react-animista';
import Unsubscribe from '../../index/unsubscribe/unsbuscribe';
import { FaOsi } from 'react-icons/fa';
import { BsPhone } from 'react-icons/bs';
const MSubscriberMenu = (props) => {
  const [state, setState] = useState({ openMenu: false, unsubscribe: false });
  const { onOpen } = props;
  const name = getStorage(NAME);
  const phoneNumber = getStorage(PHONE_NUMBER);
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
                    <div className="d-flex menu-change">
                      <div className="red-color">
                        <FaOsi />
                        &nbsp;
                      </div>
                      <div>{name && name !== '' ? name : 'no names'}</div>
                    </div>
                    <div className="d-flex menu-change">
                      <div className="red-color">
                        <BsPhone /> &nbsp;
                      </div>
                      <div>
                        {phoneNumber && phoneNumber !== ''
                          ? phoneNumber
                          : 'no phone'}
                      </div>
                    </div>
                  </NavItem>
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
