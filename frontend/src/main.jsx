import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import './index.css';
import Routers from './Routes.jsx'

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
      <RouterProvider router={Routers} />
  {/* <CustomerFeed /> */}
</React.StrictMode>
);
