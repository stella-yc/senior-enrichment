import { combineReducers } from 'redux';

// This is a rough outline of the structure of the store and
// what info we want on store
// const initialState = {
//   allCampuses: [],
//   allStudents: [],
//   selectedCampus: {},
//   selectedStudent: {}
// }

const campuses = [
  { name: 'Mars', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/76/Mars_Hubble.jpg' },
  { name: 'Luna', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/67/Moon_apollo12.jpg' },
  { name: 'Terra', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Rotating_earth_%28large%29.gif' },
  { name: 'Titan', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Titan_multi_spectral_overlay.jpg' }
];

const initialState = {
  allCampuses: campuses,
  allStudents: [],
  selectedCampus: {},
  selectedStudent: {}
}

const rootReducer = function(state = initialState, action) {
  switch (action.type) {
    default: return state;
  }
};

export default rootReducer;
