import React, { useContext } from 'react'
import { NavbarContext, useAppContext } from './Navbar'

const UserContainer = () => {
  const { user, logout } = useAppContext(NavbarContext)
  return (
    <div className='user-container'>
      {user ? (
        <>
          <p>Hello There, {user?.name?.toUpperCase()}</p>
          <button className='btn' type='button' onClick={logout}>
            logout
          </button>
        </>
      ) : (
        <p>Please Login</p>
      )}
    </div>
  )
}

export default UserContainer
