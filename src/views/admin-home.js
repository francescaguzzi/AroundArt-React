import React from 'react'

import { Helmet } from 'react-helmet'

import './admin-home.css'

const AdminHome = (props) => {
  return (
    <div className="admin-home-container">
      <Helmet>
        <title>Admin-Home - exported project</title>
        <meta property="og:title" content="Admin-Home - exported project" />
      </Helmet>
    </div>
  )
}

export default AdminHome
