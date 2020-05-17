import React from 'react';
import { Form, FormGroup, Input, Button } from 'reactstrap';
import Animista, { AnimistaTypes } from 'react-animista';
import { handleValidationError } from '../../helpers/reusable/errors';
import { Spinner } from '../../helpers/reusable/loading';
import { BsCheckCircle } from 'react-icons/bs';

const SubjectModal = (props) => {
  const {
    state,
    onSubmit,
    onChange,
    errors,
    title,
    onClose,
    buttonName,
    message,
  } = props;
  return (
    <div className="student">
      <Animista type={AnimistaTypes.SCALE_UP_BOTTOM}>
        <div className="student-form">
          <div className="m-intros">
            <div className="intro-title">{title}</div>
            <div className="close-btn">
              <Button type="button" onClick={() => onClose()} className="close">
                x
              </Button>
            </div>
            {message && (
              <div className="font-weight-normal success-message">
                <BsCheckCircle />
                &nbsp; {message}
              </div>
            )}
          </div>
          <div className="m-form">
            <Form autoComplete="off" onSubmit={onSubmit}>
              <FormGroup>
                <Input
                  type="text"
                  name="name"
                  onChange={onChange}
                  placeholder="class name"
                  value={state.name}
                />
                {errors &&
                  errors.validationError &&
                  handleValidationError(errors.validationError, 'name')}
              </FormGroup>
              <FormGroup>
                <Button
                  type="submit"
                  disabled={state.modalSpinner}
                  className="submit-btn"
                >
                  {state.modalSpinner ? <Spinner color="text-light" /> : buttonName}
                </Button>
              </FormGroup>
            </Form>
          </div>
        </div>
      </Animista>
    </div>
  );
};
export default SubjectModal;
