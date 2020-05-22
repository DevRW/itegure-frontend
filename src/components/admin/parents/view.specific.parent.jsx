import React from 'react';
import { Row, Col, Button } from 'reactstrap';
import './parents.scss';
import '../../index/students/student.scss';
import { BsPhone, BsPeopleFill } from 'react-icons/bs';
import { FaLongArrowAltRight, FaStoreAlt } from 'react-icons/fa';
import { NotFoundMessage } from '../../helpers/reusable/loading';
const ViewSpecificParent = (props) => {
  const { onClose, parent } = props;
  const { parent: student } = parent;
  console.log(student);
  return (
    <div className="v-specific">
      <div className="v-parent">
        <div className="v-parent-header d-flex flex-column align-items-center justify-content-center">
          <div className="p-title d-flex">
            <div className="mr-2 p-title-icon">
              <BsPhone />
            </div>
            <div>{parent.phoneNumber ? parent.phoneNumber : ''}</div>
          </div>
          <Button
            className="close btn btn-secondary mt-4 mr-5"
            type="button"
            onClick={() => onClose()}
          >
            x
          </Button>
        </div>
        <div className="view-parent-student">
          <div className="d-flex st-title">
            <div>
              <BsPeopleFill />
            </div>
            &nbsp; students {student && student.length > 0 ? student.length : 'N/A'}
          </div>
          {student && student.length > 0 && (
            <Row>
              {student.map((item) => (
                <Col md="4" key={item.name}>
                  <div className="ls">
                    <div className="d-flex align-items-center">
                      <div>
                        <FaLongArrowAltRight />
                      </div>
                      <div className="pl-2">student</div>
                    </div>
                    <div className="d-flex align-items-center">
                      <div>
                        <FaStoreAlt />
                      </div>
                      <div className="pl-2">
                        <small>
                          class &nbsp;<b>{item.class ? item.class.name : 'N/A'}</b>
                        </small>
                      </div>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          )}
          {student.length <= 0 && (
            <div className="mt-5">
              <NotFoundMessage message={'students not available'} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default ViewSpecificParent;
