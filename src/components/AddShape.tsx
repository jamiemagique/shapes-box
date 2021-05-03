import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import AddShapeModal from './AddShapeModal';

function AddShape() {
  const [modalShow, setModalShow] = useState(false);

  const hideModal = () => setModalShow(false);

  return (
    <Container className='pb-3'>
      <Nav className='justify-content-end'>
        <Nav.Link
          as={Button}
          variant='primary'
          onClick={() => setModalShow(true)}
        >
          Add Shape <span aria-hidden='true'>+</span>
        </Nav.Link>

        <AddShapeModal
          show={modalShow}
          onHide={hideModal}
          onSubmit={hideModal}
        />
      </Nav>
    </Container>
  );
}

export default AddShape;
