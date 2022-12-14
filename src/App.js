import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Topics from './Components/Topics/Topics';
import Chart from './Components/Chart/Chart';
import Blog from './Components/Blog/Blog';

import TopicDetails from './Components/TopicDetails/TopicDetails';
import 'react-toastify/dist/ReactToastify.css';
const router = createBrowserRouter([
  {
    path:"/",
    element:<Main></Main>,
    children:[
      {
        path:'/',
        loader:()=>fetch('https://openapi.programming-hero.com/api/quiz'),
        element:<Topics></Topics>
      },
      {
        path:'/topic/:topicId',
        loader:async({params})=>{
         return  fetch(`https://openapi.programming-hero.com/api/quiz/${params.topicId}`)
      },
      element:<TopicDetails></TopicDetails>
      },
      {
        path:'/chart',
        loader:()=>fetch('https://openapi.programming-hero.com/api/quiz'),
        element:<Chart></Chart>
      },
      {
        path:'/blog',
        element:<Blog></Blog>
      },
     

    ]
  },
{path:'*',
element:<div>404:Page not found</div>}
])

function App() {
  
  return (
    <div className="App">
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
