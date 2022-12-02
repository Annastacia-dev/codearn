import React from 'react'

const SellerDashboard = ({ user, setUser}) => {
  return (
    <div>SellerDashboard
      <h1>
        {user.name}
      </h1>
    </div>
  )
}

export default SellerDashboard