import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import Router from './Router/Router'
import AuthProviders from './Providers/AuthProviders'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={Router}></RouterProvider>
    </AuthProviders>
  </React.StrictMode>,
)
