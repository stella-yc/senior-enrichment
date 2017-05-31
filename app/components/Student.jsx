import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';
import { removeStudent, sendUpdatedStud } from '../reducers/students';
import ContentEditable from 'react-contenteditable';
import CampusMenu from './CampusMenu';

/** Student Presentational Component **/
class Student extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  this.handleDelete = this.handleDelete.bind(this);
  this.handleInput = this.handleInput.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  this.handleName = this.handleName.bind(this);
  this.handleCampus = this.handleCampus.bind(this);
  this.handleEmail = this.handleEmail.bind(this);
  }

  componentWillReceiveProps (newProps, oldProps) {
    this.setState(newProps.student);
  }

  handleDelete (event) {
    this.props.deleteStudent(this.state.student.id);
    event.preventDefault();
  }

  handleInput (field, event) {
    const value = event.target.value;
    this.setState({
      [field]: value
    });
  }

  handleName (event) {
    this.handleInput('name', event);
  }

  handleEmail (event) {
    this.handleInput('email', event);
  }

  handleCampus (event) {
    this.handleInput('HomeCampusId', event);
  }

  handleSubmit (event) {
    this.props.sendUpdatedStudent(this.state);
    event.preventDefault();
  }

  render () {

    let student = this.props.student;
    if (!student || !student.id) return <div />;
    let campus = this.props.student.HomeCampus;

    return (
      <div className="container">
        <h2 className="cool-font">Student Profile</h2>

        <table className="table">
          <tbody>
            <tr>
              <td>Id</td>
              <td>
                {student.id}
              </td>
            </tr>
            <tr>
              <td>Name</td>
              <td>
                <ContentEditable
                  html={student.name}
                  onChange={this.handleName}
                />
              </td>
            </tr>
            <tr>
              <td>Email</td>
              <td>
                <ContentEditable
                  html={student.email}
                  onChange={this.handleEmail}
                />
              </td>
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

        <h5>Switch Campuses</h5>
        <CampusMenu
          handleCampus={this.handleCampus}
          campuses={this.props.campuses}
        />

        <button
          className="btn btn-primary"
          onClick={this.handleSubmit}
        >
          Update Profile
        </button>
        <button
          className="btn btn-danger"
          onClick={this.handleDelete}
        >
          Delete Student
        </button>
      </div>
    );
  }
}

/*** Student Container React-Redux */

const mapStateToProps = ({campuses, students}, ownProps) => {
  let studentId = +ownProps.params.studentId;
  let student = students.find(aStudent => aStudent.id === studentId)
  return {student, campuses, students};
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteStudent (studentId) {
      dispatch(removeStudent(studentId))
      .then(() => browserHistory.push(`/students`));
    },
    sendUpdatedStudent (student) {
      dispatch(sendUpdatedStud(student))
      .then(() => browserHistory.push('/students'));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Student);

// Non-editable version:
// /** Student Presentational Component **/
// class Student extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       student: {}
//     };
//   this.handleDelete = this.handleDelete.bind(this);
//   }

//   componentWillReceiveProps (newProps, oldProps) {
//     this.setState({
//       student: newProps.student
//     });
//   }

//   handleDelete (event) {
//     this.props.deleteStudent(this.state.student.id);
//     event.preventDefault();
//   }

//   render () {

//     let student = this.props.student;
//     if (!student || !student.id) return <div />;
//     let campus = this.props.student.HomeCampus;

//     return (
//       <div className="container">
//         <h2 className="cool-font">Student Profile</h2>
//         <table className="table">
//           <tbody>
//             <tr>
//               <td>Id</td>
//               <td>{student.id}</td>
//             </tr>
//             <tr>
//               <td>Name</td>
//               <td>{student.name}</td>
//             </tr>
//             <tr>
//               <td>Email</td>
//               <td>{student.email}</td>
//             </tr>
//             <tr>
//               <td>Home Campus</td>
//               <td>
//                 <Link to={`/campus/${campus ? campus.id : '' }`}>
//                   {` ${ campus ? campus.name : '' }`}
//                 </Link>
//               </td>
//             </tr>
//           </tbody>
//         </table>
//         <button
//           className="btn btn-danger"
//           onClick={this.handleDelete}
//         >
//           Delete Student
//         </button>
//       </div>
//     );
//   }
// }

// /*** Student Container React-Redux */

// const mapStateToProps = ({campuses, students}, ownProps) => {

//   let studentId = +ownProps.params.studentId;

//   let student = students.find(aStudent => aStudent.id === studentId)

//   return {student, campuses, students};
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     deleteStudent (studentId) {
//       dispatch(removeStudent(studentId))
//       .then(() => browserHistory.push(`/students`));
//     }
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Student);


/** Before the great refactoring **/
/** Student Presentational Component **/
// const Student = (props) => {

//   let student = props.selectedStudent;
//   let campus = student.HomeCampus;

//   const handleDelete = (event) => {
//     props.deleteStudent(student.id);
//     event.preventDefault();
//   };

//   return (
//     <div className="container">
//       <h2 className="cool-font">Student Profile</h2>
//       <table className="table">
//         <tbody>
//           <tr>
//             <td>Id</td>
//             <td>{student.id}</td>
//           </tr>
//           <tr>
//             <td>Name</td>
//             <td>{student.name}</td>
//           </tr>
//           <tr>
//             <td>Email</td>
//             <td>{student.email}</td>
//           </tr>
//           <tr>
//             <td>Home Campus</td>
//             <td>
//               <Link to={`/campus/${campus ? campus.id : '' }`}>
//                 {` ${ campus ? campus.name : '' }`}
//               </Link>
//             </td>
//           </tr>
//         </tbody>
//       </table>
//       <button
//         className="btn btn-danger"
//         onClick={handleDelete}
//       >
//         Delete Student
//       </button>
//     </div>
//   );

// };

// /*** Student Container React-Redux */

// const mapStateToProps = (state) => {
//   return state;
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     deleteStudent (studentId) {
//       dispatch(removeStudent(studentId))
//       .then(() => browserHistory.push(`/students`));
//     }
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Student);

