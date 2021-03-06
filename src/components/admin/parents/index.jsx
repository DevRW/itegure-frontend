import React, { useState, useEffect } from 'react';
import Layout from '../../layouts/admin';
import { connect } from 'react-redux';
import { viewAllParents } from '../../../redux/user/actions';
import Intro from '../../helpers/reusable/section.intro';
import { Container, Row } from 'reactstrap';
import ReadAll from './read.all';
import ViewSpecificParent from './view.specific.parent';

const mapState = (state) => ({
  userReducer: state.users,
});
const connector = connect(mapState, { viewAllParents });
const Parents = (props) => {
  const [state, setState] = useState({
    loading: false,
    spinner: false,
    item: null,
    subscriptionId: '',
    onOpen: false,
  });
  const { parents, errors } = props.userReducer;
  useEffect(() => {
    if (errors || parents) {
      setState({ ...state, loading: false });
    }
    // eslint-disable-next-line
  }, [props.userReducer]);
  useEffect(() => {
    const fetch = () => {
      setState({ ...state, loading: true });
      props.viewAllParents();
    };
    fetch();
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    if (state.item) {
      setState({ ...state, spinner: false });
    }
    // eslint-disable-next-line
  }, [state.item]);
  const viewSpecificParent = (item) => {
    const { subscriptionId } = item;
    setState({ ...state, item, subscriptionId, spinner: true, onOpen: true });
  };
  const close = () => {
    setState({ ...state, onOpen: false, item: null, spinner: false });
  };
  return (
    <Layout>
      {state.onOpen && <ViewSpecificParent onClose={close} parent={state.item} />}
      <div className="sub-dashboard">
        <Intro bold={'Parents'} value={''} />
        <Container>
          <Row>
            <div className="pl-4">
              Number of registered parents are <b>{parents && parents.length}</b>
            </div>
          </Row>
        </Container>
        <ReadAll state={state} parents={parents} viewSpecific={viewSpecificParent} />
      </div>
    </Layout>
  );
};
export default connector(Parents);
