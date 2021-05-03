import { ShapeActions, ShapeType } from '../types';

export const addShapes = (shapes: ShapeType[]): ShapeActions => ({
  type: 'ADD',
  payload: shapes,
});

export const fetchError = (error: string): ShapeActions => ({
  type: 'ERROR',
  payload: error,
});

export const updateShapesList = (shape: ShapeType): ShapeActions => ({
  type: 'UPDATE',
  payload: shape,
});
