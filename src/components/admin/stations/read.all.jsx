import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { BsFilterLeft, BsPhone, BsTrash2, BsBrush } from 'react-icons/bs';
import {
  Spinner,
  LoadingWait,
  NotFoundMessage,
} from '../../helpers/reusable/loading';
const ReadAll = (props) => {
  const { readAll, onDeleteStation, openStation, state } = props;
  return (
    <Container>
      <div className="mt-4 w-85">
        <div className="pl-3">
          {state.loading && (
            <Row>
              <LoadingWait />
            </Row>
          )}
          {readAll && readAll.length <= 0 && (
            <Row>
              <NotFoundMessage message="stations not available" />
            </Row>
          )}
        </div>
        <Row>
          {readAll &&
            readAll.length > 0 &&
            readAll.map((item) => (
              <Col md="4" key={item.id}>
                <div className="st-div d-flex align-items-center mt-3">
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
                        <small>{item.type}</small>
                      </div>
                    </div>
                  </div>
                  <div className="action ml-2">
                    <div className="action-div">
                      <Button
                        type="button"
                        className="ed"
                        onClick={() => openStation(item)}
                        disabled={state.stationId === item.id && state.spinner}
                      >
                        {state.spinner && state.stationId === item.id ? (
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
                        onClick={() => onDeleteStation(item.id)}
                        disabled={state.stationId === item.id && state.delSpinner}
                      >
                        {state.delSpinner && state.stationId === item.id ? (
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
