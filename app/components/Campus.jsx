import React from 'react';
import { connect } from 'react-redux';

const Campus = (props) => {
  let students = props.selectedCampusStudents;
  console.log('Campus Students', students);
  return (
    <div>

      <ul>
        <h1>{props.selectedCampus.name}</h1>
        <h3>Student Id and Name</h3>
        {
          students.map(student => {
            return (
              <li key={student.id}>
                {`${student.id} -- ${student.name}`}
              </li>
            );
          })
        }
      </ul>
    </div>
  );
};


/*** Campus Container React-Redux */
const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Campus);
