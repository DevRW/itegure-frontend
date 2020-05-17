import React from 'react';
import { Form, FormGroup, Input, Button, Col, Row } from 'reactstrap';
import Animista, { AnimistaTypes } from 'react-animista';
import { handleValidationError } from '../../helpers/reusable/errors';
import { Spinner } from '../../helpers/reusable/loading';
import { BsCheckCircle } from 'react-icons/bs';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { AlertErrorMessage } from '../../helpers/reusable/loading';
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
    handleDate,
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
            {errors && (
                <div className="msg-div custom-msg-error changeError-onModal">
                  <AlertErrorMessage errors={errors} />
                </div>
              )}
           <Row>
           <Col md="12">
                <FormGroup>
                  <DatePicker
                    onChange={(date) => handleDate(date)}
                    name="date"
                    placeholderText="select date"
                    value={state.date ? new Date(state.date).toDateString() : ''}
                    className="datePicker"
                  />
                  {errors &&
                    errors.validationError &&
                    handleValidationError(errors.validationError, 'date')}
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                <Input
                  type="time"
                  name="timeFrom"
                  onChange={onChange}
                  placeholder="time from"
                  value={state.timeFrom}
                />
                {errors &&
                  errors.validationError &&
                  handleValidationError(errors.validationError, 'timeFrom')}
                </FormGroup>
              </Col>
              <Col md="6">
              <FormGroup>
                <Input
                  type="time"
                  name="timeTo"
                  onChange={onChange}
                  placeholder="time to"
                  value={state.timeTo}
                />
                {errors &&
                  errors.validationError &&
                  handleValidationError(errors.validationError, 'timeTo')}
                </FormGroup>
              </Col>
              <Col md="6">
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
              </Col>
              <Col md="6">
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
              </Col>
             <Col md="12">
             <FormGroup>
                <Button
                  type="submit"
                  disabled={state.modalSpinner}
                  className="submit-btn"
                >
                  {state.modalSpinner ? <Spinner color="text-light" /> : buttonName}
                </Button>
              </FormGroup>
             </Col>
           </Row>
            </Form>
          </div>
        </div>
      </Animista>
    </div>
  );
};
export default TimeTableModal;
