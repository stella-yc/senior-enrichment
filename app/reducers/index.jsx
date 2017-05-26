import { combineReducers } from 'redux';
import { ALL_CAMPUSES,
        ALL_STUDENTS,
        ADD_CAMPUS,
        ADD_STUDENT,
        SELECT_STUDENT,
        DELETE_STUDENT,
        SELECT_CAMPUS_STUDENTS,
        SELECT_CAMPUS
      } from '../action-creators';

// This is a rough outline of the structure of the store and
// what info we want on store
// const initialState = {
//   allCampuses: [],
//   allStudents: [],
//   selectedCampus: {},
//   selectedStudent: {}
// }

/****** DUMMY DATA ******/
const campuses = [
  { name: 'Mars', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/76/Mars_Hubble.jpg' },
  { name: 'Luna', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/67/Moon_apollo12.jpg' },
  { name: 'Terra', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Rotating_earth_%28large%29.gif' },
  { name: 'Titan', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Titan_multi_spectral_overlay.jpg' }
];

const singleCampus =
  { name: 'Mars', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/76/Mars_Hubble.jpg' };

const students = [
  {id: 1, name: 'Azula', campus: 'Mars'},
  {id: 2, name: 'Louie', campus: 'Terra'}
];

// Initial State assigned dummy data values
const initialState = {
  allCampuses: [],
  allStudents: [],
  selectedCampus: {},
  selectedStudent: {},
  selectedCampusStudents: []
};


// Root Reducer!
const rootReducer = function(state = initialState, action) {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case ALL_CAMPUSES:
      newState.allCampuses = action.allCampuses;
      break;
    case ALL_STUDENTS:
      newState.allStudents = action.allStudents;
      break;
    case ADD_CAMPUS:
      newState.allCampuses.push(action.newCampus);
      break;
    case ADD_STUDENT: {
      let newStudent = action.newStudent;
      let homeCampus = newState.allCampuses.filter(campus =>
        campus.id === newStudent.HomeCampusId);
      newStudent.HomeCampus = homeCampus;
      newState.allStudents.push(newStudent);
      break;
    }
    case SELECT_STUDENT:
      newState.selectedStudent = action.selectedStudent;
      break;
    case DELETE_STUDENT: {
      let oldStudents = newState.allStudents;
      newState.allStudents = oldStudents.filter(student =>
        student.id !== action.deletedStudent.id
      );
      break;
    }
    case SELECT_CAMPUS_STUDENTS:
      newState.selectedCampusStudents = action.selectedCampus;
      break;
    case SELECT_CAMPUS:
      newState.selectedCampus = action.selectedCampus;
      break;
    default: return state;
  }
  return newState;
};

export default rootReducer;
