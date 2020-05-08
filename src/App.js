import React from 'react';
import RoutesComponent from './components/routes/index';
import { Provider } from 'react-redux';
import { configStore } from './redux/store';
import axios from 'axios';
import env from './utils/environment';
import './App.css';
import {SUBSCRIPTION_TOKEN} from './redux/subscriptions/types';
import {getStorage} from './redux/helpers/action.helper';

const store = configStore();
axios.defaults.baseURL = env.devBackendUrl;
axios.defaults.headers.common['authorization'] = `Bearer ${getStorage(SUBSCRIPTION_TOKEN)}`;
const App = () => {
  return (
    <Provider store={store}>
      <RoutesComponent />
    </Provider>
  );
};

export default App;
