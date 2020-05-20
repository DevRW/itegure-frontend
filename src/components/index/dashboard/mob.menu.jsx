import React from 'react';
import { Col, Row, Container } from 'reactstrap';
import { FaUsers, FaRegPaperPlane } from 'react-icons/fa';
const DashboardMobMenu = (props) => {
  const { onSwitch, state } = props;
  return (
    <Container>
      <div className="dash-mob-list p-4">
        <Row>
          <Col xs="6" md="6">
            <div
              className="d-flex dash-m"
              onClick={() => onSwitch({ student: true, inbox: false })}
              style={{ borderBottom: state.mobStudent && '2px solid #1a73e8' }}
            >
              <div className="d-ico m-1 mr-2">
                <FaUsers />
              </div>{' '}
              <div>students</div>
            </div>
          </Col>
          <Col xs="6" md="6">
            <div
              className="d-flex dash-m"
              onClick={() => onSwitch({ student: false, inbox: true })}
            >
              <div className="d-ico m-1 mr-2">
                <FaRegPaperPlane />
              </div>{' '}
              <div>Inbox</div>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};
export default DashboardMobMenu;
