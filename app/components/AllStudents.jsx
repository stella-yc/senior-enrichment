import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { removeStudent } from '../reducers/students';
import StudentRow from './StudentRow';

const AllStudents = (props) => {

  return (

    <div className="container">

      <h3 className="cool-font">Space Academy Student Directory</h3>

      <Link to="/newStudent"><p className="more-padding">
        <i className="fa fa-graduation-cap" aria-hidden="true">
        </i>  Become a Space Cadet!
      </p></Link>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Campus</th>
            <th>Remove</th>
          </tr>
        </thead>
          <tbody>

          {
            props.students.map(student => {
              return (
                <StudentRow
                  key={student.id}
                  id={student.id}
                  name={student.name}
                  campus={student.HomeCampus.name}
                  campusId={student.HomeCampusId}
                  deleteStudent={props.deleteStudent}
                />
              );
            })
          }

          </tbody>
      </table>
    </div>
  );
};

/*** AllStudents Container React-Redux */
const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteStudent (studentId) {
      dispatch(removeStudent(studentId));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AllStudents);


