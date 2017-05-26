import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

/** Student Presentational Component **/
const Student = (props) => {

  let student = props.selectedStudent;
  let campus = student.HomeCampus;

  return (
    <div className="container">
      <h2 className="cool-font">Student Profile</h2>
      <p>{`Id: ${student.id}`}</p>
      <p>{`Name: ${student.name}`}</p>
      <p>{`Email: ${student.email}`}</p>
      <p>Home Campus:
        <Link to={`/campus/${campus ? campus.id : '' }`}>
          {` ${ campus ? campus.name : '' }`}
        </Link>
      </p>
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

