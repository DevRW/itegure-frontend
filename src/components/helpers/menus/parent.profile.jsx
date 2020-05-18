import React, { useState } from 'react';
import { Nav, NavItem, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { BsPower } from 'react-icons/bs';
import {
  IS_SUBSCRIBED,
  IS_AUTH,
  SUBSCRIPTION_TOKEN,
} from '../../../redux/subscriptions/types';
import { getStorage, removeItem } from '../../../redux/helpers/action.helper';
import AdminProfile from './admin.profile';
import SubscriberProfile from './subscriber.profile';
const ParentProfile = () => {
  const [state, setState] = useState({ openMore: false });
  const logout = () => {
    removeItem(IS_AUTH);
    removeItem(SUBSCRIPTION_TOKEN);
    removeItem(IS_SUBSCRIBED);
    window.location.href = '/';
  };
  const openMenu = () => {
    setState({ ...state, openMore: !state.openMore });
  };
  return (
    <div className="menu-cnt">
      <Nav pills>
        <NavItem>
          <Link className="btn btn-xs btn-border btn-circle" to="#">
            <Button type="button" className="auth-link-btn">
              <div className="d-flex logout-btn" onClick={logout}>
                <div className="log-icon">
                  <BsPower />
                </div>
                <div>logout</div>
              </div>
            </Button>
          </Link>
        </NavItem>
        {getStorage(IS_SUBSCRIBED) === String(true) ? (
          <SubscriberProfile />
        ) : (
          <AdminProfile more={openMenu} state={state} />
        )}
      </Nav>
    </div>
  );
};
export default ParentProfile;
