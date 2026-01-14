import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import "./index.css";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SignUp from './components/sign.jsx';
import Login from './components/login.jsx';
import Home from './components/home.jsx';
import Movie from './components/Movie.jsx';

// Create router
const router = createBrowserRouter(
  [
    {
      path: "/", // root
      element: <App />,
      children: [
        { index: true, element: <Home /> }, // default page
        { path: "signup", element: <SignUp /> },
        { path: "login", element: <Login /> },
        { path: "movie", element: <Movie /> },
      ],
    },
  ],

);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
