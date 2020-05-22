import React, { Fragment, useState } from 'react';
import { Nav, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FaOsi } from 'react-icons/fa';
import { BsPhone, BsArrowReturnRight } from 'react-icons/bs';
import { NAME, PHONE_NUMBER } from '../../../redux/subscriptions/types';
import { getStorage } from '../../../redux/helpers/action.helper';
import { unSubscribe } from '../../../redux/subscriptions/actions';
import { connect } from 'react-redux';
import Unsubscribe from '../../index/unsubscribe/unsbuscribe';

const mapState = (state) => ({
  subscriptions: state.subscriptions,
});

const connector = connect(mapState, { unSubscribe });
const Profile = (props) => {
  const [state, setState] = useState({ isOpen: false });
  const name = getStorage(NAME);
  const phoneNumber = getStorage(PHONE_NUMBER);
  const closeAccount = () => {
    setState({ ...state, isOpen: !state.isOpen });
  };
  return (
    <Fragment>
      {state.isOpen && <Unsubscribe close={closeAccount} />}
      <NavItem>
        <div className="profile-info">
          <div className="d-flex">
            <div className="red-color">
              <FaOsi />
              &nbsp;
            </div>
            <div>{name && name !== '' ? name : 'no names'}</div>
          </div>
          <div className="d-flex">
            <div className="red-color">
              <BsPhone /> &nbsp;
            </div>
            <div>{phoneNumber && phoneNumber !== '' ? phoneNumber : 'no phone'}</div>
          </div>
          <div className="profile-menu mt-2">
            <Nav vertical>
              <NavItem>
                <Link className="nav-link" to="#">
                  <div className="d-flex">
                    <div className="pr-2">
                      <BsArrowReturnRight />
                    </div>
                    <div> + student class</div>
                  </div>
                </Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="#" onClick={closeAccount}>
                  <div className="d-flex">
                    <div className="pr-2">
                      <BsArrowReturnRight />
                    </div>
                    <div>unsubscribe</div>
                  </div>
                </Link>
              </NavItem>
            </Nav>
          </div>
        </div>
      </NavItem>
    </Fragment>
  );
};
export default connector(Profile);
