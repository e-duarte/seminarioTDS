import React from 'react';
import store from './store';

import './App.css';
import { Provider } from 'react-redux';
import Routes from './routes';


function App() {
  return (
   <Provider store={store}>
      {/* <div className="App"> */}
        <Routes />      
      {/* </div> */}
   </Provider>
  );
}

export default App;
