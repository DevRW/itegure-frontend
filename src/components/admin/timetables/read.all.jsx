import React from 'react';
import { Container, Row, Table, Button } from 'reactstrap';
import { FaArrowsAltH, FaAirbnb } from 'react-icons/fa';
import {
  Spinner,
  LoadingWait,
  NotFoundMessage,
} from '../../helpers/reusable/loading';
import { BsFilterLeft, BsPhone, BsTrash2, BsBrush } from 'react-icons/bs';
const Read = (props) => {
  const { readAll, onDelete, openTimeTable, state } = props;
  return (
    <div className="view-in-table">
      <Container>
        <div className="mt-4 w-85 p-3">
          <Row>
            {readAll && readAll.length > 0 && (
              <div className="table-responsive">
                <Table>
                  <thead>
                    <tr className="trs-thead">
                      <th>
                        From <FaArrowsAltH /> To
                      </th>
                      <th>
                        Subject <FaArrowsAltH /> Station <FaArrowsAltH /> Class
                      </th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {readAll.map((item) => (
                      <tr className="trs" key={item.id}>
                        <td>{new Date(item.date).toDateString()}</td>
                        <td>
                          <div className="d-flex flex-column holder">
                            <div className="subject d-flex">
                              <div className="t-icon">
                                <FaAirbnb />
                              </div>
                              <div className="t-name">{'Mathematics'}</div>
                            </div>
                            <div className="station d-flex">
                              <div className="t-icon">
                                <FaAirbnb />
                              </div>
                              <div className="t-name">{'Radio 1'}</div>
                            </div>
                            <div className="subject d-flex">
                              <div className="t-icon">
                                <FaAirbnb />
                              </div>
                              <div className="t-name">{'P6'}</div>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex t-actions">
                            <Button
                              type="button"
                              className="ed"
                              onClick={() => openTimeTable(item)}
                              disabled={state.stationId === item.id && state.spinner}
                            >
                              {state.spinner && state.timeTableId === item.id ? (
                                <Spinner color="text-light" />
                              ) : (
                                <BsBrush />
                              )}
                            </Button>
                            <Button type="button" className="del">
                              {state.delSpinner && state.timeTableId === item.id ? (
                                <Spinner color="text-light" />
                              ) : (
                                <BsTrash2 />
                              )}
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            )}
          </Row>
        </div>
      </Container>
    </div>
  );
};
export default Read;
