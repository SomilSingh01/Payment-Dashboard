import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import SideBar from "./component/SideBar";
import DashboardCards from "./component/DashboardCards";
import Login from "./component/Login";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <div className="flex h-screen">
                <SideBar />
                <div className="flex-1 bg-white overflow-y-auto">
                  <DashboardCards />
                </div>
              </div>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/login"
          element={<Login onLogin={() => setIsAuthenticated(true)} />}
        />
      </Routes>
    </Router>
  );
}
