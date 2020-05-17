import React, { useState, useEffect } from 'react';
import Layout from '../../layouts/admin';
import { Container, Row, Button } from 'reactstrap';
import Intro from '../../helpers/reusable/section.intro';
import {
  viewTimeTable,
  deleteTimeTable,
  updateTimeTable,
} from '../.././../redux/time.tables/actions';
import { viewAllStation } from '../../../redux/stations/actions';
import { connect } from 'react-redux';
import ReadAll from './read.all';
import Modal from './modal';
import { SuccessMessage, AlertErrorMessage } from '../../helpers/reusable/loading';
const mapState = (state) => ({
  timeTableReducer: state.timeTables,
  stationReducer: state.stations,
});
const connector = connect(mapState, {
  viewTimeTable,
  deleteTimeTable,
  updateTimeTable,
  viewAllStation,
});
const TimeTable = (props) => {
  const [state, setState] = useState({
    loading: false,
    spinner: false,
    modalSpinner: false,
    date: '',
    timeFrom: '',
    timeTo: '',
    subject: '',
    station: '',
    timeTableId: '',
    edit: false,
    create: false,
  });
  const { errors: timeTableErrors, readAll, message } = props.timeTableReducer;
  useEffect(() => {
    if (timeTableErrors || readAll) {
      setState({ ...state, loading: false, spinner: false, timeTableId: '' });
    }
  }, [props.timeTableReducer]);
  useEffect(() => {
    const fetch = () => {
      setState({ ...state, loading: true });
      props.viewTimeTable();
      props.viewAllStation();
    };
    fetch();
  }, []);
  const onClose = () => {
    setState({ ...state, edit: false, create: false });
  };
  const openCreateModal = () => {
    setState({ ...state, create: true });
  };
  const openTimetable = (item) => {
    const { id: timeTableId } = item;
    setState({ ...state, timeTableId });
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
        <ReadAll readAll={readAll} state={state} openTimeTable={openTimetable} />
      </div>
    </Layout>
  );
};
export default connector(TimeTable);
