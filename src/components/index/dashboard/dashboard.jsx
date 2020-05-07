import React, { useState } from 'react';
import Layout from '../../layouts';
import { Container, Row, Col, Button } from 'reactstrap';
import './dashboard.scss';
import {
  BsFilterLeft,
  BsGrid1X2,
  BsListTask,
  BsTrash2,
  BsBrush,
  BsChatSquareDots,
} from 'react-icons/bs';
import CreateStudent from '../students/create.student';
const Dashboard = () => {
  const [state, setState] = useState({ isOpen: false });
  const onOpen = () => {
    setState({ ...state, isOpen: !state.isOpen });
  };
  return (
    <Layout>
      {state.isOpen && <CreateStudent isOpen={state.isOpen} onOpen={onOpen}/>}
      <div className="sub-dashboard">
        <Container>
          <Row>
            <Col md="10">
              <div className="dash-intro">
                welcome back, you have
                <div className="font-weight-bold">25 students</div> assigned on you.
              </div>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col md="4" className="mt-3">
              <div className="message-div">
                <div className="msg-title">
                  <div className="red-color inbox-icon">
                    <BsChatSquareDots />
                  </div>
                  <div className="title-name">inbox</div>
                </div>
                <div className="msg-box">
                  <div className="msg-text">
                    Hello, we would like to remind you that gratien will study
                    Mathematic lesson on TV1
                  </div>
                  <div className="msg-text">
                    Hello, we would like to remind you that gratien will study
                    Mathematic lesson on TV1
                  </div>
                  <div className="msg-text">
                    Hello, we would like to remind you that gratien will study
                    Mathematic lesson on TV1
                  </div>
                </div>
              </div>
            </Col>
            <Col md="8" className="mt-3">
              <div className="mt-3 mb-3">
                <Button type="button" className="p-2" onClick={onOpen}>
                  + student
                </Button>
              </div>
              <Row>
                <Col md="5">
                  <div className="st-div d-flex align-items-center">
                    <div className="ls">
                      <div className="d-flex align-items-center">
                        <div>
                          <BsFilterLeft />
                        </div>
                        <div className="pl-2">mucyo jean de dieu</div>
                      </div>
                      <div className="d-flex align-items-center">
                        <div>
                          <BsListTask />
                        </div>
                        <div className="pl-2">
                          <small>Saint Peter Secondary</small>
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <div>
                          <BsGrid1X2 />
                        </div>
                        <div className="pl-2">
                          <small>P6</small>
                        </div>
                      </div>
                    </div>
                    <div className="action ml-2">
                      <div className="action-div">
                        <Button type="button" className="ed">
                          <BsBrush />
                        </Button>
                      </div>
                      <div className="action-div">
                        <Button type="button" className="del">
                          <BsTrash2 />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  );
};
export default Dashboard;
