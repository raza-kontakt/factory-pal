import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import DashboardLayout from "../layouts/Dashboard";

const Home = lazy(() => import("../pages/Home"));
const ShiftDetails = lazy(() => import("../pages/ShiftDetails"));
const NotFound = lazy(() => import("../pages/NotFound"));

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/shift/:id" element={<ShiftDetails />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
