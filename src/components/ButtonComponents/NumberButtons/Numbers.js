import React, { useState } from "react";

//import any components needed
import NumberButton from "./NumberButton.js";

//Import your array data to from the provided data file
import { numbers } from "../../../data.js";


const Numbers = () => {
  // STEP 2 - add the imported data to state
  const [numbersState, setNumbersState] = useState(numbers);
  console.log('numbers', {numbersState})
  return (
    <div>
      {numbersState.map((number, i) => 
        <NumberButton key={i} number={number} />
  )} 
    </div>
  );
};

export default Numbers;
