import React, { FC, useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import Modal, { ModalProps } from 'react-bootstrap/Modal';
import { Context as ShapesContext } from '../context/ShapesContext';
import { updateShapesList } from '../actions/ShapeActions';
import { updateShapes } from '../requests';

const AddShapeModal: FC<ModalProps> = (props: ModalProps) => {
  const {
    state: { shapes, shapeOptions },
    dispatch,
  } = useContext(ShapesContext);

  const [radioValue, setRadioValue] = useState('square');
  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = () => {
    const newShape = {
      id: Date.now(),
      type: radioValue,
    };

    setDisabled(true);

    (async () => {
      try {
        const requestData = {
          shapes: [...shapes, newShape],
        };

        await updateShapes(requestData);
        dispatch(updateShapesList(newShape));
        setDisabled(false);
        props.onSubmit();
      } catch (error) {
        setError(true);
        setDisabled(false);
      }
    })();
  };

  /**
   * Reset the local state when closing the modal.
   */
  const handleClose = () => {
    setError(false);
    setDisabled(false);
  };

  return (
    <Modal
      {...props}
      onExit={handleClose}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>Add Shape</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {error && (
          <Alert variant='danger'>
            There was an error adding your shape. Try again.
          </Alert>
        )}
        <Form>
          {shapeOptions.map((radio) => {
            const { name, value } = radio;
            return (
              <Form.Check
                key={value}
                label={name}
                type='radio'
                id={value}
                value={value}
                checked={radioValue === value}
                onChange={(event) => setRadioValue(event.currentTarget.value)}
              />
            );
          })}
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant='secondary' onClick={props.onHide}>
          Cancel
        </Button>
        <Button disabled={disabled} onClick={handleSubmit} type='submit'>
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddShapeModal;
