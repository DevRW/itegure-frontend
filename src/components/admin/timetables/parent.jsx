import React, { useState, useEffect } from 'react';
import Layout from '../../layouts/admin';
import { Container, Row, Button } from 'reactstrap';
import Intro from '../../helpers/reusable/section.intro';
import {
  viewTimeTable,
  deleteTimeTable,
  updateTimeTable,
  createTimeTable,
} from '../.././../redux/time.tables/actions';
import { viewAllStation } from '../../../redux/stations/actions';
import { getAllSubject } from '../../../redux/subjects/actions';
import { connect } from 'react-redux';
import ReadAll from './read.all';
import Modal from './modal';
import { SuccessMessage, AlertErrorMessage } from '../../helpers/reusable/loading';
import { getAllClass } from '../../../redux/classes/actions';
import { customHours, customMinutes } from '../../../redux/helpers/action.helper';
const mapState = (state) => ({
  timeTableReducer: state.timeTables,
  stationReducer: state.stations,
  classReducer: state.classes,
  subjectReducer: state.subjects,
});
const connector = connect(mapState, {
  viewTimeTable,
  deleteTimeTable,
  updateTimeTable,
  viewAllStation,
  getAllSubject,
  createTimeTable,
  getAllClass,
});
const TimeTable = (props) => {
  const [state, setState] = useState({
    loading: false,
    spinner: false,
    modalSpinner: false,
    date: new Date(),
    timeFrom: '',
    timeTo: '',
    subject: '',
    station: '',
    timeTableId: '',
    edit: false,
    create: false,
    delSpinner: false,
    classStudy: '',
  });
  const { errors: timeTableErrors, readAll, message } = props.timeTableReducer;
  const { readAll: stations } = props.stationReducer;
  const { classes } = props.classReducer;
  const { subjects } = props.subjectReducer;
  const clearState = () => {
    setState({
      ...state,
      loading: false,
      spinner: false,
      timeTableId: '',
      delSpinner: false,
      modalSpinner: false,
      timeFrom: '',
      timeTo: '',
      station: '',
      create: false,
      edit: false,
      classStudy: '',
    });
  };
  useEffect(() => {
    if (timeTableErrors || readAll) {
      setState({
        ...state,
        loading: false,
        spinner: false,
        timeTableId: '',
        delSpinner: false,
        modalSpinner: false,
      });
    }
    if (message) {
      clearState();
    }
    // eslint-disable-next-line
  }, [props.timeTableReducer]);
  useEffect(() => {
    const fetch = () => {
      setState({ ...state, loading: true });
      props.viewTimeTable();
      props.viewAllStation();
      props.getAllClass();
      props.getAllSubject();
    };
    fetch();
    // eslint-disable-next-line
  }, []);
  const onClose = () => {
    setState({ ...state, edit: false, create: false });
  };
  const openCreateModal = () => {
    setState({ ...state, create: true });
  };
  const openTimetable = (item) => {
    const {
      id: timeTableId,
      timeFrom,
      timeTo,
      date,
      subject,
      classStudy,
      station,
    } = item;
    setState({
      ...state,
      timeTableId,
      timeFrom: `${customHours(timeFrom)}:${customMinutes(timeFrom)}`,
      timeTo: `${customHours(timeTo)}:${customMinutes(timeTo)}`,
      date: new Date(date),
      subject,
      classStudy,
      station,
      edit: true,
    });
  };
  const onDelete = (id) => {
    setState({ ...state, delSpinner: true });
    props.deleteTimeTable({ timeTableId: id });
  };
  const onUpdate = (e) => {
    e.preventDefault();
    setState({ ...state, modalSpinner: true });
    const {
      timeFrom,
      timeTo,
      date,
      subject,
      station,
      timeTableId,
      classStudy,
    } = state;
    props.updateTimeTable({
      timeFrom,
      timeTo,
      date,
      subject,
      station,
      timeTableId,
      classStudy,
    });
  };
  const onChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const onCreate = (e) => {
    e.preventDefault();
    setState({ ...state, modalSpinner: true });
    const { timeFrom, timeTo, date, subject, station, classStudy } = state;
    props.createTimeTable({ timeFrom, timeTo, date, subject, station, classStudy });
  };
  const handleDate = (date) => {
    setState({ ...state, date });
  };
  return (
    <Layout>
      <div className="sub-dashboard">
        <Intro value={''} bold={'Time tables'} />
        <Container>
          <Row>
            <div className="pl-4">
              we currently have <b>{readAll && readAll.length}</b> timetables
            </div>
          </Row>
          <Row>
            <div className="pl-4 mt-3">
              <Button type="button" className="btn-new" onClick={openCreateModal}>
                + new timetable
              </Button>
              {message && <SuccessMessage message={message} suc={true} er={false} />}
              {timeTableErrors && (
                <div className="msg-div custom-msg-error">
                  <AlertErrorMessage errors={timeTableErrors} />
                </div>
              )}
            </div>
          </Row>
        </Container>
        <ReadAll
          readAll={readAll}
          state={state}
          openTimeTable={openTimetable}
          onDelete={onDelete}
        />
        {state.create && (
          <Modal
            state={state}
            onChange={onChange}
            onSubmit={onCreate}
            buttonName={'submit'}
            title={'new timetable'}
            errors={timeTableErrors}
            onClose={onClose}
            stations={stations}
            handleDate={handleDate}
            classes={classes}
            subjects={subjects}
          />
        )}
        {state.edit && (
          <Modal
            state={state}
            onChange={onChange}
            onSubmit={onUpdate}
            buttonName={'update'}
            title={'edit timetable'}
            errors={timeTableErrors}
            onClose={onClose}
            stations={stations}
            handleDate={handleDate}
            classes={classes}
            subjects={subjects}
          />
        )}
      </div>
    </Layout>
  );
};
export default connector(TimeTable);
