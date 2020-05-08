import React, { useEffect, useState } from 'react';
import Layout from '../../layouts';
import { Container, Row, Col } from 'reactstrap';
import './dashboard.scss';
import { BsChatSquareDots } from 'react-icons/bs';
import ViewStudent from '../students/read.student';
import { readAllStudent } from '../../../redux/students/actions';
import { connect } from 'react-redux';
import { viewNotifications } from '../../../redux/subscriptions/actions';
import { LoadingWait, NotFoundMessage } from '../../helpers/reusable/loading';
import Message from './message';
const mapState = (state) => ({
  studentReducer: state.students,
  subscriptionReducer: state.subscriptions,
});
const connector = connect(mapState, { readAllStudent, viewNotifications });
const Dashboard = (props) => {
  const { readAll } = props.studentReducer;
  const { notifications } = props.subscriptionReducer;
  const [state, setState] = useState({ loading: false });
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
    // eslint-disable-next-line
  }, [props.subscriptionReducer]);
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
            <Message notifications={notifications} state={state} />
            <ViewStudent />
          </Row>
        </Container>
      </div>
    </Layout>
  );
};
export default connector(Dashboard);
