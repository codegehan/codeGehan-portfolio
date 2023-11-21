import React from 'react'
import './css/style.css'
import { Navbar } from './assets/Navbar';
import { useState, useEffect } from 'react';

export const Home = () => {
  console.log('Home Rendered');
  const [displayText, setDisplayText] = useState("Hello, I'm Gehan");
  const textToType = "Hello, I'm Gehan";

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      setDisplayText(textToType.slice(0, index));
      index++;
      if (index > textToType.length) {
        setTimeout(() => {
          setDisplayText("");
          index = 0;
        }, 5000);
      }
    }, 100);
    return () => clearInterval(typingInterval);
  }, [textToType]);
  return (
    <div className='home'>
        <Navbar />
        <div className='body'>
            <div className='img-bg'>
                <img src="./img/gehan.jpg" alt="" />
            </div>
            <div className='welcome-txt'>
                <h1>{displayText}</h1>
                <h3>Fullstack Developer</h3>
            </div>
        </div>
    </div>
  )
}
