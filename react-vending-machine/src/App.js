import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import VendingMachine from './VendingMachine';

function App() {
  return (
    <Router>
      <Route path="/" component={VendingMachine} />
    </Router>
  );
}

export default App;
