import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './Root/Root'
import Home from './Home/Home'
import ErrorPage from './ErrorPage/ErrorPage'
import JobDetails from './JobDetails/JobDetails'
import FeaturedJobs from './FeaturedJobs/FeaturedJobs'

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
        path: '/job/:jobId',
        element: <JobDetails></JobDetails>,
        loader: () => fetch('../jobs.json'),
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
