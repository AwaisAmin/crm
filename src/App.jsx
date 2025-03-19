import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./contexts/AuthContext";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import CustomerRequestsForm from "./pages/CustomerRequestsForm";
import ViewRequests from "./pages/ViewRequests";
import DashboardLayout from "./layouts/DashboardLayout";
import NotImplemented from "./pages/NotImplemented";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <DashboardLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Dashboard />} />
            <Route path="new-request" element={<CustomerRequestsForm />} />
            <Route path="view-requests" element={<ViewRequests />} />
            {/* Add explicit routes for sidebar menu items */}
            <Route path="add-client" element={<NotImplemented />} />
            <Route path="manage-clients" element={<NotImplemented />} />
            <Route path="monthly-reports" element={<NotImplemented />} />
            <Route path="annual-reports" element={<NotImplemented />} />
            <Route path="documents" element={<NotImplemented />} />
            <Route path="settings" element={<NotImplemented />} />

            {/* Catch all other dashboard routes */}
            <Route path="*" element={<NotImplemented />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
