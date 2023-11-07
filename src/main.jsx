// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import Root from './component/Root.jsx'
import Registration from './component/login/Registration.jsx'
import AuthProvider from './firebase/AuthProvider.jsx'

import Home from './component/home/Home.jsx'
import Login from './component/login/Login.jsx'
import AddCategory from './component/addCategory/AddCategory.jsx'
import AddJob from './component/addJob/AddJob.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children : [
      {
        path: "/",
        element: <Home></Home>,
      },
    
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },

      {
        path: "/addCategory",
        element: <AddCategory></AddCategory>,
      },
      {
        path: "/addJob",
        element: <AddJob></AddJob>,
      },

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>

  </React.StrictMode>,
)
