import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

// router setup
import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes.tsx";
import AuthProvider from "./providers/AuthProvider.tsx";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()


createRoot(document.getElementById("root")!).render(
  <StrictMode>
     <QueryClientProvider client={queryClient}>
     <AuthProvider><RouterProvider router={router} /></AuthProvider>
    </QueryClientProvider>
   
  </StrictMode>
);
