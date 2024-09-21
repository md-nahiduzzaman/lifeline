import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

// router setup
import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
