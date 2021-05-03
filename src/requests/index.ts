import { ShapesUpdateRequestBody } from '../types';

const API_URL = process.env.REACT_APP_API_URL;
export const getShapes = async () => {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data;
};

export const updateShapes = async (body: ShapesUpdateRequestBody) => {
  const response = await fetch(API_URL, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  const data = await response.json();
  return data;
};
