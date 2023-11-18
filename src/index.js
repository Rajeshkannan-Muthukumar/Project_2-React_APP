import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import Lunchpage from './pages/Lunchpage';
import Breakfast from './pages/Breakfast';
import Breakfast1 from './pages/breakfast1';
import Breakfast2 from './pages/Breakfast2';
import Breakfast3 from './pages/Breakfast3';
import { ThemeProvider } from './hook/hookcooking';
const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: "/",
    // element: <Home/>,
    element: <Home/>,

    errorElement: <h1 class="card-heading"> If your looking for Cart Go to Products Page and Access it.<a href="product">  - Products page</a> </h1>,
  }
  ,
  {
    path:"/product",
    element:<Product/>
  },
  {
    path:"/lunchpage",
    element:<Lunchpage/>
  },
  {
    path:"/homepage",
    element:<Home/>
  }
  ,{
    path:"/breakfast",
    element:<Breakfast/>
  } ,{
    path:"/breakfast1",
    element:<Breakfast1/>
  },{
    path:"breakfast2",
    element:<Breakfast2/>
  },{
    path:"breakfast3",
    element:<Breakfast3/>
  }
])

root.render(
<ThemeProvider>
 <RouterProvider router={router}/>
</ThemeProvider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
