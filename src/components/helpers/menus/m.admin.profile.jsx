import React, { Fragment, useState } from 'react';
import { Nav, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { NAME } from '../../../redux/subscriptions/types';
import { getStorage, logout } from '../../../redux/helpers/action.helper';
import { FaPowerOff } from 'react-icons/fa';
import { EMAIL } from '../../../redux/user/types';
import { FaOsi } from 'react-icons/fa';
import { GrTextAlignRight } from 'react-icons/gr';
import Animista, { AnimistaTypes } from 'react-animista';
import { BsFillEnvelopeFill } from 'react-icons/bs';
const MAdminMenu = (props) => {
  const [state, setState] = useState({ openMenu: false });
  const { onOpen } = props;
  const onHandleMenu = () => {
    setState({ ...state, openMenu: !state.openMenu });
  };
  const name = getStorage(NAME);
  const email = getStorage(EMAIL);
  return (
    <Fragment>
      <div className="m-auth-menu">
        <div className="m-menu-icon" onClick={onHandleMenu}>
          <GrTextAlignRight />
        </div>
        {state.openMenu && (
          <Animista type={AnimistaTypes.SLIDE_BOTTOM}>
            <div className="m-auth-list ad-list-mob">
              <Nav vertical>
                <NavItem>
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
                </NavItem>
                <NavItem>
                  <Link to="/itegure-dashboard">&nbsp;dashboard</Link>
                </NavItem>
                <NavItem>
                  <Link to="/itegure-parents">&nbsp;parents</Link>
                </NavItem>
                <NavItem>
                  <Link to="/itegure-timetable">&nbsp;timetables</Link>
                </NavItem>
                <NavItem>
                  <Link to="/itegure-stations">&nbsp;stations</Link>
                </NavItem>
                <NavItem>
                  <Link to="/itegure-subjects">&nbsp;subjects</Link>
                </NavItem>
                <NavItem>
                  <Link to="/itegure-classes">&nbsp;classes</Link>
                </NavItem>
                <NavItem>
                  <Link to="#" onClick={() => logout()}>
                    <FaPowerOff />
                    &nbsp;logout
                  </Link>
                </NavItem>
              </Nav>
            </div>
          </Animista>
        )}
      </div>
    </Fragment>
  );
};
export default MAdminMenu;
