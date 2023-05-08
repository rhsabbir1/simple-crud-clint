import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Card from './component/Card.jsx'
import UpdateUser from './component/UpdateUser.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
  },
  {
    path: '/card',
    element: <Card></Card>,
    loader: () => fetch('http://localhost:5000/users')
  }, 
  {
    path:'/user/:id',
    element:<UpdateUser></UpdateUser>,
    loader: ({params})=>fetch(`http://localhost:5000/users/${params.id}`)
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
