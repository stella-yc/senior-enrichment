import axios from 'axios';

/* -----------------    ACTIONS     ------------------ */

export const ALL_STUDENTS = 'ALL_STUDENTS';
export const ADD_STUDENT = 'ADD_STUDENT';
export const UPDATE_STUDENT = 'UPDATE_STUDENT';
export const DELETE_STUDENT = 'DELETE_STUDENT';

/* ------------   ACTION CREATORS     ------------------ */

const loadStudents = (students) => ({
    type: ALL_STUDENTS,
    allStudents: students
  });

const loadNewStudent = (student) => {
  return {
    type: ADD_STUDENT,
    newStudent: student
  };
};

const updateStudent = (student) => {
  return {
    type: UPDATE_STUDENT,
    student
  };
};

const deleteStudent = (student) => {
  return {
    type: DELETE_STUDENT,
    deletedStudent: student
  };
};

// const updateStudent = (student) => {
//   return {
//     type: UPDATE_STUDENT,
//     student
//   };
// };

/* ------------       REDUCERS     ------------------ */

const reducer = function(allStudents = [], action) {

  switch (action.type) {

    case ALL_STUDENTS:
      return action.allStudents;

    case ADD_STUDENT:
      return [action.newStudent, ...allStudents];

    // case ADD_STUDENT: {
    //   let newStudent = action.newStudent;
    //   let homeCampus = newState.allCampuses.filter(campus =>
    //     campus.id === newStudent.HomeCampusId);
    //   newStudent.HomeCampus = homeCampus;
    //   newState.allStudents.push(newStudent);
    //   break;
    // }

    case UPDATE_STUDENT:
      return allStudents.map(student => (
        action.student.id === student.id ? action.student : student
      ));

    case DELETE_STUDENT: {
      return allStudents.filter(student =>
        student.id !== action.deletedStudent.id
      );
    }

    // case UPDATE_STUDENT: {
    //   let oldStudents = newState.allStudents;
    //   for (var i = 0; i < oldStudents.length; i++) {
    //     if (action.updatedStudent.id === oldStudents[i].id) {
    //       oldStudents[i] = action.updatedStudent;
    //     }
    //   }
    //   newState.allStudents = oldStudents;
    //   break;
    // }

    default: return allStudents;
  }

};

export default reducer;

/* ------------       DISPATCHERS     ------------------ */

export const getStudents = () => {
  return (dispatch) => {
    axios.get('/api/students')
    .then(res => res.data)
    .then(students => {
      dispatch(loadStudents(students));
    })
    .catch(console.error);
  };
};

export const addStudent = (newStudent) => {
  return (dispatch) => {
    return axios.post('/api/students', newStudent)
    .then(res => res.data)
    .then(student => {
      dispatch(loadNewStudent(student));
    })
    .catch(console.error);
  };
};

export const getStudent = (studentId) => {
  return (dispatch) => {
    return axios.get(`/api/students/${studentId}`)
    .then(res => res.data)
    .then(student => {
      dispatch(updateStudent(student));
    })
    .catch(console.error);
  };
};

export const removeStudent = (studentId) => {
  return (dispatch) => {
    return axios.delete(`/api/students/${studentId}`)
    .then(res => res.data)
    .then(student => {
      dispatch(deleteStudent(student));
    })
    .catch(console.error);
  };
};

export const sendUpdatedStud = (student) => {
  return (dispatch) => {
    return axios.put(`/api/students/${student.id}`, student)
    .then(res => res.data)
    .then(updatedStudent => {
      dispatch(updateStudent(updatedStudent));
    })
    .catch(console.error);
  };
};
