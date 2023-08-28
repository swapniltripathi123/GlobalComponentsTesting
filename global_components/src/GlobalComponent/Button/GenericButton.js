import React from 'react';
import { Button } from 'react-bootstrap';

const GenericButton = ({ buttonText , handleOnClick}) => {
  return (
    <Button variant="success" className="custom-button-margin"  onClick={handleOnClick}>
    {buttonText}
    </Button>
  );
};

export default GenericButton;


  