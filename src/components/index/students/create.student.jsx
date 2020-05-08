import React, { useState, useEffect, Fragment } from 'react';
import Layout from './student.layout';
import { connect } from 'react-redux';
import { getAllClass } from '../../../redux/classes/actions';
import { createStudent } from '../../../redux/students/actions';
const mapState = (state) => ({
  classReducer: state.classes,
  studentReducer: state.students,
});
const connector = connect(mapState, { getAllClass, createStudent });
const CreateStudent = (props) => {
  const { classes } = props.classReducer;
  const { create, errors } = props.studentReducer;
  const [state, setState] = useState({
    name: '',
    school: '',
    classStudy: '',
    loading: false,
    spinner: false,
    message: '',
  });
  const onChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setState({ ...state, spinner: true });
    props.createStudent(state);
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
          title="Assign new student"
          errors={errors}
          message={state.message}
          buttonName="submit"
        ></Layout>
      )}
    </Fragment>
  );
};

export default connector(CreateStudent);
