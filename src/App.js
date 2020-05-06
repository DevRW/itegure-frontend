import React from 'react';
import RoutesComponent from './components/routes/index';
import { Provider } from 'react-redux';
import { configStore } from './redux/store';
import axios from 'axios';
import env from './utils/environment';
import './App.css';

const store = configStore();
axios.defaults.baseURL = env.devBackendUrl;
const App = () => {
  return (
    <Provider store={store}>
      <RoutesComponent />
    </Provider>
  );
};

export default App;
