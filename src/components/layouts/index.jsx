import React from 'react';
import Header from '../helpers/menus/home.header';
import '../../assets/css/style.scss';

const Index = (props) => {
  return (
    <div className="index-layout">
      <Header />
      {props.children}
    </div>
  );
};
export default Index;
