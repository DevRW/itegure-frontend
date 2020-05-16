import React, { Fragment, useState } from 'react';
import { Nav, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FaOsi } from 'react-icons/fa';
import { BsFillEnvelopeFill, BsFileEarmarkCheck } from 'react-icons/bs';
import { NAME, PHONE_NUMBER } from '../../../redux/subscriptions/types';
import { getStorage } from '../../../redux/helpers/action.helper';
import { connect } from 'react-redux';

const mapState = (state) => ({
  subscriptions: state.subscriptions,
});

const connector = connect(mapState);
const AdminProfile = (props) => {
  const [state, setState] = useState({ isOpen: false });
  const name = getStorage(NAME);
  const phoneNumber = getStorage(PHONE_NUMBER);
  return (
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
            <BsFillEnvelopeFill /> &nbsp;
          </div>
          <div style={{ fontSize: '12px' }}>gracian2020@gmail.com</div>
        </div>
        <div className="profile-menu mt-2">
          <Nav vertical>
            <NavItem>
              <Link className="nav-link" to="#">
                <div className="d-flex">
                  <div className="pr-2">
                    <BsFileEarmarkCheck />
                  </div>
                  <div>parents</div>
                </div>
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="#">
                <div className="d-flex">
                  <div className="pr-2">
                    <BsFileEarmarkCheck />
                  </div>
                  <div>classes</div>
                </div>
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="#">
                <div className="d-flex">
                  <div className="pr-2">
                    <BsFileEarmarkCheck />
                  </div>
                  <div>subjects</div>
                </div>
              </Link>
            </NavItem>
          </Nav>
        </div>
      </div>
    </NavItem>
  );
};
export default connector(AdminProfile);
