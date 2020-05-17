import React from 'react';
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

const Dashboard = (props) => {
  const name = getStorage(NAME);
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
                    <div className="box-number">5000</div>
                    <div className="b-icon">
                      <FaUniversalAccess />
                    </div>
                  </Link>
                </div>
              </Col>
              <Col md="3">
                <div className="b-box">
                  <Link to="#">
                    <div>subjects</div>
                    <div className="box-number">50</div>
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
                    <div className="box-number">50</div>
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
                    <div className="box-number">50</div>
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
        <LParents />
      </div>
    </Layout>
  );
};
export default Dashboard;
