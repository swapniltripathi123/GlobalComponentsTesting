import React from 'react';
import { BiRefresh } from 'react-icons/bi'; 
import { Button } from 'react-bootstrap';

const RefreshButton = () => {
  return (
    <Button
      variant="link"
      className="p-0 ml-2"
      style={{
        background: '#e9ecf2',
        fontSize: '24px',
        width: '45px',
        marginLeft: '3px',
        color: '#1b3548'
      }}
      onClick={() => window.location.reload()}
    >
      <BiRefresh size={20} />
    </Button>
  );
};

export default RefreshButton;
