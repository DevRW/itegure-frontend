import React, { useState, useEffect, Fragment } from 'react';
import { Form, FormGroup, Input, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { authenticate } from '../../../redux/subscriptions/actions';
import { Spinner } from '../../helpers/reusable/loading';

const mapState = (state) => ({
  subscriptionReducer: state.subscriptions,
});
const connector = connect(mapState, { authenticate });
const VerifyCode = (props) => {
  const { subscriptionReducer, phoneNumber } = props;
  const { errors, message } = subscriptionReducer;
  const [state, setState] = useState({ spinner: false, code: '' });
  const loadingControl = (value) => {
    setState({ ...state, spinner: value });
  };
  const onChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const { code } = state;
    loadingControl(true);
    props.authenticate({ code, phoneNumber });
  };
  useEffect(() => {
    if (errors || message) {
      loadingControl(false);
    }
    // eslint-disable-next-line
  }, [props.subscriptionReducer]);
  return (
    <Fragment>
      {message && (
        <div className="auth-error success-color d-flex flex-column align-items-center justify-content-center">
          {message}
        </div>
      )}
      <div className="auth-error d-flex flex-column align-items-center justify-content-center">
        {errors && 'failed, the provided information does not match to our records'}
      </div>
      <Form className="auth-form" autoComplete="off" onSubmit={onSubmit}>
        <FormGroup>
          <Input
            type="text"
            name="code"
            placeholder="enter verification code"
            onChange={onChange}
            value={state.code}
          />
        </FormGroup>
        <FormGroup>
          <Button type="submit" disabled={state.spinner}>
            {state.spinner ? <Spinner color="text-light" /> : 'verify'}
          </Button>
        </FormGroup>
      </Form>
    </Fragment>
  );
};
export default connector(VerifyCode);
