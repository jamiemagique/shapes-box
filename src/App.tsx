import React from 'react';
import { Provider as ShapesProvider } from './context/ShapesContext';
import ShapesList from './components/ShapesList';

function App() {
  return (
    <ShapesProvider>
      <ShapesList />
    </ShapesProvider>
  );
}

export default App;
