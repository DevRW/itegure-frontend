import React, { useState } from 'react';
import Header from '../helpers/menus/home.header';
import Login from '../index/auths/login';
import Subscribe from '../index/auths/subscribe';
import '../../assets/css/style.scss';

const Index = (props) => {
  const [state, setState] = useState({ login: false, subscribe: false });
  const onOpen = ({ log, sub }) => {
    setState({ ...state, login: log, subscribe: sub });
  };
  const onClose = () => {
    setState({ ...state, login: false, subscribe: false });
  };
  return (
    <div className="index-layout">
      {state.login && <Login onClose={onClose} />}
      {state.subscribe && <Subscribe onClose={onClose}/>}
      <Header onOpen={onOpen} />
      {props.children}
    </div>
  );
};
export default Index;
