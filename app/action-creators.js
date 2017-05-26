import axios from 'axios';

//** action types **//

export const ALL_CAMPUSES = 'ALL_CAMPUSES';
export const ALL_STUDENTS = 'ALL_STUDENTS';
export const ADD_CAMPUS = 'ADD_CAMPUS';
export const ADD_STUDENT = 'ADD_STUDENT';
export const SELECT_STUDENT = 'SELECT_STUDENT';
export const DELETE_STUDENT = 'DELETE_STUDENT';
export const SELECT_CAMPUS_STUDENTS = 'SELECT_CAMPUS_STUDENTS';
export const SELECT_CAMPUS = 'SELECT_CAMPUS';

//** action creators **//

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

const setStudent = (student) => {
  return {
    type: SELECT_STUDENT,
    selectedStudent: student
  };
};

const deleteStudent = (student) => {
  return {
    type: DELETE_STUDENT,
    deletedStudent: student
  };
};

const setCampusStudents = (campus) => {
  return {
    type: SELECT_CAMPUS_STUDENTS,
    selectedCampus: campus
  };
};

const setCampus = (campus) => {
  return {
    type: SELECT_CAMPUS,
    selectedCampus: campus
  };
};

// ** ASYNC ACTION CREATORS ** //


// -- 1. Axios request to retrieve campuses from db
// -- 2. dispatch action object return by action creator,
// --    which will result in updating the store's state
export const getCampuses = () => {
  return (dispatch) => {
    axios.get('/api/campuses')
    .then(res => res.data)
    .then(campuses => {
      dispatch(loadCampuses(campuses));
    })
    .catch(console.error);
  };
};


// -- 1. Axios request to retrieve all students
// -- 2. Update redux store state
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


// -- 1. to add new campus via post request to route
// -- 2. have that campus appear in allCampuses prop of state
// ----- by adding the new campus to the allCampuses array

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


// -- 1. to add new student via post request to route
// -- 2. have that campus appear in allStudents prop of state

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


// -- 1. get student from db
// -- 2. update redux store state

export const getStudent = (studentId) => {
  return (dispatch) => {
    axios.get(`/api/students/${studentId}`)
    .then(res => res.data)
    .then(student => {
      dispatch(setStudent(student));
    })
    .catch(console.error);
  };
};

// -- 1. delete student from database
// -- 2. update redux store state

export const removeStudent = (studentId) => {
  return (dispatch) => {
    axios.delete(`/api/students/${studentId}`)
    .then(res => res.data)
    .then(student => {
      dispatch(deleteStudent(student));
    })
    .catch(console.error);
  };
};

// -- 1. retrieve all students in a campus from database
// -- 2. update redux store state

export const getCampusStudents = (campusId) => {
  return (dispatch) => {
    axios.get(`/api/campuses/${campusId}/students`)
    .then(res => res.data)
    .then(student => {
      dispatch(setCampusStudents(student));
    })
    .catch(console.error);
  };
};

// -- 1. retrieve a campus from database
// -- 2. update redux store

export const getCampus = (campusId) => {
  return (dispatch) => {
    axios.get(`/api/campuses/${campusId}`)
    .then(res => res.data)
    .then(campus => {
      dispatch(setCampus(campus));
    })
    .catch(console.error);
  };
};
