import React from 'react';

export type ShapeTypesType = 'square' | 'circle' | 'triangle';
export type ShapeActions =
  | { type: 'LOAD'; payload: boolean }
  | { type: 'ERROR'; payload: string | null }
  | { type: 'ADD'; payload: ShapeType[] }
  | { type: 'UPDATE'; payload: ShapeType };

export type ShapeType = {
  id: number;
  type: string;
};

export type ShapeOptionType = {
  name: string;
  value: string;
};

export type ShapesStateType = {
  loading: boolean;
  error: string | null;
  shapes: ShapeType[];
  shapeOptions: ShapeOptionType[];
};

export type ShapeContextType = {
  state: ShapesStateType;
  dispatch: React.Dispatch<ShapeActions>;
};

export type ShapesUpdateRequestBody = {
  shapes: ShapeType[];
};
