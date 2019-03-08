import React, { Component } from "react";
import Loader from "react-loader-spinner";
import { connect } from "react-redux";
import { getSmurfs, addSmurf, deleteSmurf } from "../actions";
import SmurfsList from "./SmurfsList";
import "./App.css";
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  state = {
    name: "",
    age: "",
    height: ""
  };

  componentDidMount = () => {
    this.props.getSmurfs();
  };

  handleFormChanges = e => {
    e.preventDefault();

    this.setState({ [e.target.name]: e.target.value });
  };

  handleAddSmurf = e => {
    e.preventDefault();

    const newSmurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    };

    this.props.addSmurf(newSmurf);

    this.setState({
      name: "",
      age: "",
      height: ""
    });
  };

  handleDeleteSmurf = (e, id) => {
    e.preventDefault();

    this.props.deleteSmurf(id);
  };

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <SmurfsList
          smurfs={this.props.smurfs}
          handleDeleteSmurf={this.handleDeleteSmurf}
        />
        <form onSubmit={this.handleAddSmurf}>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleFormChanges}
            autoComplete="off"
          />
          <input
            type="number"
            name="age"
            value={this.state.age}
            onChange={this.handleFormChanges}
            autoComplete="off"
          />
          <input
            type="text"
            name="height"
            value={this.state.height}
            onChange={this.handleFormChanges}
            autoComplete="off"
          />
          <button>Add Smurf</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    smurfs: state.smurfs
  };
};

export default connect(
  mapStateToProps,
  { getSmurfs, addSmurf, deleteSmurf }
)(App);
