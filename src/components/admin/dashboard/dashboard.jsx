import React from 'react';
import Layout from '../../layouts/admin';
import { Container, Row, Col } from 'reactstrap';
import {
  FaUniversalAccess,
  FaFortAwesomeAlt,
  FaChessQueen,
  FaLevelDownAlt,
  FaMapSigns,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../../index/students/student.scss';
import LParents from './latest.parents';
const Dashboard = (props) => {
  return (
    <Layout>
      <div className="sub-dashboard">
        <Container>
          <Row>
            <Col md="10">
              <div className="dash-intro">
                welcome back <b>gratien</b>
              </div>
            </Col>
          </Row>
        </Container>
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
                  <Link to="#">
                    <div>classes</div>
                    <div className="box-number">50</div>
                    <div className="b-icon">
                      <FaFortAwesomeAlt />
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
