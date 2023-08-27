// VendingMachine.js
import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Snack1 from './Snack1';
import Snack2 from './Snack2';
import Snack3 from './Snack3';

function VendingMachine() {
  return (
    <div>
      <h1>Vending Machine</h1>
      <ul>
        <li><Link to="/snack1">Snack 1</Link></li>
        <li><Link to="/snack2">Snack 2</Link></li>
        <li><Link to="/snack3">Snack 3</Link></li>
      </ul>
      <Switch>
        <Route path="/snack1" component={Snack1} />
        <Route path="/snack2" component={Snack2} />
        <Route path="/snack3" component={Snack3} />
      </Switch>
    </div>
  );
}

export default VendingMachine;
