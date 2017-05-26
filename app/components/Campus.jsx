import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { removeCampus } from '../action-creators';

const Campus = (props) => {

  let students = props.selectedCampusStudents;
  let campus = props.selectedCampus;

  const handleDelete = (event) => {
    props.deleteCampus(campus.id);
    event.preventDefault();
  };

  return (
    <div className="container">

      <h1 className="cool-font">{campus.name}</h1>
        <div className="planet">
          <img src={campus.imageURL} className="img-responsive" />
        </div>

      <h4>Enrolled Students</h4>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
          <tbody>
        {
          students.map(student => {
            return (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td><Link to={`/student/${student.id}`}>
                  {student.name}
                </Link></td>
              </tr>
            );
          })
        }
        </tbody>
      </table>

      <button
        className="btn btn-danger"
        onClick={handleDelete}
      >
        Delete Campus
      </button>

    </div>
  );
};


/*** Campus Container React-Redux */
const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteCampus (campusId) {
      dispatch(removeCampus(campusId));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Campus);
