import React from 'react';
import { Button } from 'react-bootstrap';

const CloseButton = ({ handleOnClick, buttonText }) => {
  return (
    <Button style={{ backgroundColor: '#e9ecf2', color: '#1b3548' , borderColor: "#e9ecf2"}} variant="secondary" onClick={handleOnClick}>
          {buttonText}
        </Button>
  );
};

export default CloseButton;


