import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { removeStudent } from '../action-creators';


const StudentRow = (props) => {
  const handleDelete = (event) => {
    props.deleteStudent(props.id);
    event.preventDefault();
  };
  return (
    <tr>
      <td>{props.id}</td>
      <td><Link to={`/student/${props.id}`}>{props.name}</Link></td>
      <td>{props.campus}</td>
      <td><button onClick={handleDelete}>X</button></td>
    </tr>
  );
};


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
            props.allStudents.map(student => {
              return (
                <StudentRow
                  key={student.id}
                  id={student.id}
                  name={student.name}
                  campus={student.HomeCampus.name}
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


// const StudentRow = (props) => {
//   const handleDelete = (event) => {
//     props.deleteStudent(props.id);
//     event.preventDefault();
//   };
//   return (
//     <li>
//       <p>
//         {`${props.id}  -  `}
//         <Link to={`/student/${props.id}`}>
//         {props.name}
//         </Link>
//         {`  -  ${props.campus}  `}
//         <button onClick={handleDelete}>X</button>
//       </p>
//     </li>
//   );
// };


// const AllStudents = (props) => {
//   return (
//     <div>
//       <h1>Space Academy Students</h1>
//       <Link to="/newStudent"><p>Add new student!</p></Link>
//       <h3>Student Directory</h3>
//       <p>Student Id, Student Name, Campus</p>
//       <ul>
//       {
//         props.allStudents.map(student => {
//           return (
//             <StudentRow
//               key={student.id}
//               id={student.id}
//               name={student.name}
//               campus={student.HomeCampus.name}
//               deleteStudent={props.deleteStudent}
//             />
//           );
//         })
//       }
//       </ul>
//     </div>
//   );
// };

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
}

export default connect(mapStateToProps, mapDispatchToProps)(AllStudents);


