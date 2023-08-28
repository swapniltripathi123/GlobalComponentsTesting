import React from 'react';
import { Button } from 'react-bootstrap';

const SaveButton = ({ buttonText , handleOnClick}) => {
  return (
    <Button  style={{ backgroundColor: '#30a5ff' , borderBlockColor: '#30a5ff'}} variant="primary" onClick={handleOnClick}>
    {buttonText}
    </Button>
  );
};

export default SaveButton;


