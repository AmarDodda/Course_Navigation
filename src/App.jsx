
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import MainNav from './wrappers/MainNav'
import All from './components/All'
import FullStackWebDevelopment from './components/FullStackWebDevelopment'
import DataScience from './components/DataScience'
import CyberSecurity from './components/CyberSecurity'
import Career from './components/Career'



  const router= createBrowserRouter([
    {
      path:"/",
      element:<MainNav />,
      children:[
        {
          index:true,
          element: <All />
        },
        {
          path: "full_stack_web_development",
          element:<FullStackWebDevelopment /> 
        },
        {
          path: "data_science",
          element: <DataScience />
        },
        {
          path: "cyber_security",
          element: <CyberSecurity />
        },
        {
          path:"career",
          element:<Career />
        }
      ]
    }
  ])
  

 
   const App =() =>{
    return <RouterProvider router={router} />

   }
  


export default App
