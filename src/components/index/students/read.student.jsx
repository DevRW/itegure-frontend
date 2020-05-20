import React, { useState, Fragment, useEffect } from 'react';
import { Col, Row, Button } from 'reactstrap';
import {
  BsFilterLeft,
  BsGrid1X2,
  BsListTask,
  BsTrash2,
  BsBrush,
  BsCheckCircle,
} from 'react-icons/bs';
import CreateStudent from './create.student';
import { connect } from 'react-redux';
import { readAllStudent, deleteStudent } from '../../../redux/students/actions';
import { getAllClass } from '../../../redux/classes/actions';
import {
  Spinner,
  LoadingWait,
  NotFoundMessage,
} from '../../helpers/reusable/loading';
import EditStudent from './edit.student';
import './student.scss';

const mapState = (state) => ({
  classReducer: state.classes,
  studentReducer: state.students,
});
const connector = connect(mapState, { readAllStudent, getAllClass, deleteStudent });
const ReadStudent = (props) => {
  const { readAll, errors, create } = props.studentReducer;
  const [state, setState] = useState({
    isOpen: false,
    loading: false,
    studentId: '',
    spinner: false,
    error: '',
    edit: false,
    student: null,
    delSpinner: false,
  });
  const onOpen = () => {
    setState({ ...state, isOpen: !state.isOpen });
  };
  const onEdit = () => {
    setState({ ...state, edit: !state.edit });
  };
  useEffect(() => {
    const fetch = () => {
      setState({ ...state, loading: true });
      props.readAllStudent();
      props.getAllClass();
    };
    fetch();
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    if (errors || readAll) {
      setState({ ...state, loading: false });
    }
    if (create) {
      setState({ ...state, isOpen: false, edit: false });
    }
    // eslint-disable-next-line
  }, [props.studentReducer]);

  const findStudent = (studentId) => {
    setState({ ...state, studentId, spinner: true });
    const find = readAll.find((item) => item.studentId === studentId);
    if (!find) {
      setState({ ...state, error: 'student not found' });
    }
    setState({ ...state, student: find, edit: true });
  };
  const deleteStudent = (studentId) => {
    setState({ ...state, studentId, delSpinner: true });
    props.deleteStudent(studentId);
  };
  return (
    <Fragment>
      {state.isOpen && <CreateStudent isOpen={state.isOpen} onOpen={onOpen} />}
      {state.edit && (
        <EditStudent isOpen={state.edit} onOpen={onEdit} student={state.student} />
      )}
      <Col md="12" className="mt-3" xs="12">
        <div className="mt-3 mb-3">
          <Button type="button" className="p-2" onClick={onOpen}>
            + student
          </Button>
          {create && (
            <div className="font-weight-normal success-message">
              <BsCheckCircle />
              &nbsp; {create.message}
            </div>
          )}
        </div>
        <Row>
          {state.loading && (
            <Col md="12">
              <LoadingWait />
            </Col>
          )}
          {readAll && readAll.length === 0 && (
            <Col md="12">
              <NotFoundMessage message="you haven't added your student." />
            </Col>
          )}
          {readAll &&
            readAll.length !== 0 &&
            readAll.map((item, i) => (
              <Col md="6" key={i}>
                <div className="st-div d-flex align-items-center mt-3">
                  <div className="ls">
                    <div className="d-flex align-items-center">
                      <div>
                        <BsFilterLeft />
                      </div>
                      <div className="pl-2">{item.name}</div>
                    </div>
                    <div className="d-flex align-items-center">
                      <div>
                        <BsListTask />
                      </div>
                      <div className="pl-2">
                        <small>
                          {item.school ? item.school : 'school not available'}
                        </small>
                      </div>
                    </div>
                    <div className="d-flex align-items-center">
                      <div>
                        <BsGrid1X2 />
                      </div>
                      <div className="pl-2">
                        <small>
                          {item.class ? item.class.name : 'class not available'}
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="action ml-2">
                    <div className="action-div">
                      <Button
                        type="button"
                        className="ed"
                        onClick={() => findStudent(item.studentId)}
                        disabled={
                          state.studentId === item.studentId && state.spinner
                        }
                      >
                        {state.spinner && state.studentId === item.studentId ? (
                          <Spinner color="text-light" />
                        ) : (
                          <BsBrush />
                        )}
                      </Button>
                    </div>
                    <div className="action-div">
                      <Button
                        type="button"
                        className="del"
                        onClick={() => deleteStudent(item.studentId)}
                        disabled={
                          state.studentId === item.studentId && state.delSpinner
                        }
                      >
                        {state.delSpinner && state.studentId === item.studentId ? (
                          <Spinner color="text-light" />
                        ) : (
                          <BsTrash2 />
                        )}
                      </Button>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
        </Row>
      </Col>
    </Fragment>
  );
};
export default connector(ReadStudent);
