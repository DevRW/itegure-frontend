import React from 'react';
import { Nav, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FaOsi } from 'react-icons/fa';
import { BsFillEnvelopeFill, BsFileEarmarkCheck } from 'react-icons/bs';
import { NAME } from '../../../redux/subscriptions/types';
import { getStorage } from '../../../redux/helpers/action.helper';
import { connect } from 'react-redux';
import { EMAIL } from '../../../redux/user/types';
const mapState = (state) => ({
  subscriptions: state.subscriptions,
});

const connector = connect(mapState);
const AdminProfile = (props) => {
  const name = getStorage(NAME);
  const email = getStorage(EMAIL);
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
          <div style={{ fontSize: '13px' }}>
            {email && email !== '' ? email : 'no-email'}
          </div>
        </div>
        <div className="profile-menu mt-2">
          <Nav vertical>
            <NavItem>
              <Link className="nav-link" to="/itegure-dashboard">
                <div className="d-flex">
                  <div className="pr-2">
                    <BsFileEarmarkCheck />
                  </div>
                  <div>dashboard</div>
                </div>
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/itegure-dashboard">
                <div className="d-flex">
                  <div className="pr-2">
                    <BsFileEarmarkCheck />
                  </div>
                  <div>more</div>
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
