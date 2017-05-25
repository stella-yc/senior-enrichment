import axios from 'axios';

//action types
export const ALL_CAMPUSES = 'ALL_CAMPUSES';
export const ALL_STUDENTS = 'ALL_STUDENTS';
export const ADD_CAMPUS = 'ADD_CAMPUS';
export const ADD_STUDENT = 'ADD_STUDENT';

//action creators
const loadCampuses = (campuses) => {
  return {
    type: ALL_CAMPUSES,
    allCampuses: campuses
  };
};

const loadStudents = (students) => {
  return {
    type: ALL_STUDENTS,
    allStudents: students
  };
};

const loadNewCampus = (campus) => {
  return {
    type: ADD_CAMPUS,
    newCampus: campus
  };
};

const loadNewStudent = (student) => {
  return {
    type: ADD_STUDENT,
    newStudent: student
  };
};

// special action creator to work with thunk
// -- 1. Axios request to retrieve campuses from db
// -- 2. dispatch action object return by action creator,
// --    which will result in updating the store's state
export const getCampuses = () => {
  return (dispatch) => {
    axios.get('/api/campuses')
    .then(res => res.data)
    .then(campuses => {
      console.log('campuses received from route!', campuses);
      dispatch(loadCampuses(campuses))
    })
    .catch(console.error);
  };
};

// special action creator to work with thunk
// to retrieve all students
export const getStudents = () => {
  return (dispatch) => {
    axios.get('/api/students')
    .then(res => res.data)
    .then(students => {
      console.log('Students received from route!', students);
      dispatch(loadStudents(students))
    })
    .catch(console.error);
  };
};

// special action creator to work with thunk
// -- 1. to add new campus via post request to route
// -- 2. have that campus appear in allCampuses prop of state
// ----- either add the new campus to the allCampuses array
// ----- OR execute getCampuses immediately afterwards

export const addCampus = (newCampus) => {
  return (dispatch) => {
    return axios.post('/api/campuses', newCampus)
    .then(res => res.data)
    .then(campus => {
      dispatch(loadNewCampus(campus));
    })
    .catch(console.error);
  };
};
