import React, { useState, useEffect } from 'react';
import { Form, FormGroup, Input, Button } from 'reactstrap';
import './auth.scss';
import { AuthLayout } from '../../layouts/auth';
import { connect } from 'react-redux';
import VerifyCode from './verification.code';
import { Spinner } from '../../helpers/reusable/loading';
import { subscribe } from '../../../redux/subscriptions/actions';
import {handleValidationError} from '../../helpers/reusable/errors';
const mapState = (state) => ({
  subscriptionReducer: state.subscriptions,
});
const connector = connect(mapState, {subscribe});
const Subscribe = (props) => {
  const { onClose } = props;
  const { errors, message } = props.subscriptionReducer;
  const [state, setState] = useState({ spinner: false, name: '', phoneNumber: '' });
  const onChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const { phoneNumber, name } = state;
    setState({ ...state, spinner: true });
    props.subscribe({ phoneNumber, name });
  };
  useEffect(() => {
    if (errors) {
      setState({ ...state, spinner: false });
    }
    if (message) {
      setState({ ...state, spinner: false, verified: true });
    }
    // eslint-disable-next-line
  }, [props.subscriptionReducer]);
  return (
    <AuthLayout onClose={onClose} subtitle="use the following form to subscribe">
      {state.verified && (
        <VerifyCode phoneNumber={state.phoneNumber} message={message} />
      )}
      {!state.verified && (
        <Form className="auth-form" autoComplete="off" onSubmit={onSubmit}>
          <FormGroup>
            <Input
              type="text"
              name="name"
              placeholder="your name"
              value={state.name}
              onChange={onChange}
            />
            {errors && errors.validationError && handleValidationError(errors.validationError, 'name')}
          </FormGroup>
          <FormGroup>
            <Input
              type="text"
              name="phoneNumber"
              placeholder="0786605001"
              value={state.phoneNumber}
              onChange={onChange}
            />
            {errors && errors.validationError && handleValidationError(errors.validationError, 'phoneNumber')}
          </FormGroup>
          <FormGroup>
            <Button type="submit">
              {state.spinner ? <Spinner color="text-light" /> : 'join'}
            </Button>
          </FormGroup>
        </Form>
      )}
    </AuthLayout>
  );
};
export default connector(Subscribe);
