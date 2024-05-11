import React from 'react';
import { MyProvider } from './components/MyContext';
import MyConsumer from './components/MyConsumer';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <MyProvider>
      <MyConsumer />
    </MyProvider>
  );
};

export default App;
