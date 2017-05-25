import { combineReducers } from 'redux';

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
  allCampuses: campuses,
  allStudents: students,
  selectedCampus: singleCampus,
  selectedStudent: {}
}


// Root Reducer!
const rootReducer = function(state = initialState, action) {
  switch (action.type) {
    default: return state;
  }
};

export default rootReducer;
