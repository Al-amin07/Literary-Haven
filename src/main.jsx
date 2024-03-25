import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root.jsx';
import ListedBook from './Components/ListedBook.jsx';
import Home from './Components/Home.jsx';
import PageReaded from './Components/PageReaded.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children: [
      {
        path: '/',
        loader: () => fetch('./fake.json'),
        element: <Home></Home>
      },
      {
        path: '/list',
        element: <ListedBook></ListedBook>
      },
      {
        path: '/read',
        element: <PageReaded></PageReaded>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
