import React, { useEffect, useState } from 'react';
import Layout from '../../layouts';
import { Container, Row, Col, Alert } from 'reactstrap';
import './dashboard.scss';
import ViewStudent from '../students/read.student';
import { readAllStudent } from '../../../redux/students/actions';
import { connect } from 'react-redux';
import { viewNotifications } from '../../../redux/subscriptions/actions';
import Message from './message';
import DashboardMob from './mob.menu';
const mapState = (state) => ({
  studentReducer: state.students,
  subscriptionReducer: state.subscriptions,
});
const connector = connect(mapState, { readAllStudent, viewNotifications });
const Dashboard = (props) => {
  const { readAll, errors: studentErrors } = props.studentReducer;
  const { notifications } = props.subscriptionReducer;
  const [state, setState] = useState({
    loading: false,
    mobStudent: true,
    mobInbox: false,
  });
  useEffect(() => {
    const fetch = () => {
      setState({ ...state, loading: true });
      props.viewNotifications();
    };
    fetch();
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    if (notifications) {
      setState({ ...state, loading: false });
    }
    if (studentErrors) {
      setState({ ...state, loading: false });
    }
    // eslint-disable-next-line
  }, [props.subscriptionReducer, props.studentReducer]);
  const onSwitchMob = ({ student, inbox }) => {
    setState({ ...state, mobStudent: student, mobInbox: inbox });
  };
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
        <DashboardMob onSwitch={onSwitchMob} state={state} />
        <Container>
          <Row>
            {studentErrors && studentErrors.serverError && (
              <Alert color="danger">{studentErrors.serverError}</Alert>
            )}
            {studentErrors && studentErrors.notFoundError && (
              <Alert color="danger">{studentErrors.notFoundError}</Alert>
            )}
            {state.mobInbox && (
              <Col md="4" className="mob-div" xs="12">
                <Message notifications={notifications} state={state} />
              </Col>
            )}
            <Col md="4" className="mt-3 desk-div" xs="12">
              <Message notifications={notifications} state={state} />
            </Col>
            <Col md="8" className="mt-3 desk-div" xs="12">
              <ViewStudent />
            </Col>
            {state.mobStudent && (
              <Col md="8" className="mob-div" xs="12">
                <ViewStudent />
              </Col>
            )}
          </Row>
        </Container>
      </div>
    </Layout>
  );
};
export default connector(Dashboard);
