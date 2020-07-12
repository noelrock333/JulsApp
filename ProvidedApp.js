import React from 'react';
import {Provider} from 'react-redux';
import store from './redux/store';
import Router from './router';
// import Home from './components/Home';
// import About from './components/About';
// import PokemonView from './components/PokemonView';
// import PokemonStats from './components/PokemonStats';

const App = () => {
  return (
    <Provider store={store}>
      {/* <About title="Hola mundo" /> */}
      {/* <Home /> */}
      {/* <PokemonView /> */}
      {/* <PokemonStats /> */}
      <Router />
    </Provider>
  );
};

export default App;
