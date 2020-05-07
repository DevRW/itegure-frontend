import React from 'react';
import { Form, FormGroup, Input, Button } from 'reactstrap';
import './auth.scss';
import { AuthLayout } from '../../layouts/auth';
const Subscribe = (props) => {
  const { onClose } = props;
  return (
    <AuthLayout onClose={onClose} subtitle="use the following form to subscribe">
      <Form className="auth-form" autoComplete="off">
      <FormGroup>
          <Input type="text" name="name" placeholder="your name" />
        </FormGroup>
        <FormGroup>
          <Input type="text" name="phoneNumber" placeholder="0786605001" />
        </FormGroup>
        <FormGroup>
          <Button type="submit">join</Button>
        </FormGroup>
      </Form>
    </AuthLayout>
  );
};
export default Subscribe;
