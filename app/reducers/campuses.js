import axios from 'axios';

/* -----------------    ACTIONS     ------------------ */

const ALL_CAMPUSES = 'ALL_CAMPUSES';
const ADD_CAMPUS = 'ADD_CAMPUS';
const DELETE_CAMPUS = 'DELETE_CAMPUS';
const UPDATE_CAMPUS = 'UPDATE_CAMPUS';
const SELECT_CAMPUS_STUDENTS = 'SELECT_CAMPUS_STUDENTS';

/* ------------   ACTION CREATORS     ------------------ */

const loadCampuses = (campuses) => {
  return {
    type: ALL_CAMPUSES,
    allCampuses: campuses
  };
};

const loadNewCampus = (campus) => {
  return {
    type: ADD_CAMPUS,
    newCampus: campus
  };
};

const deleteCampus = (campus) => {
  return {
    type: DELETE_CAMPUS,
    deletedCampus: campus
  };
};

const updateCampus = (campus) => {
  return {
    type: UPDATE_CAMPUS,
    campus
  };
};

const setCampusStudents = (campus) => {
  return {
    type: SELECT_CAMPUS_STUDENTS,
    selectedCampus: campus
  };
};

/* ------------       REDUCERS     ------------------ */

const reducer = function(allCampuses = [], action) {

  switch (action.type) {

    case ALL_CAMPUSES:
      return action.allCampuses;

    case ADD_CAMPUS:
      return [...allCampuses, action.newCampus];

    case DELETE_CAMPUS: {
      return allCampuses.filter(campus =>
        campus.id !== action.deletedCampus.id
      );
    }

    case UPDATE_CAMPUS: {
      return allCampuses.map(campus => (
        action.campus.id === campus.id ? action.campus : campus
      ));
    }

    default: return allCampuses;

  }
};

export default reducer;



/* ------------       DISPATCHERS     ------------------ */

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

export const removeCampus = (campusId) => {
  return (dispatch) => {
    return axios.delete(`/api/campuses/${campusId}`)
    .then(res => res.data)
    .then(campus => {
      dispatch(deleteCampus(campus));
    })
    .catch(console.error);
  };
};

export const getCampus = (campusId) => {
  return (dispatch) => {
    return axios.get(`/api/campuses/${campusId}`)
    .then(res => res.data)
    .then(campus => {
      dispatch(updateCampus(campus));
    })
    .catch(console.error);
  };
};

export const sendUpdatedCamp = (campus) => {
  return (dispatch) => {
    return axios.put(`/api/campuses/${campus.id}`, campus)
    .then(res => res.data)
    .then(updCampus => {
      dispatch(updateCampus(updCampus));
    })
    .catch(console.error);
  };
};

// export const getCampusStudents = (campusId) => {
//   return (dispatch) => {
//     axios.get(`/api/campuses/${campusId}/students`)
//     .then(res => res.data)
//     .then(student => {
//       dispatch(setCampusStudents(student));
//     })
//     .catch(console.error);
//   };
// };
