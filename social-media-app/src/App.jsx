// App.jsx - Refactored with outlets
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Dashboard from "./pages/Dashboard/Dashboard";
import Scheduler from "./pages/scheduler/scheduler";
import Login from "./pages/Login/Login";

function App() {
  return (
    <Router>
      <Routes>
        {/* Routes that need the layout (sidebar + header) */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="scheduler" element={<Scheduler />} />
        </Route>
        
        {/* Routes that don't need the layout */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;