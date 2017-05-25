import React from 'react';
import { connect } from 'react-redux';

const AllStudents = (props) => {
  return (
    <div>
      <h1>Space Academy Students</h1>
      <p>Student Id, Student Name, Campus</p>
      <ul>
      {
        props.allStudents.map(student => {
          return (
            <li key={student.id}><p>{student.id}, {student.name}, {student.campus}</p></li>
          );
        })
      }
      </ul>
    </div>
  );
};


/*** AllStudents Container React-Redux */
const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = (dispatch) => {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(AllStudents);


