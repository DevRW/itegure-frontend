import React from 'react';
import { Container, Row, Col } from 'reactstrap';
export const Intro = ({ value, bold }) => {
  return (
    <Container>
      <Row>
        <Col md="10">
          <div className="dash-intro">
            {value}&nbsp;<b>{bold}</b>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default Intro;
