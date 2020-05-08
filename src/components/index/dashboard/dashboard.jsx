import React from 'react';
import Layout from '../../layouts';
import { Container, Row, Col } from 'reactstrap';
import './dashboard.scss';
import { BsChatSquareDots } from 'react-icons/bs';
import ViewStudent from '../students/read.student';
import { readAllStudent } from '../../../redux/students/actions';
import { connect } from 'react-redux';
const mapState = (state) => ({
  studentReducer: state.students,
});
const connector = connect(mapState, { readAllStudent });
const Dashboard = (props) => {
  const { readAll } = props.studentReducer;
  return (
    <Layout>
      <div className="sub-dashboard">
        <Container>
          <Row>
            <Col md="10">
              {readAll && readAll.length !== 0 && (
                <div className="dash-intro">
                  welcome back, you have
                  <div className="font-weight-bold">
                    {readAll.length} students
                  </div>{' '}
                  assigned on you.
                </div>
              )}
              {readAll && readAll.length === 0 && (
                <div className="dash-intro"> welcome back, </div>
              )}
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
                </div>
              </div>
            </Col>
            <ViewStudent />
          </Row>
        </Container>
      </div>
    </Layout>
  );
};
export default connector(Dashboard);
