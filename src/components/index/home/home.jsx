import React from 'react';
import { connect } from 'react-redux';
import Layout from '../../layouts';
import { Container, Row, Col } from 'reactstrap';
import './home.scss';
import cellPhone from '../../../assets/images/mobile-phone.png';
import { BsAt, BsTablet, BsBriefcase } from 'react-icons/bs';
const mapState = (state) => ({
  subscriptionReducer: state.subscriptions,
});

const connector = connect(mapState);
const Home = () => {
  return (
    <Layout>
      <div className="home-section">
        <Container>
          <Row>
            <Col md="6">
              <div className="mt-5 intro">
                <div className="w-div">
                  <div className="font-weight-bold welcome-title">ITEGURE</div>
                  <div className="font-weight-bold sub-title">Learning Reminder</div>
                </div>
                <div className="mt-5 l-about">
                  Welcome to  Itegure platform, 
                  We are here to help you to get information on time about the schedule of the courses that your children will be learning on Radio and TV.
                </div>
                <div className="mt-5 l-about">
                  <div className="mt-4">
                    Contact us{' '}
                    <div className="home-icon">
                      <i>
                        <BsTablet />
                      </i>{' '}
                      &nbsp;0782 798 310
                    </div>
                    <div className="home-icon">
                      <i>
                        <BsBriefcase />
                      </i>{' '}
                      &nbsp;info@itegure.rw
                    </div>
                  </div>
                  <div className="mt-4">
                    All right reserved{' '}
                    <div className="home-icon">
                      <i>
                        <BsAt />
                      </i>
                      {new Date().getFullYear()}
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col md="6">
              <div className="ussd-div">
                <div className="ussd-image">
                  <img src={cellPhone} alt={cellPhone} />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  );
};
export default connector(Home);
