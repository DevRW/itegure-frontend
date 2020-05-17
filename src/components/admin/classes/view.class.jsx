import React, { useState, useEffect } from 'react';
import Layout from '../../layouts/admin';
import Intro from '../../helpers/reusable/section.intro';
import { Container, Row, Button } from 'reactstrap';
import { connect } from 'react-redux';
import {
  getAllClass,
  deleteClass,
  updateClass,
  createClass,
} from '../../../redux/classes/actions';
import { SuccessMessage, AlertErrorMessage } from '../../helpers/reusable/loading';
import ReadAll from './read.class';
import ClassStudyModal from './create.class';
const mapState = (state) => ({
  classReducer: state.classes,
});
const connector = connect(mapState, {
  getAllClass,
  deleteClass,
  updateClass,
  createClass,
});
const ViewAllClassStudy = (props) => {
  const [state, setState] = useState({
    loading: false,
    classStudyId: '',
    spinner: false,
    delSpinner: false,
    editClassStudy: false,
    createClass: false,
    name: '',
  });
  const { errors: classStudyErrors, classes, message } = props.classReducer;
  const clearState = () => {
    setState({
      ...state,
      loading: false,
      delSpinner: false,
      spinner: false,
      modalSpinner: false,
      editClassStudy: false,
      createClass: false,
      name: '',
    });
  };
  useEffect(() => {
    if (classStudyErrors || classes) {
      setState({
        ...state,
        loading: false,
        delSpinner: false,
        spinner: false,
        modalSpinner: false,
      });
    }
    if (message) {
      clearState();
    }
    // eslint-disable-next-line
  }, [props.classReducer]);
  useEffect(() => {
    const fetch = () => {
      setState({ ...state, loading: true });
      props.getAllClass();
    };
    fetch();
    // eslint-disable-next-line
  }, []);
  const openClassStudy = (item) => {
    const { id: classStudyId, name } = item;
    setState({
      ...state,
      editClassStudy: true,
      createClass: false,
      classStudyId,
      name,
    });
  };
  const onDeleteClassStudy = (classStudyId) => {
    setState({ ...state, classStudyId, delSpinner: true });
    props.deleteClass({ classStudyId });
  };
  const onUpdateClassStudy = (e) => {
    e.preventDefault();
    setState({ ...state, modalSpinner: true });
    const { classStudyId, name } = state;
    props.updateClass({ classStudyId, name });
  };
  const onChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const onCreateClass = (e) => {
    e.preventDefault();
    setState({ ...state, modalSpinner: true });
    const { name } = state;
    props.createClass({ name });
  };
  const onClose = () => {
    setState({ ...state, editClassStudy: false, createClass: false });
  };
  const openCreateModal = () => {
    setState({ ...state, createClass: true });
  };
  return (
    <Layout>
      <div className="sub-dashboard">
        <Intro value={''} bold={'Classes'} />
        <Container>
          <Row>
            <div className="pl-4">
              we currently have <b>{classes && classes.length}</b> classes
            </div>
          </Row>
          <Row>
            <div className="pl-4 mt-3">
              <Button type="button" className="btn-new" onClick={openCreateModal}>
                + new class
              </Button>
              {message && <SuccessMessage message={message} suc={true} er={false} />}
              {classStudyErrors && (
                <div className="msg-div custom-msg-error">
                  <AlertErrorMessage errors={classStudyErrors} />
                </div>
              )}
            </div>
          </Row>
        </Container>
        <ReadAll
          classes={classes}
          onDeleteClassStudy={onDeleteClassStudy}
          openClassStudy={openClassStudy}
          state={state}
        />
        {state.editClassStudy && (
          <ClassStudyModal
            state={state}
            onSubmit={onUpdateClassStudy}
            onChange={onChange}
            errors={classStudyErrors}
            title={'edit class'}
            onClose={onClose}
            buttonName={'update'}
            message={message}
          />
        )}
        {state.createClass && (
          <ClassStudyModal
            state={state}
            onSubmit={onCreateClass}
            onChange={onChange}
            errors={classStudyErrors}
            title={'add class'}
            onClose={onClose}
            buttonName={'submit'}
            message={message}
          />
        )}
      </div>
    </Layout>
  );
};
export default connector(ViewAllClassStudy);
