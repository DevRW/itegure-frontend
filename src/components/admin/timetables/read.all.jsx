import React from 'react';
import { Container, Row, Table, Button } from 'reactstrap';
import { FaArrowsAltH, FaAirbnb } from 'react-icons/fa';
import {
  Spinner,
  LoadingWait,
  NotFoundMessage,
} from '../../helpers/reusable/loading';
import { BsTrash2, BsBrush } from 'react-icons/bs';
import { customHours, customMinutes } from '../../../redux/helpers/action.helper';

const Read = (props) => {
  const { readAll, onDelete, openTimeTable, state } = props;
  return (
    <div className="view-in-table">
      <Container>
        <div className="mt-4 w-85 p-3">
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
                        <td>
                          <div>{new Date(item.date).toDateString()}</div>
                          <div className="d-flex">
                            <div className="font-weight-bold">
                              {customHours(item.timeFrom)}:
                              {customMinutes(item.timeFrom)}
                            </div>
                            <div className="pl-2 pr-2">
                              <FaArrowsAltH />
                            </div>
                            <div className="font-weight-bold">
                              {' '}
                              {customHours(item.timeTo)}:{customMinutes(item.timeTo)}
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex flex-column holder">
                            <div className="subject d-flex">
                              <div className="t-icon">
                                <FaAirbnb />
                              </div>
                              <div className="t-name">
                                {item.subjectKeyId
                                  ? item.subjectKeyId.name
                                  : 'subject could not be found'}
                              </div>
                            </div>
                            <div className="station d-flex">
                              <div className="t-icon">
                                <FaAirbnb />
                              </div>
                              <div className="t-name">
                                {item.stationKeyId
                                  ? item.stationKeyId.name
                                  : 'station could not be found'}
                              </div>
                            </div>
                            <div className="subject d-flex">
                              <div className="t-icon">
                                <FaAirbnb />
                              </div>
                              <div className="t-name">
                                {item.classStudyKeyId
                                  ? item.classStudyKeyId.name
                                  : 'class could not be found'}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex t-actions action">
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
                            <Button
                              type="button"
                              className="del"
                              disabled={state.delSpinner}
                              onClick={() => onDelete(item.id)}
                            >
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
