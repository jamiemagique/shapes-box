import React, { useReducer } from 'react';
import { ShapeActions, ShapesStateType, ShapeContextType } from '../types';

const defaultState: ShapesStateType = {
  loading: true,
  error: null,
  shapes: [],
  shapeOptions: [
    {
      name: 'Square',
      value: 'square',
    },
    {
      name: 'Circle',
      value: 'circle',
    },
    {
      name: 'Triangle',
      value: 'triangle',
    },
  ],
};

const reducer = (
  state: ShapesStateType,
  action: ShapeActions
): ShapesStateType => {
  switch (action.type) {
    case 'LOAD':
      return {
        ...state,
        loading: true,
        error: null,
      };

    case 'ERROR':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case 'ADD':
      return {
        ...state,
        loading: false,
        error: null,
        shapes: [...state.shapes, ...action.payload],
      };

    case 'UPDATE':
      return {
        ...state,
        shapes: [...state.shapes, action.payload],
      };

    default:
      return state;
  }
};

export const Context = React.createContext({} as ShapeContextType);

export const Provider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};
