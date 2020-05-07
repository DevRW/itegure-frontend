import React, { useState, useEffect, Fragment } from 'react';
import Layout from './student.layout';
import { connect } from 'react-redux';
import { getAllClass } from '../../../redux/classes/actions';
const mapState = (state) => ({
  classReducer: state.classes,
});
const connector = connect(mapState, { getAllClass });
const CreateStudent = (props) => {
  const { classes } = props.classReducer;
  const [state, setState] = useState({
    name: '',
    school: '',
    classStudy: '',
    loading: false,
  });
  const onChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
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
        ></Layout>
      )}
    </Fragment>
  );
};

export default connector(CreateStudent);
