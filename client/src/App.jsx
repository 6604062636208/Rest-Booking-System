import React from "react";
import AppRoutes from "@/routes/AppRoutes";
import { Toaster } from "@/components/ui/sonner";

function App() {
  return (
    <>
      <AppRoutes />
      <Toaster richColors position="top-center" />
    </>
  );
}

export default App;
