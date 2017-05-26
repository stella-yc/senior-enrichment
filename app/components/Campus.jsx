import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

const Campus = (props) => {
  let students = props.selectedCampusStudents;
  return (
    <div className="container">

      <ul>
        <h1 className="cool-font">{props.selectedCampus.name}</h1>
        <h4>Student Id and Name</h4>
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
      </ul>
    </div>
  );
};


/*** Campus Container React-Redux */
const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = () => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Campus);
