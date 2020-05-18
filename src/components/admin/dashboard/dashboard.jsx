import React, { useState, useEffect } from 'react';
import Layout from '../../layouts/admin';
import { Container, Row, Col } from 'reactstrap';
import {
  FaUniversalAccess,
  FaFortAwesomeAlt,
  FaChessQueen,
  FaLevelDownAlt,
  FaMicroscope,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../../index/students/student.scss';
import LParents from './latest.parents';
import { NAME } from '../../../redux/subscriptions/types';
import { getStorage } from '../../../redux/helpers/action.helper';
import Intro from '../../helpers/reusable/section.intro';
import { viewAllParents } from '../../../redux/user/actions';
import { getAllClass } from '../../../redux/classes/actions';
import { viewAllStation } from '../../../redux/stations/actions';
import { viewTimeTable } from '../../../redux/time.tables/actions';
import { getAllSubject } from '../../../redux/subjects/actions';
import { connect } from 'react-redux';

const mapState = (state) => ({
  userReducer: state.users,
  classReducer: state.classes,
  stationReducer: state.stations,
  subjectReducer: state.subjects,
  timetableReducer: state.timetableReducer,
});
const connector = connect(mapState, {
  viewAllParents,
  getAllClass,
  getAllSubject,
  viewAllStation,
  viewTimeTable,
});
const Dashboard = (props) => {
  const name = getStorage(NAME);
  const [state, setState] = useState({ loading: false });
  const { readAll: readAllStation, errors: stationErrors } = props.stationReducer;
  const { subjects, errors: subjectErrors } = props.subjectReducer;
  const { classes, errors: classErrors } = props.classReducer;
  const { parents, errors: userErrors } = props.userReducer;
  useEffect(() => {
    if (
      readAllStation ||
      subjectErrors ||
      subjects ||
      classes ||
      classErrors ||
      parents ||
      userErrors ||
      stationErrors
    ) {
      setState({ ...state, loading: false });
    }
    // eslint-disable-next-line
  }, [
    props.subjectReducer,
    props.userReducer,
    props.classReducer,
    props.stationReducer,
  ]);
  useEffect(() => {
    const fetch = () => {
      setState({ ...state, loading: true });
      props.viewAllParents();
      props.viewAllStation();
      props.getAllClass();
      props.getAllSubject();
    };
    fetch();
    // eslint-disable-next-line
  }, []);
  return (
    <Layout>
      <div className="sub-dashboard">
        <Intro value={`Welcome back`} bold={name} />
        <Container>
          <div className="latest-performance">
            <div className="titles">
              We currently have <FaLevelDownAlt />
            </div>
            <Row>
              <Col md="3">
                <div className="b-box">
                  <Link to="#">
                    <div>parents</div>
                    <div className="box-number">
                      {parents && parents.length > 0 ? parents.length : 'N/A'}
                    </div>
                    <div className="b-icon">
                      <FaUniversalAccess />
                    </div>
                  </Link>
                </div>
              </Col>
              <Col md="3">
                <div className="b-box">
                  <Link to="/itegure-subjects">
                    <div>subjects</div>
                    <div className="box-number">
                      {subjects && subjects.length > 0 ? subjects.length : 'N/A'}
                    </div>
                    <div className="b-icon">
                      <FaChessQueen />
                    </div>
                  </Link>
                </div>
              </Col>
              <Col md="3">
                <div className="b-box">
                  <Link to="/itegure-classes">
                    <div>classes</div>
                    <div className="box-number">
                      {classes && classes.length > 0 ? classes.length : 'N/A'}
                    </div>
                    <div className="b-icon">
                      <FaFortAwesomeAlt />
                    </div>
                  </Link>
                </div>
              </Col>
              <Col md="3">
                <div className="b-box">
                  <Link to="/itegure-stations">
                    <div>stations</div>
                    <div className="box-number">
                      {readAllStation && readAllStation.length > 0
                        ? readAllStation.length
                        : 'N/A'}
                    </div>
                    <div className="b-icon">
                      <FaMicroscope />
                    </div>
                  </Link>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
        {/* latest registered parents */}
        <LParents parents={parents} state={state} />
      </div>
    </Layout>
  );
};
export default connector(Dashboard);
