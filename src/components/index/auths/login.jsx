import React, { useState, useEffect, Fragment } from 'react';
import { Form, FormGroup, Input, Button } from 'reactstrap';
import './auth.scss';
import { AuthLayout } from '../../layouts/auth';
import { connect } from 'react-redux';
import { login } from '../../../redux/subscriptions/actions';
import VerifyCode from './verification.code';
import { Spinner } from '../../helpers/reusable/loading';
const mapState = (state) => ({
  subscriptionReducer: state.subscriptions,
});
const connector = connect(mapState, { login });
const Login = (props) => {
  const { onClose, subscriptionReducer } = props;
  const { errors, message } = subscriptionReducer;
  const [state, setState] = useState({
    phoneNumber: '',
    spinner: false,
    code: '',
    verified: false,
  });
  const loadingControl = (value) => {
    setState({ ...state, spinner: value });
  };
  const onChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const { phoneNumber } = state;
    loadingControl(true);
    props.login({ phoneNumber });
  };
  useEffect(() => {
    if (errors) {
      loadingControl(false);
    }
    if (message) {
      setState({ ...state, spinner: false, verified: true });
    }
    // eslint-disable-next-line
  }, [props.subscriptionReducer]);
  const subtitle = 'use the following form to login';
  return (
    <AuthLayout onClose={onClose} subtitle={subtitle}>
      {state.verified && (
        <VerifyCode phoneNumber={state.phoneNumber} message={message} />
      )}
      {!state.verified && (
        <Fragment>
          <div className="auth-error d-flex flex-column align-items-center justify-content-center">
            {errors && errors.unauthorized}
          </div>
          <Form className="auth-form" autoComplete="off" onSubmit={onSubmit}>
            <FormGroup>
              <Input
                type="tel"
                name="phoneNumber"
                placeholder="enter phone number"
                onChange={onChange}
                value={state.phoneNumber}
              />
            </FormGroup>
            <FormGroup>
              <Button type="submit" disabled={state.spinner}>
                {state.spinner ? <Spinner color="text-light" /> : 'login'}
              </Button>
            </FormGroup>
          </Form>
        </Fragment>
      )}
    </AuthLayout>
  );
};
export default connector(Login);
