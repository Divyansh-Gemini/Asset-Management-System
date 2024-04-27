import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import Dashboard from "./components/Dashboard/Dashboard.jsx";
import Login from "./pages/LoginPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/assets",
        element: <h1>Assets</h1>,
      },
      {
        path: "/report",
        element: <h1>Report</h1>,
      },
      {
        path: "/reservations",
        element: <h1>Reservations</h1>,
      },
      {
        path: "/feedback",
        element: <h1>Feedback</h1>,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/contact",
        element: <h1>Contact Us</h1>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
