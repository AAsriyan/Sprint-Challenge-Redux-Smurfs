import React, { Component } from "react";
import Loader from "react-loader-spinner";
import { connect } from "react-redux";
import { getSmurfs, addSmurf, deleteSmurf, updateSmurf } from "../actions";
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
    if (this.props.fetchingSmurfs) {
      return (
        <div>
          <Loader type="Puff" color="#000" height="200" width="200" />
          <h2>LOADING THE BLUEST SMURFS...</h2>
        </div>
      );
    }
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
            placeholder="Enter Name"
            onChange={this.handleFormChanges}
            autoComplete="off"
            required
          />
          <input
            type="number"
            name="age"
            value={this.state.age}
            placeholder="Enter Age"
            onChange={this.handleFormChanges}
            autoComplete="off"
            required
          />
          <input
            type="text"
            name="height"
            value={this.state.height}
            placeholder="Enter Height"
            onChange={this.handleFormChanges}
            autoComplete="off"
            required
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
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs
  };
};

export default connect(
  mapStateToProps,
  { getSmurfs, addSmurf, deleteSmurf, updateSmurf }
)(App);
