import React from "react";
import { connect } from "react-redux";
import { updateSmurf } from "../actions";

class Smurf extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      age: "",
      height: "",
      isEditing: false
    };
  }

  toggleEdit = () => {
    this.setState(prevState => ({ isEditing: !prevState.isEditing }));
  };

  handleEditChanges = e => {
    e.preventDefault();

    this.setState({ [e.target.name]: e.target.value });
  };

  handleUpdateSmurf = (e, id) => {
    e.preventDefault();

    const updatedSmurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    };

    this.props.updateSmurf(id, updatedSmurf);

    this.setState({
      name: "",
      age: "",
      height: ""
    });

    this.toggleEdit();
  };

  render() {
    if (this.state.isEditing === false) {
      return (
        <div>
          <h2>{this.props.smurf.name}</h2>
          <p>{this.props.smurf.age}</p>
          <p>{this.props.smurf.height}</p>
          <button
            onClick={e => this.props.handleDeleteSmurf(e, this.props.smurf.id)}
          >
            Delete
          </button>
          <button onClick={this.toggleEdit}>Update</button>
        </div>
      );
    } else {
      return (
        <div>
          <form onSubmit={e => this.handleUpdateSmurf(e, this.props.smurf.id)}>
            <input
              type="text"
              name="name"
              value={this.state.name}
              placeholder={this.props.smurf.name}
              onChange={this.handleEditChanges}
              autoComplete="off"
            />
            <input
              type="number"
              name="age"
              value={this.state.age}
              placeholder={this.props.smurf.age}
              onChange={this.handleEditChanges}
              autoComplete="off"
            />
            <input
              type="text"
              name="height"
              value={this.state.height}
              placeholder={this.props.smurf.height}
              onChange={this.handleEditChanges}
              autoComplete="off"
            />
            <button>Submit</button>
          </form>
          <button onClick={this.toggleEdit}>Cancel</button>
        </div>
      );
    }
  }
}

export default connect(
  null,
  { updateSmurf }
)(Smurf);
