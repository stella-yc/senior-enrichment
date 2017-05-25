import React from 'react';
import { connect } from 'react-redux';


const Student = (props) => {
  const student = props.selectedStudent;
  console.log('*****student', student);
  console.log('******HomeCampus', student.HomeCampus);
  return (
    <div>
      <h2>{`Student Name: ${student.name}`}</h2>
      <p>{`Student Email: ${student.email}`}</p>
      <p>{`Student HomeCampusId: ${student.HomeCampusId}`}</p>
    </div>
  );
};

// export default Student;

/*** AllStudents Container React-Redux */
const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Student);

