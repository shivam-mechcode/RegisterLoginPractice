import React from 'react'
import './styles.css'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
  return (
      <div className='wrapper'>
      <div className='container'>
          <button className='button' onClick={e=> navigate('/register')}>Register</button>
          <button className='button' onClick={e=> navigate('/login')}>Login</button>
      </div>
      </div>
  )
}

export default Home