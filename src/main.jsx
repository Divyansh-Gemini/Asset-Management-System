import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import Dashboard from "./components/Dashboard/Dashboard.jsx";
import Login from "./pages/LoginPage.jsx";
import Reservation from "./pages/Reservation.jsx";
import FeedbackPage from "./pages/FeedbackPage.jsx";
import AssetsPage from "./pages/AssetsPage.jsx";

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
        element: <AssetsPage />,
      },
      {
        path: "/report",
        element: <h1>Report</h1>,
      },
      {
        path: "/reservations",
        element: <Reservation />,
      },
      {
        path: "/feedback",
        element: <FeedbackPage />,
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
