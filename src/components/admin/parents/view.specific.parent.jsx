import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import './parents.scss';
import '../../index/students/student.scss';
import { BsPhone, BsPeopleFill } from 'react-icons/bs';
import {FaLongArrowAltRight, FaStoreAlt} from 'react-icons/fa';
const ViewSpecificParent = (props) => {
  return (
    <div className="v-specific">
      <div className="v-parent">
        <div className="v-parent-header d-flex flex-column align-items-center justify-content-center">
          <div className="p-title d-flex">
            <div className="mr-2 p-title-icon">
              <BsPhone />
            </div>{' '}
            <div>+250786601003</div>
          </div>
          <Button className="close btn btn-secondary mt-4 mr-5" type="button">
            x
          </Button>
        </div>
        <div className="view-parent-student">
        <div className="mt-4 d-flex"><div><BsPeopleFill/></div>&nbsp;students 14</div>
        <Row>
            <Col md="4">
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
                      class &nbsp;<b>P6</b>
                    </small>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
      </div>
      </div>
    </div>
  );
};
export default ViewSpecificParent;
