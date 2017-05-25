import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addStudent } from '../action-creators';

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
    console.log('state to send', this.state);
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
      <div>
      <h1>Learn JavaScript in space!</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChangeName}
              />
            </label>
          </div>
          <div>
            <label>
              Email:
              <input
                type="text"
                name="imageURL"
                value={this.state.email}
                onChange={this.handleChangeEmail}
              />
            </label>
          </div>
          <select value={this.props.campus} onChange=
          {this.handleChangeCampus}>
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
      dispatch(addStudent(newStudent));
    }
  };
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, mapDispatchToProps)(NewStudentForm);
