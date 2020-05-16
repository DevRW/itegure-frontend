import React, { useState } from 'react';
import Header from '../helpers/menus/home.header';
import '../../assets/css/style.scss';
import { connect } from 'react-redux';
const mapState = (state) => ({
  subscriptionReducer: state.subscriptions,
});
const connector = connect(mapState);
const Index = (props) => {
  const [state, setState] = useState({ login: false, subscribe: false });
  const onOpen = ({ log, sub }) => {
    setState({ ...state, login: log, subscribe: sub });
  };
  return (
    <div className="index-layout">
      <Header onOpen={onOpen} />
      {props.children}
    </div>
  );
};
export default connector(Index);
