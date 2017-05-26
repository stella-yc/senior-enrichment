import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sendUpdatedStud } from '../action-creators';
import { browserHistory } from 'react-router';

// ** Did not complete, so this is not hooked up to the site ** //
// ** Stateful Container for UpdateStudent ** //

class UpdateStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      email: '',
      HomeCampusId: ''
    };
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangeCampus = this.handleChangeCampus.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps (newProps, oldProps) {
    let student = newProps.selectedStudent;
    this.setState({
      id: student.id,
      name: student.name,
      email: student.email,
      HomeCampusId: student.HomeCampusId
    });
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
    this.props.sendUpdatedStudent(this.state);
    this.setState({
      name: '',
      email: '',
      HomeCampusId: ''
    });
    event.preventDefault();
  }

  render() {
    let homeCampus = this.props.selectedStudent.HomeCampus;
    return (
      <div className="container">
      <h3 className="cool-font">Student Profile</h3>
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
          <p>{`Current Campus: ${homeCampus ? homeCampus.name : '' }`}</p>
          <select
            value={this.props.campus}
            onChange={this.handleChangeCampus}
            className="form-control"
          >
            <option>Select an campus</option>
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
            Save Your Changes
          </button>

        </form>
      </div>
    );
  }
}

// ** Smart Container for Update Student Form ** //

const mapDispatchToProps = (dispatch) => {
  return {
    sendUpdatedStudent (student) {
      dispatch(sendUpdatedStud(student))
      .then(() => browserHistory.push(`/students`));
    }
  };
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateStudent);
