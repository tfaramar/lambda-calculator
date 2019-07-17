import React, { useState } from "react";

//import any components needed
import SpecialButton from "./SpecialButton.js";

//Import your array data to from the provided data file
import { specials } from "../../../data.js";

const Specials = () => {
  // STEP 2 - add the imported data to state
  const [specialsState, setSpecialsState] = useState(specials);
  return (
    <div>
      {specialsState.map((special, i) => 
        <SpecialButton key={i} special={special} />
  )} 
    </div>
  );
};

export default Specials;