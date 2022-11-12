import './App.css';

import Landing from './pages/Landing/Landing';
import Contact from './pages/Contact/Contact';
import Branding from './pages/Branding/Branding';

// Routing Module:::Version [@_6.4_] of react-router
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



const router = createBrowserRouter([
  {
    path: "/",
    element: (<Landing />),
  },
  {
    path: "contact",
    element: <Contact/>,
  },
  {
    path: "branding",
    element: <Branding/>,
  },
]);


function App() {

  return (
    <RouterProvider router={router} />
  );
}


export default App;
