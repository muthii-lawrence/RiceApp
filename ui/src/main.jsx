import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootPage from "./pages/RootPage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import Profile from "./Components/Profile.jsx";
import Order from "./pages/Order.jsx";
import Cart from "./pages/Cart.jsx";
import Contact from "./pages/Contact.jsx";
import Login from "./pages/Login.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    errorElement: <ErrorPage />,

    children: [
      {
        path: "",
        element: <LandingPage />,
      },

      {
        path: "order/",
        element: <Order />,
      },
      {
        path: "cart/",
        element: <Cart />,
      },
      {
        path: "contact/",
        element: <Contact />,
      },
    ],
  },
  {
    path: "register/",
    element: <Profile />,
  },
  {
    path: "login/",
    element: <Login />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
