import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import Dashboard from "./components/Dashboard/Dashboard.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import ReservationPage from "./pages/ReservationPage.jsx";
import FeedbackPage from "./pages/FeedbackPage.jsx";
import AssetsPage from "./pages/AssetsPage.jsx";
import ReportPage from "./pages/ReportPage.jsx";
import SignupPage from "./pages/SignupPage.jsx";
import ContactUsCard from "./components/ContactUsCard.jsx";
import AddAssetPage from "./pages/AddAssetPage.jsx";
import EditAssetPage from "./pages/EditAssetPage.jsx";

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
        element: <ReportPage />,
      },
      {
        path: "/reservations",
        element: <ReservationPage />,
      },
      {
        path: "/feedback",
        element: <FeedbackPage />,
      },
      {
        path: "/contact",
        element: <ContactUsCard />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/signup",
        element: <SignupPage />,
      },
      {
        path: "/add-asset",
        element: <AddAssetPage />,
      },
      {
        path: "/update-asset",
        element: <EditAssetPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
