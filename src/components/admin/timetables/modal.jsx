import React from 'react';
import { Form, FormGroup, Input, Button } from 'reactstrap';
import Animista, { AnimistaTypes } from 'react-animista';
import { handleValidationError } from '../../helpers/reusable/errors';
import { Spinner } from '../../helpers/reusable/loading';
import { BsCheckCircle } from 'react-icons/bs';

const TimeTableModal = (props) => {
  const {
    state,
    onSubmit,
    onChange,
    errors,
    title,
    onClose,
    buttonName,
    message,
    stations,
    subjects,
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
                  placeholder="station name"
                  value={state.name}
                />
                {errors &&
                  errors.validationError &&
                  handleValidationError(errors.validationError, 'name')}
              </FormGroup>
              <FormGroup>
                <Input
                  type="select"
                  name="station"
                  value={state.station}
                  onChange={onChange}
                >
                  <option value="">select station</option>
                  {stations &&
                    stations.length > 0 &&
                    stations.map((item, i) => (
                      <option value={item.id} key={i}>
                        {item.name}
                      </option>
                    ))}
                </Input>
                {errors &&
                  errors.validationError &&
                  handleValidationError(errors.validationError, 'station')}
              </FormGroup>
              <FormGroup>
                <Input
                  type="select"
                  name="subject"
                  value={state.subject}
                  onChange={onChange}
                >
                  <option value="">select subject</option>
                  {subjects &&
                    subjects.length > 0 &&
                    subjects.map((item, i) => (
                      <option value={item.id} key={i}>
                        {item.name}
                      </option>
                    ))}
                </Input>
                {errors &&
                  errors.validationError &&
                  handleValidationError(errors.validationError, 'subject')}
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
export default TimeTableModal;
