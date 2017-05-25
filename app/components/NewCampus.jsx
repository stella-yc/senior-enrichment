import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCampus } from '../action-creators';


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
      <div>
        <h1>Join our space school!</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>
              Space Campus Name:
              <input
                type="text"
                name="name"
                value={this.state.campusName}
                onChange={this.handleChangeName}
              />
            </label>
          </div>
          <div>
            <label>
              Space Campus Photo Image URL:
              <input
                type="text"
                name="imageURL"
                value={this.state.campusPhoto}
                onChange={this.handleChangePhoto}
              />
            </label>
          </div>
          <button
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
      dispatch(addCampus(newCampus));
    }
  };
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCampusForm);
