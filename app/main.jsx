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
import { getCampuses, getStudents } from './action-creators';
import NewCampus from './components/NewCampus';


const onCampusesEnter = () => store.dispatch(getCampuses());
const onStudentsEnter = () => store.dispatch(getStudents());

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
        <Route path="student/:studentId" component={Student} />
        <Route path="/newCampus" component={NewCampus} />
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
