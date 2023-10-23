import React from 'react';
import { Provider } from 'react-redux';
import store from './store'; 
import CarSelector from './components/CarSelector';
import CarDetails from './components/CarDetails';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CarSelector />
        <CarDetails />
      </div>
    </Provider>
  );
}

export default App;
