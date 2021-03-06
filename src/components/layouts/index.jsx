import React, { useState, useEffect } from 'react';
import Header from '../helpers/menus/home.header';
import Login from '../index/auths/login';
import Subscribe from '../index/auths/subscribe';
import '../../assets/css/style.scss';
import { currentProfile } from '../../redux/subscriptions/actions';
import { connect } from 'react-redux';
// import { Alert, Container, Row } from 'reactstrap';
const mapState = (state) => ({
  subscriptionReducer: state.subscriptions,
});
const connector = connect(mapState, { currentProfile });
const Index = (props) => {
  const [state, setState] = useState({ login: false, subscribe: false });
  const { errors } = props.subscriptionReducer;
  const onOpen = ({ log, sub }) => {
    setState({ ...state, login: log, subscribe: sub });
  };
  const onClose = () => {
    setState({ ...state, login: false, subscribe: false });
  };
  useEffect(() => {
    const fetch = () => {
      props.currentProfile();
    };
    fetch();
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    if (errors && errors.unauthorized) {
      setState({ ...state, login: true });
    }
    // eslint-disable-next-line
  }, [props.subscriptionReducer]);
  return (
    <div className="index-layout">
      {state.login && <Login onClose={onClose} />}
      {state.subscribe && <Subscribe onClose={onClose} />}
      <Header onOpen={onOpen} />
      {/* <Container>
        <Row>
          {errors && errors.unauthorized && (
            <Alert color="danger">{errors.unauthorized}</Alert>
          )}
          {errors && errors.serverError && (
            <Alert color="danger">{errors.serverError}</Alert>
          )}
        </Row>
      </Container> */}

      {props.children}
    </div>
  );
};
export default connector(Index);
