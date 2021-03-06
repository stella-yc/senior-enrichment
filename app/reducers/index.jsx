import { combineReducers } from 'redux';
import campuses from './campuses';
import students from './students';
import auth from './auth';

export default combineReducers({ campuses, students });






// import { ALL_CAMPUSES,
//         ALL_STUDENTS,
//         ADD_CAMPUS,
//         ADD_STUDENT,
//         SELECT_STUDENT,
//         DELETE_STUDENT,
//         DELETE_CAMPUS,
//         SELECT_CAMPUS_STUDENTS,
//         SELECT_CAMPUS,
//         UPDATE_STUDENT
//       } from '../action-creators';

// Initial State
// const initialState = {
//   allCampuses: [],
//   allStudents: [],
//   selectedCampus: {},
//   selectedStudent: {},
//   selectedCampusStudents: []
// };

// Root Reducer!
// const rootReducer = function(state = initialState, action) {
//   const newState = Object.assign({}, state);
//   switch (action.type) {

//     case ALL_CAMPUSES:
//       newState.allCampuses = action.allCampuses;
//       break;

//     case ALL_STUDENTS:
//       newState.allStudents = action.allStudents;
//       break;

//     case ADD_CAMPUS:
//       newState.allCampuses.push(action.newCampus);
//       break;

//     case ADD_STUDENT: {
//       let newStudent = action.newStudent;
//       let homeCampus = newState.allCampuses.filter(campus =>
//         campus.id === newStudent.HomeCampusId);
//       newStudent.HomeCampus = homeCampus;
//       newState.allStudents.push(newStudent);
//       break;
//     }

//     case SELECT_STUDENT:
//       newState.selectedStudent = action.selectedStudent;
//       break;

//     case SELECT_CAMPUS:
//       newState.selectedCampus = action.selectedCampus;
//       break;

//     case SELECT_CAMPUS_STUDENTS:
//       newState.selectedCampusStudents = action.selectedCampus;
//       break;

//     case DELETE_STUDENT: {
//       let oldStudents = newState.allStudents;
//       newState.allStudents = oldStudents.filter(student =>
//         student.id !== action.deletedStudent.id
//       );
//       break;
//     }

//     case DELETE_CAMPUS: {
//       let oldCampuses = newState.allCampuses;
//       newState.allCampuses = oldCampuses.filter(campus =>
//         campus.id !== action.deletedCampus.id
//       );
//       break;
//     }

//     case UPDATE_STUDENT: {
//       let oldStudents = newState.allStudents;
//       for (var i = 0; i < oldStudents.length; i++) {
//         if (action.updatedStudent.id === oldStudents[i].id) {
//           oldStudents[i] = action.updatedStudent;
//         }
//       }
//       newState.allStudents = oldStudents;
//       break;
//     }

//     default: return state;
//   }

//   return newState;

// };

// export default rootReducer;

/****** DUMMY DATA ******/

// const campuses = [
//   { name: 'Mars', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/76/Mars_Hubble.jpg' },
//   { name: 'Luna', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/67/Moon_apollo12.jpg' },
//   { name: 'Terra', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Rotating_earth_%28large%29.gif' },
//   { name: 'Titan', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Titan_multi_spectral_overlay.jpg' }
// ];

// const singleCampus =
//   { name: 'Mars', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/76/Mars_Hubble.jpg' };

// const students = [
//   {id: 1, name: 'Azula', campus: 'Mars'},
//   {id: 2, name: 'Louie', campus: 'Terra'}
// ];
