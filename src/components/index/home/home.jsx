import React from 'react';
import { connect } from 'react-redux';
import Layout from '../../layouts';
import {Container, Row, Col} from 'reactstrap';
import './home.scss';
import cellPhone from '../../../assets/images/mobile-phone.png';
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
                 <div className="font-weight-bold welcome-title">Welcome</div>
                 <div className="font-weight-bold">to learning reminder</div>
                </div>
                <div className="mt-5 l-about">lreminder is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</div>
              </div>
            </Col>
            <Col md="6">
              <div className="ussd-div">
                <div className="ussd-image">
                  <img src={cellPhone} alt={cellPhone}/>
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
