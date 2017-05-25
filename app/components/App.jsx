import React from 'react';
import { Link } from 'react-router'
const App = (props) => {
  return (
    <div>
      <h3><Link to="/">Home</Link></h3>
      <h3><Link to="/students">Students</Link></h3>

      {props.children}
    </div>
  );
};

export default App;
