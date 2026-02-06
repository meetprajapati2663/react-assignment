import React from 'react'
import Aheader from '../Acoman/Aheader'
import Anavs from '../Acoman/Anavs'

function Dashboard() {
  return (
    <div>
      <Aheader />
      <Anavs title="Admin Dashboard" desc="dashboard" />
      <h1 className='text-center'>Hello this Dashborad Page</h1>
    </div>
  )
}

export default Dashboard
