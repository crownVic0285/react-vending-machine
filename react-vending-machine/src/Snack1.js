// Snack1.js
import React from 'react';
import { Link } from 'react-router-dom';

function Snack1() {
  return (
    <div>
      <h2>Chocolate Bar</h2>
      <p>A delicious chocolate bar that will satisfy your sweet tooth!</p>
      <Link to="/">Back to Vending Machine</Link>
    </div>
  );
}

export default Snack1;
