import React, { FC } from 'react';
import { ShapeTypesType } from '../types';
export type ShapeType = ShapeTypesType;

type ShapeProps = {
  type: ShapeType;
};

const Shape: FC<ShapeProps> = (props: ShapeProps) => {
  const { type } = props;

  switch (type) {
    case 'square':
      return (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          height='100%'
          width='100%'
          viewBox='0 0 100 100'
        >
          <rect x='0' y='0' width='100' height='100'>
            <title>Square</title>
          </rect>
        </svg>
      );

    case 'circle':
      return (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          height='100%'
          width='100%'
          viewBox='0 0 100 100'
        >
          <circle cx='50' cy='50' r='50'>
            <title>Circle</title>
          </circle>
        </svg>
      );

    case 'triangle':
      return (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          height='100%'
          width='100%'
          viewBox='0 0 100 100'
        >
          <polygon points='50 0, 100 100, 0 100'>
            <title>Triangle</title>
          </polygon>
        </svg>
      );

    default:
      return null;
  }
};

export default Shape;
