import React from "react";
import "./Scheduler.css";
import { CiBellOn } from "react-icons/ci";
import { FaRegCircleUser } from "react-icons/fa6";
import Sidebar from "../../components/SideBar/Sidebar";

function Scheduler() {
  return (
    <div className="layout">
      <Sidebar />
      <div className="app-container">
        <div className="app-header">
          <h1>Scheduler</h1>
          <div className="notification-user">
            <CiBellOn />
            <FaRegCircleUser />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Scheduler;
