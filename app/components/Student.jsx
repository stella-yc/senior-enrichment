import React from 'react';
import { connect } from 'react-redux';

const Student = (props) => {
  console.log('Student props', props);
  return (
    <div>
      <h1>A Space Student</h1>
    </div>
  );
};

export default Student;
