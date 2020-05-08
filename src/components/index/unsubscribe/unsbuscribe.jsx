import React, { useState } from 'react';
import Animista, { AnimistaTypes } from 'react-animista';
import { connect } from 'react-redux';
import { unSubscribe } from '../../../redux/subscriptions/actions';
import { Button } from 'reactstrap';
import { BsFillExclamationDiamondFill } from 'react-icons/bs';
import { Spinner } from '../../helpers/reusable/loading';
const mapState = (state) => ({
  subscriptionReducer: state.subscriptions,
});
const connector = connect(mapState, { unSubscribe });

const Unsubscribe = (props) => {
  const { close } = props;
  const [state, setState] = useState({ spinner: false });
  const deleteAccount = () => {
    setState({ ...state, spinner: true });
    props.unSubscribe();
  };
  return (
    <div className="overlay">
      <Animista type={AnimistaTypes.SCALE_UP_CENTER}>
        <div className="popup-modal">
          <div className="d-flex alert-pop">
            <div className="alert-icon">
              <BsFillExclamationDiamondFill />
            </div>
            <div className="pop-text">
              <div>are you sure, you want to unsubscribe ?</div>
              <small className="font-weight-bold">
                your account will be deleted with all informations related to it.
              </small>
            </div>
          </div>
          <div className="mt-4">
            <Button
              type="button"
              onClick={deleteAccount}
              className="bt unsubtn"
              disabled={state.spinner}
            >
              {state.spinner ? <Spinner color="text-light" /> : 'unsubscribe'}
            </Button>
            <Button type="button" onClick={() => close()} className="bt cancel-btn">
              cancel
            </Button>
          </div>
        </div>
      </Animista>
    </div>
  );
};
export default connector(Unsubscribe);
