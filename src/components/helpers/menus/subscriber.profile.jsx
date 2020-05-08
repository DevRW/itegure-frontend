import React, { Fragment } from 'react';
import { Nav, NavItem, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FaOsi } from 'react-icons/fa';
import { BsPhone, BsFileEarmarkCheck, BsPower } from 'react-icons/bs';
import { NAME, PHONE_NUMBER } from '../../../redux/subscriptions/types';
import { getStorage } from '../../../redux/helpers/action.helper';
const Profile = () => {
  const name = getStorage(NAME);
  const phoneNumber = getStorage(PHONE_NUMBER);
  return (
    <div className="menu-cnt">
      <Nav pills>
        <Fragment>
          <NavItem>
            <Link className="btn btn-xs btn-border btn-circle" to="#">
              <Button type="button" className="auth-link-btn">
                <div className="d-flex logout-btn">
                  <div className="log-icon">
                    <BsPower />
                  </div>
                  <div>logout</div>
                </div>
              </Button>
            </Link>
          </NavItem>
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
                <div>
                  {phoneNumber && phoneNumber !== '' ? phoneNumber : 'no phone'}
                </div>
              </div>
              <div className="profile-menu mt-2">
                <Nav vertical>
                  <NavItem>
                    <Link className="nav-link" to="#">
                      <div className="d-flex">
                        <div className="pr-2">
                          <BsFileEarmarkCheck />
                        </div>
                        <div> + students</div>
                      </div>
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link className="nav-link" to="#">
                      <div className="d-flex">
                        <div className="pr-2">
                          <BsFileEarmarkCheck />
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
      </Nav>
    </div>
  );
};
export default Profile;
