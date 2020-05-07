import React from 'react';
import { Form, FormGroup, Input, Button } from 'reactstrap';
import './auth.scss';
import { AuthLayout } from '../../layouts/auth';
const Login = (props) => {
  const { onClose } = props;
  return (
    <AuthLayout onClose={onClose} subtitle="use the following form to login">
      <Form className="auth-form" autoComplete="off">
        <FormGroup>
          <Input type="text" name="phoneNumber" placeholder="0786605001" />
        </FormGroup>
        <FormGroup>
          <Button type="submit">login</Button>
        </FormGroup>
      </Form>
    </AuthLayout>
  );
};
export default Login;
