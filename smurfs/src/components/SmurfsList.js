import React from "react";
import Smurf from "./Smurf";

const SmurfsList = props => {
  return (
    <div>
      {props.smurfs.map(smurf => (
        <Smurf
          key={smurf.id}
          smurf={smurf}
          handleDeleteSmurf={props.handleDeleteSmurf}
        />
      ))}
    </div>
  );
};

export default SmurfsList;
