import React from 'react';
import Home from './component/Home';
import store from './redux/store';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Provider store={store}>
    <>
      <Home/>
    </>
    </Provider>
  );
}

export default App;
