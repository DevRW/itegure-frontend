import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { BsFilterLeft, BsPhone, BsPeopleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { NotFoundMessage, LoadingWait, Spinner } from '../../helpers/reusable/loading';
import { FaExternalLinkSquareAlt } from 'react-icons/fa';
const ReadAll = (props) => {
  const { parents, state, viewSpecific } = props;
  return (
    <div className="mt-5 sections">
      <Container>
        <div className="m--75 mt-4">
          <Row>
            <div className="pl-3">
              {state.loading && (
                <Row>
                  <LoadingWait />
                </Row>
              )}
              {parents && parents.length <= 0 && (
                <Row>
                  <NotFoundMessage message="parents not available" />
                </Row>
              )}
            </div>
          </Row>
          <Row>
            {parents &&
              parents.length > 0 &&
              parents.map((item) => (
                <Col md="4" key={item.subscriptionId} className="mt-3">
                  <div className="st-div d-flex align-items-center">
                    <div className="ls">
                      <div className="d-flex align-items-center">
                        <div>
                          <BsFilterLeft />
                        </div>
                        <div className="pl-2">{item.name}</div>
                      </div>
                      <div className="d-flex align-items-center">
                        <div>
                          <BsPhone />
                        </div>
                        <div className="pl-2">
                          <small>
                            {item.phoneNumber ? item.phoneNumber : 'N/A'}
                          </small>
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <div>
                          <BsPeopleFill />
                        </div>
                        <div className="pl-2">
                          <small>
                            students{' '}
                            <b>
                              {item.parent && item.parent.length > 0
                                ? item.parent.length
                                : 'N/A'}
                            </b>
                          </small>
                        </div>
                      </div>
                    </div>
                    <div className="action ml-2">
                    <div className="action-div">
                      <Button
                        type="button"
                        className="ed"
                        onClick={() => viewSpecific(item)}
                        disabled={state.subscriptionId === item.subscriptionId && state.spinner}
                      >
                        {state.spinner && state.subscriptionId === item.subscriptionId ? (
                          <Spinner color="text-light" />
                        ) : (
                          <FaExternalLinkSquareAlt/>
                        )}
                      </Button>
                    </div>
                    </div>
                  </div>
                </Col>
              ))}
          </Row>
        </div>
      </Container>
    </div>
  );
};
export default ReadAll;
