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
import JobDetails from './component/jobDetails/JobDetails.jsx'
import AppliedJob from './component/appliedJob/AppliedJob.jsx'
import AllJob from './component/allJob/AllJob.jsx'
import MyJob from './component/myJob/MyJob.jsx'
import UpdateJob from './component/updateJob/UpdateJob.jsx'
import Blog from './component/blogs/Blog.jsx'
import About from './component/about/About.jsx'
import ErrorPage from './component/errorPage/ErrorPage.jsx'
import PrivateRoute from './component/PrivateRoute.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement : <ErrorPage></ErrorPage> ,
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
        element: <PrivateRoute><AddCategory></AddCategory></PrivateRoute>,
      },
      {
        path: "/addJob",
        element: <PrivateRoute><AddJob></AddJob></PrivateRoute>,
      },
      {
        path: "appliedJob",
        element: <PrivateRoute><AppliedJob></AppliedJob></PrivateRoute>,
       //loader : () => fetch(`https://job-server-topaz.vercel.app/apply`),
      },
      {
        path: "allJob",
        element: <AllJob></AllJob>,
       
      },
      {
        path: "myJob",
        element: <PrivateRoute><MyJob></MyJob></PrivateRoute>,
       
      },
      {
        path: "blog",
        element: <Blog></Blog>,
       
      },
      {
        path: "about",
        element: <About></About>,
       
      },
      {
        path: "jobDetails/:id",
        element:<PrivateRoute><JobDetails></JobDetails></PrivateRoute> ,
        loader : ({params}) => fetch(`https://job-server-topaz.vercel.app/job/${params.id}`),
      },
      {
        path: "updateJob/:id",
        element:<PrivateRoute><UpdateJob></UpdateJob> </PrivateRoute>,
        loader : ({params}) => fetch(`https://job-server-topaz.vercel.app/job/${params.id}`),
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
