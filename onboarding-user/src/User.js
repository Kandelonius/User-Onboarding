import React from 'react'

function User({ details }) {
  // debugger
  if (!details) {
    return <h3>Working fetching your user&apos;s details...</h3>
  }
  return (
    <div>
      <h2>{details.username}</h2>
      <p>Email: {details.email}</p>
      <p>Password: {details.password}</p>
    </div>
  )
}

export default User