import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppRoutes from "./app/routes/index.tsx";
import AppWrapper from "./app/components/AppWrapper.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppWrapper>
      <AppRoutes />
    </AppWrapper>
  </StrictMode>
);
