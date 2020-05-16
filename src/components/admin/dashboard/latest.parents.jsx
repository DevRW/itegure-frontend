import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { FaMapSigns } from 'react-icons/fa';
import { BsFilterLeft, BsListTask, BsGrid1X2 } from 'react-icons/bs';
const LatestParent = () => {
  return (
    <div className="mt-5 sections">
      <Container>
        <Row>
          <div className="font-weight-bold section-header">
            <FaMapSigns /> Parents
          </div>
        </Row>
        <div className="m--75 mt-4">
          <Row>
            <Col md="4">
              <div className="st-div d-flex align-items-center">
                <div className="ls">
                  <div className="d-flex align-items-center">
                    <div>
                      <BsFilterLeft />
                    </div>
                    <div className="pl-2">Kalisa claude</div>
                  </div>
                  <div className="d-flex align-items-center">
                    <div>
                      <BsListTask />
                    </div>
                    <div className="pl-2">
                      <small>
                        students <b>100</b>
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col md="4">
              <div className="st-div d-flex align-items-center">
                <div className="ls">
                  <div className="d-flex align-items-center">
                    <div>
                      <BsFilterLeft />
                    </div>
                    <div className="pl-2">Kalisa claude</div>
                  </div>
                  <div className="d-flex align-items-center">
                    <div>
                      <BsListTask />
                    </div>
                    <div className="pl-2">
                      <small>
                        students <b>100</b>
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col md="4">
              <div className="st-div d-flex align-items-center">
                <div className="ls">
                  <div className="d-flex align-items-center">
                    <div>
                      <BsFilterLeft />
                    </div>
                    <div className="pl-2">Kalisa claude</div>
                  </div>
                  <div className="d-flex align-items-center">
                    <div>
                      <BsListTask />
                    </div>
                    <div className="pl-2">
                      <small>
                        students <b>100</b>
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};
export default LatestParent;
