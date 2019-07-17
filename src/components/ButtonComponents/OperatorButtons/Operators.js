import React, { useState } from "react";

//import any components needed
import OperatorButton from "./OperatorButton.js";

//Import your array data to from the provided data file
import { operators } from "../../../data.js";

const Operators = () => {
  // STEP 2 - add the imported data to state
  const [operatorsState, setOperatorsState] = useState(operators);
  console.log('operators', {operatorsState})
  return (
    <div>
      {operatorsState.map((operator, i) => 
        <OperatorButton key={i} operator={operator} />
      )} 
    </div>
  );
};

export default Operators;
