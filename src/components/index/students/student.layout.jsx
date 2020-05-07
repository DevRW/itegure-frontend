import React from 'react';
import { Form, Button, FormGroup, Input } from 'reactstrap';
import './student.scss';
import Animista, { AnimistaTypes } from 'react-animista';
const StudentLayout = (props) => {
  const { title, onClose, onSubmit, state, classes, onChange } = props;
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
        </div>
        <div className="m-form">
          <Form autoComplete="off" onSubmit={(e) => onSubmit(e)}>
            <FormGroup>
              <Input
                type="text"
                name="name"
                value={state.name}
                placeholder="student name"
                onChange={(e) => onChange(e)}
              />
            </FormGroup>
            <FormGroup>
              <Input
                type="text"
                name="school"
                value={state.school}
                placeholder="school name"
                onChange={(e) => onChange(e)}
              />
            </FormGroup>
            <FormGroup>
              <Input
                type="select"
                name="classStudy"
                value={state.classStudy}
                onChange={(e) => onChange(e)}
              >
                <option value="">select class</option>
                {classes &&
                  classes.length !== 0 &&
                  classes.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  ))}
              </Input>
            </FormGroup>
            <FormGroup>
              <Button type="submit" className="submit-btn">submit</Button>
            </FormGroup>
          </Form>
        </div>
       </div>
      </Animista>
    </div>
  );
};
export default StudentLayout;
