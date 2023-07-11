import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Greeting from './Greeting';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Greeting />} />,
  ),
);

function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}
export default App;
