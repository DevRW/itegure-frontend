import React from 'react';
import { connect } from 'react-redux';
import Layout from '../../layouts';

const mapState = (state) => ({
  subscriptionReducer: state.subscriptions,
});

const connector = connect(mapState);
const Home = () => {
  return (
    <Layout>
      <div>Hello world</div>
    </Layout>
  );
};
export default connector(Home);
