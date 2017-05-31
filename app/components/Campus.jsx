import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';
import { removeCampus, sendUpdatedCamp} from '../reducers/campuses';
import { removeStudent } from '../reducers/students';
import ContentEditable from 'react-contenteditable';
import StudentRow from './StudentRow';

class Campus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campus: {
        id: '',
        name: '',
        imageURL: []
      },
      campusStudents: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleDelete = this.handleDelete.bind(this);

  }

  componentWillReceiveProps (newProps, oldProps) {
    this.setState({
      campus: newProps.campus,
      campusStudents: newProps.campusStudents
    });
  }

  handleName (event) {
    const value = event.target.value;
    let newState = Object.assign({}, this.state);
    newState.campus.name = value;
    this.setState(newState);
  }

  handleDelete (event) {
    this.props.deleteCampus(this.state.campus.id);
    event.preventDefault();
  }

  handleSubmit (event) {
    this.props.sendUpdatedCampus(this.state.campus);
    event.preventDefault();
  }

  render () {
    const campus = this.state.campus;
    const students = this.state.campusStudents;

    //handle async issues with loading data and with deleting campus
    if (!campus || campus.id === '') return <div />;

    return (

      <div className="container">

        <h1 className="cool-font">
          <ContentEditable
            html={campus.name}
            onChange={this.handleName}
          />
        </h1>
        <button className="btn btn-outline-success btn-sm" onClick={this.handleSubmit}>Save Name Edits</button>

          <div className="planet">
            <img src={campus.imageURL} className="img-responsive" />
          </div>

        <h4>Enrolled Students</h4>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Delete Student</th>
            </tr>
          </thead>
            <tbody>
          {
            students.map(student => {
              return (
                <StudentRow
                  key={student.id}
                  id={student.id}
                  name={student.name}
                  campusId={student.HomeCampusId}
                  deleteStudent={this.props.deleteStudent}
                />
                // <tr key={student.id}>
                //   <td>{student.id}</td>
                //   <td><Link to={`/student/${student.id}`}>
                //     {student.name}
                //   </Link></td>
                //   <td>
                //     <button
                //       className="btn btn-danger"
                //       onClick={this.handleStudentDelete}>X
                //     </button>
                //   </td>
                // </tr>
              );
            })
          }
          </tbody>
        </table>

        <button
          className="btn btn-danger"
          onClick={this.handleDelete}
        >
          Delete Campus
        </button>

      </div>
    );
  }

}


/*** Campus Container React-Redux */

const mapStateToProps = ({ campuses, students }, ownProps) => {

  let campusId = +ownProps.params.campusId;

  let campus = campuses.find(aCampus => {
    return aCampus.id === campusId;
  });

  let campusStudents = students.filter(student =>
    student.HomeCampusId === campusId);
    return {campus, campusStudents, campuses, students};

};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteCampus (campusId) {
      dispatch(removeCampus(campusId))
      .then(() => browserHistory.push(`/campuses`));
    },
    sendUpdatedCampus (campus) {
      console.log('*campus', campus);
      dispatch(sendUpdatedCamp(campus));
    },
    deleteStudent (studentId) {
      dispatch(removeStudent(studentId));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Campus);


// import React from 'react';
// import { connect } from 'react-redux';
// import { Link, browserHistory } from 'react-router';
// import { removeCampus } from '../reducers/campuses';

// const Campus = (props) => {

//   let students = props.selectedCampusStudents;
//   let campus = props.selectedCampus;

//   const handleDelete = (event) => {
//     props.deleteCampus(campus.id);
//     event.preventDefault();
//   };

//   return (
//     <div className="container">

//       <h1 className="cool-font">{campus.name}</h1>
//         <div className="planet">
//           <img src={campus.imageURL} className="img-responsive" />
//         </div>

//       <h4>Enrolled Students</h4>
//       <table className="table table-striped">
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//           </tr>
//         </thead>
//           <tbody>
//         {
//           students.map(student => {
//             return (
//               <tr key={student.id}>
//                 <td>{student.id}</td>
//                 <td><Link to={`/student/${student.id}`}>
//                   {student.name}
//                 </Link></td>
//               </tr>
//             );
//           })
//         }
//         </tbody>
//       </table>

//       <button
//         className="btn btn-danger"
//         onClick={handleDelete}
//       >
//         Delete Campus
//       </button>

//     </div>
//   );
// };


// /*** Campus Container React-Redux */
// const mapStateToProps = (state) => {
//   return state;
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     deleteCampus (campusId) {
//       dispatch(removeCampus(campusId))
//       .then(() => browserHistory.push(`/campuses`));
//     }
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Campus);
