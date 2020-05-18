import React, { Fragment } from 'react';
import { Nav, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FaOsi } from 'react-icons/fa';
import { BsFillEnvelopeFill, BsArrowReturnRight } from 'react-icons/bs';
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
  const { more, state } = props;
  return (
    <Fragment>
      {!state.openMore && (
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
                        <BsArrowReturnRight />
                      </div>
                      <div>dashboard</div>
                    </div>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link className="nav-link" to="#" onClick={() => more()}>
                    <div className="d-flex">
                      <div className="pr-2">
                        <BsArrowReturnRight />
                      </div>
                      <div>more</div>
                    </div>
                  </Link>
                </NavItem>
              </Nav>
            </div>
          </div>
        </NavItem>
      )}
      {state.openMore && (
        <NavItem>
          <div className="profile-info more-menu">
            <div className="close close-menu" onClick={()=>more()}>x close</div>
            <div className="profile-menu">
              <Nav className="navigation-top-grid mt-3 pb-2">
                <NavItem>
                  <Link className="nav-link" to="/itegure-timetables">
                    <div className="d-flex">
                      <div className="pr-2">
                        <BsArrowReturnRight />
                      </div>
                      <div>timetables</div>
                    </div>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link className="nav-link" to="/itegure-subjects">
                    <div className="d-flex">
                      <div className="pr-2">
                        <BsArrowReturnRight />
                      </div>
                      <div>subjects</div>
                    </div>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link className="nav-link" to="/itegure-classes">
                    <div className="d-flex">
                      <div className="pr-2">
                        <BsArrowReturnRight />
                      </div>
                      <div>classes</div>
                    </div>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link className="nav-link" to="/itegure-stations">
                    <div className="d-flex">
                      <div className="pr-2">
                        <BsArrowReturnRight />
                      </div>
                      <div>stations</div>
                    </div>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link className="nav-link" to="/itegure-parents">
                    <div className="d-flex">
                      <div className="pr-2">
                        <BsArrowReturnRight />
                      </div>
                      <div>parents</div>
                    </div>
                  </Link>
                </NavItem>
              </Nav>
            </div>
          </div>
        </NavItem>
      )}
    </Fragment>
  );
};
export default connector(AdminProfile);
