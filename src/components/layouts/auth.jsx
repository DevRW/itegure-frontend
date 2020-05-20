import React from 'react';
import Animista, { AnimistaTypes } from 'react-animista';
import logo from '../../assets/images/lreminder.png';

export const AuthLayout = (props) => {
  const { subtitle, onClose } = props;
  return (
    <div className="auth-overlay">
      <Animista type={AnimistaTypes.SCALE_UP_BOTTOM}>
        <div className="auth">
          <div className="close font-weight-bold" onClick={() => onClose()}>
            x
          </div>
          <div className="p-2 d-flex flex-column align-items-center justify-content-center">
            <div className="auth-logo">
              <img src={logo} alt={logo} />
            </div>
            <div className="get-started">Get Started</div>
            <div className="font-weight-bold siz-13 mob-center">{subtitle}</div>
          </div>
          {props.children}
        </div>
      </Animista>
    </div>
  );
};
