import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ParticleBackground from './assets/ParticleBackground'
import StarryParticlesBackground from './assets/StarryParticlesBackground'
export const Index = () => {
const navigate = useNavigate();
const handleClick = () => { 
    navigate('/home');
}
  return (
    <div className="index">
        {/* <StarryParticlesBackground /> */}
        <ParticleBackground />
        <button className='button-ent' onClick={handleClick}>
            Enter Gehan's Portfolio
        </button>
    </div>
  )
}