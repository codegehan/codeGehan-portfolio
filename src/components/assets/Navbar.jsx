import React from 'react'
import { Home } from '../Home'

export const Navbar = () => {
  return (
    <>
    <div className='navbar'>
        <a href="/home">Home</a>
        <a href="/aboutme">About Me</a>
        <a href="/projects">Projects</a>
        <a href="/contactme">Contact Me</a>
        <a href="#">Download CV</a>
    </div>
    </>
  )
}
