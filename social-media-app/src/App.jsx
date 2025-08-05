import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Scheduler from "./pages/scheduler/scheduler";
import Login from "./pages/Login/Login";

function App() {
  const routes = [
    { path: "/", element: <Dashboard />},
    {path: "/scheduler", element: <Scheduler />},
    { path: "/login", element: <Login /> },
  ];

  return (
    <Router>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
