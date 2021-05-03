import React, { FC, useEffect, useContext } from 'react';
import Alert from 'react-bootstrap/Alert';
import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Shape from './Shape';
import AddShape from './AddShape';
import { Context as ShapesContext } from '../context/ShapesContext';
import { addShapes, fetchError } from '../actions/ShapeActions';
import { ShapeType, ShapeTypesType } from '../types';
import { getShapes } from '../requests';

const ShapesList: FC = () => {
  const {
    state: { loading, error, shapes },
    dispatch,
  } = useContext(ShapesContext);

  useEffect(() => {
    const fetchShapes = async () => {
      try {
        const result = await getShapes();

        dispatch(addShapes(result.shapes));
      } catch (error) {
        dispatch(fetchError(error));
      }
    };

    fetchShapes();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (loading) {
    return (
      <div className='text-center'>
        <Spinner
          className='align-middle'
          animation='border'
          role='status'
          variant='primary'
        >
          <span className='sr-only'>Loading</span>
        </Spinner>
      </div>
    );
  }

  if (error) {
    return (
      <Container>
        <Row>
          <Col>
            <Alert variant='danger'>
              No shapes to play with right now. Try again later.
            </Alert>
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <Container>
      <Row>
        <AddShape />
      </Row>
      <Row>
        {shapes.map((shape: ShapeType) => {
          const { id, type } = shape;

          return (
            <Col className='pt-4' xs='4' key={id}>
              <Shape type={type as ShapeTypesType} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default ShapesList;
