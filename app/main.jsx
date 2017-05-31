'use strict';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import store from './store';
import { getCampuses, getCampusStudents, getCampus } from './reducers/campuses';
import { getStudents, getStudent } from './reducers/students';

import AllCampuses from './components/AllCampuses';
import AllStudents from './components/AllStudents';
import App from './components/App';
import Campus from './components/Campus';
import Student from './components/Student';
import NewCampus from './components/NewCampus';
import NewStudent from './components/NewStudent';
import UpdateStudent from './components/UpdateStudent';

//** onEnter Functions **//

const fetchInitialData = () => {
  store.dispatch(getCampuses());
  store.dispatch(getStudents());
};

const onStudentEnter = (newRouterState) =>
  store.dispatch(getStudent(newRouterState.params.studentId));

const onCampusEnter = (newRouterState) => {
  store.dispatch(getCampus(newRouterState.params.campusId));
};

// const onStudentsEnter = () => store.dispatch(getStudents());
// const onCampusEnter = (newRouterState) => {
//   store.dispatch(getCampusStudents(newRouterState.params.campusId));
//   store.dispatch(getCampus(newRouterState.params.campusId));
// };

//** Frontend routing **//

render (

    <Router history={browserHistory}>
      <Route path="/" component={App} />
    </Router>,
  document.getElementById('main')
)

render (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App} onEnter={fetchInitialData}>
        <Route path="campuses" component={AllCampuses} />
        <Route path="students"
          component={AllStudents}
        />
        <Route path="campus/:campusId"
          component={Campus}
          onEnter={onCampusEnter}
        />
        <Route path="student/:studentId"
          component={Student}
          onEnter={onStudentEnter}
        />
        <Route path="/newCampus" component={NewCampus} />
        <Route path="/newStudent" component={NewStudent} />
        <Route path="updateStudent" component={UpdateStudent} />
        <IndexRoute component={AllCampuses} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)
