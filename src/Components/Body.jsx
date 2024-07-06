import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Login from '../Components/Login'
import Browse from "./Browse"

const Body = () => {
  
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Login />
    },
    {
      path: "/browse",
      element: <Browse />
    }
  ])

  return (
    <div className=''>
      <RouterProvider router={routes} />
    </div>
  )
}

export default Body