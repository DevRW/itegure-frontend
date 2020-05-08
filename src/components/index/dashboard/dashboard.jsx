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
            <Col md="4" className="mt-3">
              <div className="message-div">
                <div className="msg-title">
                  <div className="red-color inbox-icon">
                    <BsChatSquareDots />
                  </div>
                  <div className="title-name">inbox</div>
                </div>
                {state.loading && (
                  <div className="m-5 d-flex justify-content-center align-items-center text-align-center loadings">
                    <LoadingWait />
                  </div>
                )}
                {notifications && notifications.length !== 0 && (
                  <div className="msg-box">
                    {notifications.map(item=><div className="msg-text" key={item.notificationId}>
                      {item.message}
                    </div>)}
                  </div>
                )}
                {notifications && notifications.length === 0 && (
                  <div className="m-5 d-flex justify-content-center align-items-center text-align-center loadings" style={{height: '50%'}}>
                    <NotFoundMessage message={'empty inbox'} />
                  </div>
                )}
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
