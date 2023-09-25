import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './Root/Root'
import Home from './Home/Home'
import ErrorPage from './ErrorPage/ErrorPage'
import JobDetails from './JobDetails/JobDetails'
import FeaturedJobs from './FeaturedJobs/FeaturedJobs'
import AppliedJobs from './AppliedJobs/AppliedJobs'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/jobs',
        element: <FeaturedJobs></FeaturedJobs>
      },
      {
        path: '/applied',
        element: <AppliedJobs></AppliedJobs>,
        loader: () => fetch('jobs.json') // only load the data you need. do not load all the data
      },
      {
        path: '/job/:jobId',
        element: <JobDetails></JobDetails>,
        loader: () => fetch('../jobs.json') // do not load all data. load only what is needed
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
