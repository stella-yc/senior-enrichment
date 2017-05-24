import React, {Component} from 'react';
import store from '../store';
import { connect } from 'react-redux';
import AllCampuses from './AllCampuses';


const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = (dispatch) => {
  return {};
}

const AllCampusesContainer = connect(mapStateToProps, mapDispatchToProps)(AllCampuses);

export default AllCampusesContainer;
