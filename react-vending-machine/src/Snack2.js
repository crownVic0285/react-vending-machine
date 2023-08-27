// Snack2.js
import React from 'react';
import { Link } from 'react-router-dom';

function Snack2() {
  return (
    <div>
      <h2>Bag of Chips</h2>
      <p>Crunchy and savory chips that are perfect for snacking!</p>
      <Link to="/">Back to Vending Machine</Link>
    </div>
  );
}

export default Snack2;
