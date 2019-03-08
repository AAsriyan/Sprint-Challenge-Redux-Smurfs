import React from "react";

const Smurf = props => {
  return (
    <div>
      <h2>{props.smurf.name}</h2>
      <p>{props.smurf.age}</p>
      <p>{props.smurf.height}</p>
      <button onClick={e => props.handleDeleteSmurf(e, props.smurf.id)}>
        Delete
      </button>
      <button>Update</button>
    </div>
  );
};

export default Smurf;
