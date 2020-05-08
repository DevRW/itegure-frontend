import React, { useState, useEffect, Fragment } from 'react';
import Layout from './student.layout';
import { connect } from 'react-redux';
import { getAllClass } from '../../../redux/classes/actions';
import { updateStudent } from '../../../redux/students/actions';
const mapState = (state) => ({
  classReducer: state.classes,
  studentReducer: state.students,
});
const connector = connect(mapState, { getAllClass, updateStudent });
const EditStudent = (props) => {
  const { classes } = props.classReducer;
  const { create, errors } = props.studentReducer;
  const [state, setState] = useState({
    name: '',
    school: '',
    classStudy: '',
    loading: false,
    spinner: false,
    message: '',
    studentId: '',
  });
  const onChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setState({ ...state, spinner: true });
    props.updateStudent(state.studentId, state);
  };
  useEffect(() => {
    setState({ ...state, isOpen: props.isOpen });
    // eslint-disable-next-line
  }, [props.isOpen]);
  useEffect(() => {
    const fetch = () => {
      props.getAllClass();
    };
    fetch();
    // eslint-disable-next-line
  }, [props.getAllClass]);
  useEffect(() => {
    if (errors) {
      setState({ ...state, spinner: false });
    }
    if (create) {
      setState({ ...state, message: create.message, spinner: false });
    }
    // eslint-disable-next-line
  }, [props.studentReducer]);
  useEffect(() => {
    if (props.student) {
      const { name, school, studentId, classId } = props.student;
      setState({ ...state, name, school, classStudy: classId, studentId });
    }
    // eslint-disable-next-line
  }, [props.student]);
  return (
    <Fragment>
      {props.isOpen && (
        <Layout
          onSubmit={onSubmit}
          state={state}
          onChange={onChange}
          onClose={props.onOpen}
          isOpen={props.isOpen}
          classes={classes && classes}
          title="Edit student"
          errors={errors}
          message={state.message}
        ></Layout>
      )}
    </Fragment>
  );
};

export default connector(EditStudent);
