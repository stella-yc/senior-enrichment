import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

const AllStudents = (props) => {
  return (
    <div>
      <h1>Space Academy Students</h1>
      <p>Student Id, Student Name, Campus</p>
      <ul>
      {
        props.allStudents.map(student => {
          return (
            <li key={student.id}>
              <p>
                {student.id},
                <Link to={`/student/${student.id}`}>{student.name}</Link>,
                {student.HomeCampus.name}
                </p>
            </li>
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


