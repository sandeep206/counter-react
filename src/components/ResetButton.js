import React from 'react';

const resetButton = ({onClickFunction}) => {
  const handleClick = () => onClickFunction();

  return <button onClick={handleClick}> Reset Counter</button>
};


export default resetButton;