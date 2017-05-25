'use strict';
import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import {Router, Route, hashHistory, IndexRoute} from 'react-router'

import store from './store';
import Root from './components/Root';
import AllCampuses from './components/AllCampuses';
import AllStudents from './components/AllStudents';
import App from './components/App';
import Campus from './components/Campus';
import Student from './components/Student';
import { getCampuses, getStudents, getStudent } from './action-creators';
import NewCampus from './components/NewCampus';
import NewStudent from './components/NewStudent';

const onCampusesEnter = () => store.dispatch(getCampuses());
const onStudentsEnter = () => store.dispatch(getStudents());
const onStudentEnter = (newRouterState) => store.dispatch(getStudent(newRouterState.params.studentId));

render (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App} onEnter={onCampusesEnter}>
        <Route path="campuses" component={AllCampuses} />
        <Route path="students"
          component={AllStudents}
          onEnter={onStudentsEnter}
        />
        <Route path="campus/:campusName" component={Campus} />
        <Route path="student/:studentId"
          component={Student}
          onEnter={onStudentEnter}
        />
        <Route path="/newCampus" component={NewCampus} />
        <Route path="/newStudent" component={NewStudent} />
        <IndexRoute component={AllCampuses} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)



// render (
//   <Provider store={store}>
//     <Router history={hashHistory}>
//       <Route path="/" component={AllCampuses} />
//     </Router>
//   </Provider>,
//   document.getElementById('main')
// )
