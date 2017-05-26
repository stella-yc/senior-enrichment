import React from 'react';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';
import { removeStudent } from '../action-creators';

/** Student Presentational Component **/
const Student = (props) => {

  let student = props.selectedStudent;
  let campus = student.HomeCampus;

  const handleDelete = (event) => {
    props.deleteStudent(student.id);
    event.preventDefault();
  };

  return (
    <div className="container">
      <h2 className="cool-font">Student Profile</h2>
      <table className="table">
        <tbody>
          <tr>
            <td>Id</td>
            <td>{student.id}</td>
          </tr>
          <tr>
            <td>Name</td>
            <td>{student.name}</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>{student.email}</td>
          </tr>
          <tr>
            <td>Home Campus</td>
            <td>
              <Link to={`/campus/${campus ? campus.id : '' }`}>
                {` ${ campus ? campus.name : '' }`}
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
      <button
        className="btn btn-danger"
        onClick={handleDelete}
      >
        Delete Student
      </button>
    </div>
  );

};

/*** Student Container React-Redux */

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteStudent (studentId) {
      dispatch(removeStudent(studentId))
      .then(() => browserHistory.push(`/students`));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Student);

