import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { routesConfig } from './configurations/routesConfig';


function App() {

  const router = createBrowserRouter(routesConfig)

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
