import React from 'react';
import {Provider} from 'react-redux';
import store from './redux/store';
import About from './components/About';

const App = () => {
  return (
    <Provider store={store}>
      <About />
    </Provider>
  );
};

export default App;
