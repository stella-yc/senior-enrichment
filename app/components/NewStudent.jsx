import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addStudent } from '../action-creators';
import { browserHistory } from 'react-router';

// ** Stateful Container for NewStudentForm ** //

class NewStudentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      HomeCampusId: ''
    };
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangeCampus = this.handleChangeCampus.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeName (event) {
    this.setState({name: event.target.value});
  }

  handleChangeEmail (event) {
    this.setState({email: event.target.value});
  }

  handleChangeCampus (event) {
    this.setState({
      HomeCampusId: event.target.value
    });
  }

  handleSubmit (event) {
    this.props.sendNewStudent(this.state);
    this.setState({
      name: '',
      email: '',
      HomeCampusId: ''
    });
    event.preventDefault();
  }

  render() {
    return (
      <div className="container">
      <h3 className="cool-font">Learn JavaScript in space!</h3>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Name:</label>
              <input
                type="text"
                name="name"
                className="form-control"
                value={this.state.name}
                onChange={this.handleChangeName}
              />
          </div>
          <div className="form-group">
            <label>Email:</label>
              <input
                type="text"
                name="imageURL"
                className="form-control"
                value={this.state.email}
                onChange={this.handleChangeEmail}
              />

          </div>
          <select
            value={this.props.campus}
            onChange={this.handleChangeCampus}
            className="form-control"
          >
            <option>Select an campus!</option>
            {this.props.allCampuses.map(campus => {
              return (

                <option
                  value={`${campus.id}`}
                  key={`${campus.id}`}
                > {`${campus.name}`}
                </option>
              );
            })}
          </select>
          <button
            className="btn btn-primary button-padding"
            type="submit">
            Go to space!
          </button>

        </form>
      </div>
    );
  }
}

// ** Smart Container for New Student Form ** //

const mapDispatchToProps = (dispatch) => {
  return {
    sendNewStudent (newStudent) {
      dispatch(addStudent(newStudent))
      .then(() => browserHistory.push(`/students`));
    }
  };
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, mapDispatchToProps)(NewStudentForm);
