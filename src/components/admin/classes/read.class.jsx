import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { BsFilterLeft, BsTrash2, BsBrush } from 'react-icons/bs';
import {
  Spinner,
  LoadingWait,
  NotFoundMessage,
} from '../../helpers/reusable/loading';
const ReadAll = (props) => {
  const { classes, onDeleteClassStudy, openClassStudy, state } = props;
  return (
    <Container>
      <div className="mt-4 w-85">
        <div className="pl-3">
          {state.loading && (
            <Row>
              <LoadingWait />
            </Row>
          )}
          {classes && classes.length <= 0 && (
            <Row>
              <NotFoundMessage message="class not available" />
            </Row>
          )}
        </div>
        <Row>
          {classes &&
            classes.length > 0 &&
            classes.map((item) => (
              <Col md="3" key={item.id}>
                <div className="st-div d-flex align-items-center mt-3">
                  <div className="ls">
                    <div className="d-flex align-items-center">
                      <div>
                        <BsFilterLeft />
                      </div>
                      <div className="pl-2">{item.name}</div>
                    </div>
                  </div>
                  <div className="action ml-2">
                    <div className="action-div">
                      <Button
                        type="button"
                        className="ed"
                        onClick={() => openClassStudy(item)}
                        disabled={state.classStudyId === item.id && state.spinner}
                      >
                        {state.spinner && state.classStudyId === item.id ? (
                          <Spinner color="text-light" />
                        ) : (
                          <BsBrush />
                        )}
                      </Button>
                    </div>
                    <div className="action-div">
                      <Button
                        type="button"
                        className="del"
                        onClick={() => onDeleteClassStudy(item.id)}
                        disabled={state.classStudyId === item.id && state.delSpinner}
                      >
                        {state.delSpinner && state.classStudyId === item.id ? (
                          <Spinner color="text-light" />
                        ) : (
                          <BsTrash2 />
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
  );
};
export default ReadAll;
