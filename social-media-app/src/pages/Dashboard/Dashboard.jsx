// Dashboard.jsx - Simplified (no more layout duplication!)
import React from 'react'
import './Dashboard.css'
import DashboardDataCard from '../../components/dashboardcard/DashboardDataCard';

function Dashboard() {
  return (
    <>
      {/* Only the dashboard-specific content */}
      <DashboardDataCard />
      
      {/* You can add more dashboard-specific content here */}
      {/* Charts, graphs, recent activity, etc. */}
    </>
  )
}

export default Dashboard;