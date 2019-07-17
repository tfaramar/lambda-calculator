import React from "react";

const OperatorButton = ({operator}) => {
  console.log(operator)
  return (
    <button>
      {operator.char}
    </button>
  );
};

export default OperatorButton;
