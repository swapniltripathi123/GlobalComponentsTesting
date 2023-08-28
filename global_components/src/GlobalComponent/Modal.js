import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import CloseButton from './Button/CloseButton';
import SaveButton from './Button/SaveButton';

const GlobalModal = ({ showModal, handleCloseButton, title, body, footer ,handleSaveButton}) => {

  return (
    <Modal show={showModal} onHide={handleCloseButton}>
      <Modal.Header closeButton>
        <Modal.Title style={{ color: '#5f6468', fontWeight: 'bold' }}>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {body}
      </Modal.Body>
      <Modal.Footer>
        {footer}
       <CloseButton buttonText={"Close"} handleOnClick={handleCloseButton} />
       <SaveButton buttonText={"Save"} handleOnClick={handleSaveButton} />
      </Modal.Footer>
    </Modal>
  );
};

export default GlobalModal;
