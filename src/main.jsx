import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import FullViewContainer from "./components/full-view-container";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FullViewContainer>
      <RouterProvider router={router} />
    </FullViewContainer>
  </React.StrictMode>
);
