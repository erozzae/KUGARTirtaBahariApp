import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ArtikelMgm from "./pages/ArtikelMgm";
import Artikels from "./pages/Artikels";
import ArtikelsAll from "./pages/ArtikelsAll";
import Home from "./pages/Home";
import UsersMgm from "./pages/UsersMgm";
import reportWebVitals from "./reportWebVitals";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/users",
    element: <UsersMgm />,
  },
  {
    path: "/artikels/manajemen",
    element: <ArtikelMgm />,
  },
  {
    path: "/artikelsAll",
    element: <ArtikelsAll />,
  },
  {
    path: "/artikel/:id",
    element: <Artikels />,
    // children: [
    //   {
    //     path: "/artikel/manajemen",
    //     element: <ArtikelMgm />,
    //   },
    // ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
