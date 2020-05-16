import React, { useState, useEffect } from 'react';
import { Container, Row, Form, FormGroup, Input, Button } from 'reactstrap';
import logo from '../../../assets/images/itegure.svg';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../../../redux/user/actions';
import { Spinner } from '../../helpers/reusable/loading';
const mapState = (state) => ({
  userReducer: state.users,
});
const connector = connect(mapState, { login });
const Login = (props) => {
  const [state, setState] = useState({ email: '', password: '', spinner: false });
  const { errors } = props.userReducer;
  const onChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setState({ ...state, spinner: true });
    props.login(state);
  };
  useEffect(() => {
    if (errors) {
      setState({ ...state, spinner: false });
    }
    // eslint-disable-next-line
  }, [props.userReducer]);
  return (
    <div className="auth-ad">
      <Container>
        <Row>
          <div className="d-flex flex-column justify-content-center align-items-center w-100">
            <center>
              <Link to="/">
                <img src={logo} alt={logo} className="ad-logo" />
              </Link>
              <div className="title">Login to itegure</div>
            </center>
            <div className="forms-ad">
              {errors && errors.unauthorized && (
                <div className="red-color ad-error">{errors.unauthorized}</div>
              )}
              <Form autoComplete="off" onSubmit={onSubmit}>
                <FormGroup>
                  <Input
                    type="text"
                    placeholder="email address"
                    name="email"
                    value={state.email}
                    onChange={onChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Input
                    type="password"
                    placeholder="password"
                    name="password"
                    value={state.password}
                    onChange={onChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Button type="submit" disabled={state.spinner}>
                    {state.spinner ? <Spinner /> : 'login'}
                  </Button>
                </FormGroup>
              </Form>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};
export default connector(Login);
