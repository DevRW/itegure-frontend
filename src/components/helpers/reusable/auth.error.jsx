import React from 'react';
import Animista, { AnimistaTypes } from 'react-animista';
import { Button } from 'reactstrap';
import { BsFillExclamationDiamondFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
const AuthError = (props) => {
  return (
    <div className="overlay">
      <Animista type={AnimistaTypes.SCALE_UP_CENTER}>
        <div className="popup-modal">
          <div className="d-flex alert-pop">
            <div className="alert-icon">
              <BsFillExclamationDiamondFill />
            </div>
            <div className="pop-text">
              <div>{props.message}</div>
            </div>
          </div>
          <div className="mt-4">
            <Link to="/">
              <Button type="button" className="bt unsubtn">
                login to continue
              </Button>
            </Link>
          </div>
        </div>
      </Animista>
    </div>
  );
};
export default AuthError;
