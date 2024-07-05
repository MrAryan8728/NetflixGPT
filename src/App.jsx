import './App.css'
import Body from './Components/Body'
import Browse from './Components/Browse'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const routes = createBrowserRouter([
  {
    path:"/",
    element:<Body/>
  },
  {
    path:"/browse",
    element:<Browse/>
  }
]
)

function App() {

  return (
    <>
    <RouterProvider router={routes}/>
    </>
  )
}

export default App
