import React from 'react';
import { Form, FormGroup, Input, Button } from 'reactstrap';
import Animista, { AnimistaTypes } from 'react-animista';
import { handleValidationError } from '../../helpers/reusable/errors';
import { Spinner } from '../../helpers/reusable/loading';
import { BsCheckCircle } from 'react-icons/bs';

const StationModal = (props) => {
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
  const stationType = ['Television', 'Radio'];
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
                  placeholder="station name"
                  value={state.name}
                />
                {errors &&
                  errors.validationErrors &&
                  handleValidationError(errors.validationErrors, 'name')}
              </FormGroup>
              <FormGroup>
                <Input
                  type="select"
                  name="type"
                  value={state.type}
                  onChange={onChange}
                >
                  <option value="">select station</option>
                  {stationType.map((item) => (
                    <option value={item}>{item}</option>
                  ))}
                </Input>
                {errors &&
                  errors.validationError &&
                  handleValidationError(errors.validationError, 'type')}
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
export default StationModal;
