import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCampus } from '../reducers/campuses';
import { browserHistory } from 'react-router';

// Form component with local state //

class NewCampusForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      imageURL: ''
    };
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangePhoto = this.handleChangePhoto.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit (event) {
    this.props.sendNewCampus(this.state);
    this.setState({
      name: '',
      imageURL: ''
    });
    event.preventDefault();
  }

  handleChangeName (event) {
    this.setState({name: event.target.value});
  }

  handleChangePhoto (event) {
    this.setState({imageURL: event.target.value});
  }

  render () {
    return (
      <div className="container">
        <h3 className="cool-font">Join our space school!</h3>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Space Campus Name:</label>

              <input
                type="text"
                name="name"
                value={this.state.campusName}
                onChange={this.handleChangeName}
                className="form-control"
              />

          </div>
          <div className="form-group">
            <label>Space Campus Photo Image URL:</label>

              <input
                type="text"
                name="imageURL"
                value={this.state.campusPhoto}
                onChange={this.handleChangePhoto}
                className="form-control"
              />

          </div>
          <button
            className="btn btn-primary"
            type="submit">
            Join space school!!!
          </button>

        </form>
      </div>
    );
  }
}

// ** Smart Container for NewCampusForm **//

const mapDispatchToProps = (dispatch) => {
  return {
    sendNewCampus (newCampus) {
      dispatch(addCampus(newCampus))
      .then(() => browserHistory.push('/campuses'));
    }
  };
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCampusForm);
