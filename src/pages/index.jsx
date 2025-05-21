import React, { lazy } from "react";
import { useRoutes } from "react-router-dom";
import Profil from "./profil/Profil";
import Data from "./data/Data";
import Register from "./register/Register";

const Layout = lazy(() => import("./layout/Layout"));
const Home = lazy(() => import("./home/Home"));
const About = lazy(() => import("./about/About"));
const Login = lazy(() => import("./login/Login"));

const MainRouters = () => {
  return useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/register", element: <Register /> },
        { path: "/login", element: <Login /> },
        { path: "/profil", element: <Profil /> },
        { path: "/data", element: <Data /> },
      ],
    },
  ]);
};

export default MainRouters;
