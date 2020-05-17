import React, { useState, useEffect } from 'react';
import Layout from '../../layouts/admin';
import Intro from '../../helpers/reusable/section.intro';
import { Container, Row, Button } from 'reactstrap';
import { connect } from 'react-redux';
import {
  viewAllStation,
  deleteStation,
  updateStation,
  createStation,
} from '../../../redux/stations/actions';
import { SuccessMessage, AlertErrorMessage } from '../../helpers/reusable/loading';
import ReadAll from './read.all';
import StationModal from './modal';
const mapState = (state) => ({
  stationReducer: state.stations,
});
const connector = connect(mapState, {
  viewAllStation,
  deleteStation,
  updateStation,
  createStation,
});
const ViewAllStation = (props) => {
  const [state, setState] = useState({
    loading: false,
    stationId: '',
    spinner: false,
    delSpinner: false,
    editStation: false,
    createStation: false,
    name: '',
    type: '',
  });
  const { errors: stationErrors, readAll, message } = props.stationReducer;
  const clearState = () => {
    setState({
      ...state,
      loading: false,
      delSpinner: false,
      spinner: false,
      modalSpinner: false,
      editStation: false,
      createStation: false,
      name: '',
      type: '',
    });
  };
  useEffect(() => {
    if (stationErrors || readAll) {
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
  }, [props.stationReducer]);
  useEffect(() => {
    const fetch = () => {
      setState({ ...state, loading: true });
      props.viewAllStation();
    };
    fetch();
    // eslint-disable-next-line
  }, []);
  const openStation = (item) => {
    const { id: stationId, name, type } = item;
    setState({
      ...state,
      editStation: true,
      createStation: false,
      stationId,
      name,
      type,
    });
  };
  const onDeleteStation = (stationId) => {
    setState({ ...state, stationId, delSpinner: true });
    props.deleteStation({ stationId });
  };
  const onUpdateStation = (e) => {
    e.preventDefault();
    setState({ ...state, modalSpinner: true });
    const { stationId, name, type } = state;
    props.updateStation({ stationId, name, type });
  };
  const onChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const onCreateStation = (e) => {
    e.preventDefault();
    setState({ ...state, modalSpinner: true });
    const { name, type } = state;
    props.createStation({ name, type });
  };
  const onClose = () => {
    setState({ ...state, editStation: false, createStation: false });
  };
  const openCreateModal = () => {
    setState({ ...state, createStation: true });
  };
  return (
    <Layout>
      <div className="sub-dashboard">
        <Intro value={''} bold={'Stations'} />
        <Container>
          <Row>
            <div className="pl-4">
              we currently have <b>{readAll && readAll.length}</b> stations
            </div>
          </Row>
          <Row>
            <div className="pl-4 mt-3">
              <Button type="button" className="btn-new" onClick={openCreateModal}>
                + new station
              </Button>
              {message && <SuccessMessage message={message} suc={true} er={false} />}
              {stationErrors && (
                <div className="msg-div custom-msg-error">
                  <AlertErrorMessage errors={stationErrors} />
                </div>
              )}
            </div>
          </Row>
        </Container>
        <ReadAll
          readAll={readAll}
          onDeleteStation={onDeleteStation}
          openStation={openStation}
          state={state}
        />
        {state.editStation && (
          <StationModal
            state={state}
            onSubmit={onUpdateStation}
            onChange={onChange}
            errors={stationErrors}
            title={'edit station'}
            onClose={onClose}
            buttonName={'update'}
            message={message}
          />
        )}
        {state.createStation && (
          <StationModal
            state={state}
            onSubmit={onCreateStation}
            onChange={onChange}
            errors={stationErrors}
            title={'add station'}
            onClose={onClose}
            buttonName={'submit'}
            message={message}
          />
        )}
      </div>
    </Layout>
  );
};
export default connector(ViewAllStation);
