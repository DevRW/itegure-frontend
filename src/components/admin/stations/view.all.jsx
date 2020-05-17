import React from 'react';
import Layout from '../../layouts/admin';
import Intro from '../../helpers/reusable/section.intro';
import { Container, Row, Col } from 'reactstrap';
const ViewAllStation = () => {
  return (
    <Layout>
      <div className="sub-dashboard">
        <Intro value={''} bold={'Stations'} />
        <Container>
          <Row>
            <div className="pl-4">
              we currently have <b>40</b> stations
            </div>
          </Row>
        </Container>
        <Container>
          <div className="latest-performance">
            <Row></Row>
          </div>
        </Container>
      </div>
    </Layout>
  );
};
export default ViewAllStation;
