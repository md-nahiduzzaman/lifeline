import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

// router provider
import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes.tsx";

// auth provider
import AuthProvider from "./providers/AuthProvider.tsx";

// hot toast
import { Toaster } from "react-hot-toast";

// tanstack query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <RouterProvider router={router} />
          <Toaster />
        </AuthProvider>
      </QueryClientProvider>
    </AuthProvider>
  </StrictMode>
);
