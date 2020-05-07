import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './footer.scss';
const Footer = () => {
  return (
    <div className="footer-section">
      <Container>
        <Row>
          <Col md="6">
            <div>
              All right reserved{' '}
              <div className="font-weight-bold">@ {new Date().getFullYear()}</div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Footer;
