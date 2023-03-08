import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import logop from './logop';
import reportWebVitals from './reportWebVitals';
import Main from './Main';
import Signup from './Signup';
import sign from './sign'

import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Mod from './Mod';
import Del from './Del';
import Add from './Add';

<meta name="viewport" content="width=device-widths, initial-scale=1.0">
</meta>
const router = createBrowserRouter([
  {
    path: "/",
    element: <Signup/>
  }
  ,
  {
    path: "/Main",
    element: <Main/>

  },
  {
    path: "/Del",
    element: <Del/>

  },
  {
    path: "/Add",
    element: <Add/>

  },
  {
    path: "/Mod",
    element: <Mod/>

  },
  
  
  
  


]);
const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <RouterProvider router={router}/>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
