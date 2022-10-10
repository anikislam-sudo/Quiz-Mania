import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Topics from './Components/Topics/Topics';
import Chart from './Components/Chart/Chart';
import Blog from './Components/Blog/Blog';
import About from './Components/About/About';

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Main></Main>,
      children:[
        {
          path:'/',
          loader:()=>fetch(''),
          element:<Topics></Topics>
        },
        {
          path:'/chart',
          element:<Chart></Chart>
        },
        {
          path:'/blog',
          element:<Blog></Blog>
        },
        {
          path:'/about',
          element:<About></About>,
        }
      ]
    }

  ])
  return (
    <div className="App">
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
