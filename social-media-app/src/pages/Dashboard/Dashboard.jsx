import React from 'react'
import './Dashboard.css'
import { CiBellOn } from "react-icons/ci";
import { FaRegCircleUser } from "react-icons/fa6";
import Sidebar from '../../components/SideBar/Sidebar';
import DashboardDataCard from '../../components/dashboardcard/DashboardDataCard';
function Dashboard() {
  return (
    <div className='layout'>
        <Sidebar />
        <div className='app-container'>
          <div className="app-header">
            <h1>Dashboard</h1>
            <div className='notification-user'>
                <CiBellOn />
                <FaRegCircleUser />
            </div>
          </div>
          <DashboardDataCard />
        </div>
    </div>
  )
}

export default Dashboard;