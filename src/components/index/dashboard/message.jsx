import React from 'react';
import { Col } from 'reactstrap';
import './dashboard.scss';
import { BsChatSquareDots } from 'react-icons/bs';
import { LoadingWait, NotFoundMessage } from '../../helpers/reusable/loading';

const Message = (props) => {
  const { notifications, state } = props;
  return (
    <Col md="4" className="mt-3">
      <div className="message-div">
        <div className="msg-title">
          <div className="red-color inbox-icon">
            <BsChatSquareDots />
          </div>
          <div className="title-name">inbox</div>
        </div>
        {state.loading && (
          <div
            className="m-5 d-flex justify-content-center align-items-center text-align-center loadings"
            style={{ height: '50%' }}
          >
            <LoadingWait />
          </div>
        )}
        {notifications && notifications.length !== 0 && (
          <div className="msg-box">
            {notifications.map((item) => (
              <div className="msg-text" key={item.notificationId}>
                {item.message}
              </div>
            ))}
          </div>
        )}
        {notifications && notifications.length === 0 && (
          <div
            className="m-5 d-flex justify-content-center align-items-center text-align-center loadings"
            style={{ height: '50%' }}
          >
            <NotFoundMessage message={'empty inbox'} />
          </div>
        )}
      </div>
    </Col>
  );
};
export default Message;
