// Dashboard.jsx - Simplified (no more layout duplication!)
import React from 'react'
import './Dashboard.css'
import DashboardDataCard from '../../components/dashboardcard/DashboardDataCard';
import PostNow from '../../components/postnow/PostNow';

function Dashboard() {
  return (
    <>
      {/* Post Now Component */}
      <PostNow />
      {/* Only the dashboard-specific content */}
      <DashboardDataCard />
      
      {/* You can add more dashboard-specific content here */}
      {/* Charts, graphs, recent activity, etc. */}
    </>
  )
}

export default Dashboard;