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
            <Col md="7">
              <div className="intro">
                <div className="w-div">
                  <div className="font-weight-bold welcome-title">Welcome</div>
                  <div className="font-weight-bold sub-title">to Itegure</div>
                  <small className="font-weight-bold">Learning reminder</small>
                </div>
                <div className="phone-img">
                  <img src={cellPhone} alt={cellPhone} />
                </div>
                <div className="mt-5 l-about about-app">
                We send information on schedules of courses that 
                your children will be learning on Radio and TV on time in this covid-19 period.
                </div>
                <div className="mt-5 l-about footer">
                  <div className="mt-4">
                    Contact us{' '}
                    <div className="home-icon">
                      <i>
                        <BsTablet />
                      </i>{' '}
                      &nbsp;+250 788 662 441
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
            <Col md="5">
              <div className="ussd-div">
                <div className="ussd-image">
                  <img src={cellPhone} alt={cellPhone} alt={'USSD Phone with Short Code'}/>
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
