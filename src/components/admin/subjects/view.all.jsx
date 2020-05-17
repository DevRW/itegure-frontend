import React, { useState, useEffect } from 'react';
import Layout from '../../layouts/admin';
import Intro from '../../helpers/reusable/section.intro';
import { Container, Row, Button } from 'reactstrap';
import { connect } from 'react-redux';
import {
  getAllSubject,
  deleteSubject,
  updateSubject,
  createSubject,
} from '../../../redux/subjects/actions';
import { SuccessMessage, AlertErrorMessage } from '../../helpers/reusable/loading';
import ReadAll from './read.all';
import SubjectModal from './modal';
const mapState = (state) => ({
  subjectReducer: state.subjects,
});
const connector = connect(mapState, {
  getAllSubject,
  deleteSubject,
  updateSubject,
  createSubject,
});
const ViewAllSubject = (props) => {
  const [state, setState] = useState({
    loading: false,
    subjectId: '',
    spinner: false,
    delSpinner: false,
    editSubject: false,
    createSubject: false,
    name: '',
  });
  const { errors: subjectErrors, subjects, message } = props.subjectReducer;
  const clearState = () => {
    setState({
      ...state,
      loading: false,
      delSpinner: false,
      spinner: false,
      modalSpinner: false,
      editSubject: false,
      createSubject: false,
      name: '',
    });
  };
  useEffect(() => {
    if (subjectErrors || subjects) {
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
  }, [props.subjectReducer]);
  useEffect(() => {
    const fetch = () => {
      setState({ ...state, loading: true });
      props.getAllSubject();
    };
    fetch();
    // eslint-disable-next-line
  }, []);
  const openSubject = (item) => {
    const { id: subjectId, name } = item;
    setState({
      ...state,
      editSubject: true,
      createSubject: false,
      subjectId,
      name,
    });
  };
  const onDeleteSubject = (subjectId) => {
    setState({ ...state, subjectId, delSpinner: true });
    props.deleteSubject({ subjectId });
  };
  const onUpdateSubject = (e) => {
    e.preventDefault();
    setState({ ...state, modalSpinner: true });
    const { subjectId, name } = state;
    props.updateSubject({ subjectId, name });
  };
  const onChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const onCreateSubject = (e) => {
    e.preventDefault();
    setState({ ...state, modalSpinner: true });
    const { name } = state;
    props.createSubject({ name });
  };
  const onClose = () => {
    setState({ ...state, editSubject: false, createSubject: false });
  };
  const openCreateModal = () => {
    setState({ ...state, createSubject: true });
  };
  return (
    <Layout>
      <div className="sub-dashboard">
        <Intro value={''} bold={'Subjects'} />
        <Container>
          <Row>
            <div className="pl-4">
              we currently have <b>{subjects && subjects.length}</b> subject
            </div>
          </Row>
          <Row>
            <div className="pl-4 mt-3">
              <Button type="button" className="btn-new" onClick={openCreateModal}>
                + new subject
              </Button>
              {message && <SuccessMessage message={message} suc={true} er={false} />}
              {subjectErrors && (
                <div className="msg-div custom-msg-error">
                  <AlertErrorMessage errors={subjectErrors} />
                </div>
              )}
            </div>
          </Row>
        </Container>
        <ReadAll
          subjects={subjects}
          onDeleteSubject={onDeleteSubject}
          openSubject={openSubject}
          state={state}
        />
        {state.editSubject && (
          <SubjectModal
            state={state}
            onSubmit={onUpdateSubject}
            onChange={onChange}
            errors={subjectErrors}
            title={'edit subject'}
            onClose={onClose}
            buttonName={'update'}
            message={message}
          />
        )}
        {state.createSubject && (
          <SubjectModal
            state={state}
            onSubmit={onCreateSubject}
            onChange={onChange}
            errors={subjectErrors}
            title={'add subject'}
            onClose={onClose}
            buttonName={'submit'}
            message={message}
          />
        )}
      </div>
    </Layout>
  );
};
export default connector(ViewAllSubject);
