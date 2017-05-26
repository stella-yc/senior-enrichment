import React from 'react';
import { connect } from 'react-redux';

/** Student Presentational Component **/
const Student = (props) => {
  const student = props.selectedStudent;
  return (
    <div className="container">
      <h2 className="cool-font">Student Profile</h2>
      <p>{`Name: ${student.name}`}</p>
      <p>{`Email: ${student.email}`}</p>
      <p>{`Home Campus Id:  ${student.HomeCampusId}`}</p>
    </div>
  );
};

/*** Student Container React-Redux */
const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = () => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Student);

