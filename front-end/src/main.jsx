import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Error404 from "./Pages/Error404.jsx";
import Home from "./Pages/Home.jsx";
import Login from "./Pages/Login.jsx";
import PageCoffee1 from "./Pages/PageCoffee1.jsx";
import PageCoffee2 from "./Pages/PageCoffee2.jsx";
import PageCoffee3 from "./Pages/PageCoffee3.jsx";
import PageCoffee4 from "./Pages/PageCoffee4.jsx";
import Register from "./Pages/Register.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error404 />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/detail-coffee1",
    element: <PageCoffee1 />,
  },
  {
    path: "/detail-coffee2",
    element: <PageCoffee2 />,
  },
  {
    path: "/detail-coffee3",
    element: <PageCoffee3 />,
  },
  {
    path: "/detail-coffee4",
    element: <PageCoffee4 />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
