import React from 'react'
import { Navbar } from './assets/Navbar'

const AboutMe = () => {
  return (
    <div className='aboutme'>
        <Navbar /> 
        <div className='img-bg-aboutme'>
            <img src="./img/gehan-1.png" alt="gehan" />
        </div>
        <div className='card'>
            <div className='content'>
                <p>
                I'm a fullstack/software developer with experience building and deploying web applications. 
                Although early in my career, I'm a motivated and hardworking developer committed 
                to successfully completing projects.
                <br />
                <br />
                I enjoy taking on new challenges and continuously expanding my skillset. 
                I'm eager to join a development team where I can contribute my skills 
                while rapidly learning from more experienced developers.
                <br />
                <br />
                Beyond coding skills, I offer strong communication abilities and a team-focused attitude. 
                I thrive in collaborative environments where sharing ideas and working towards common goals 
                brings out everyone's best work.
                <br />
                <br />
                In my personal time, I'm devoted to healthy living through diet and exercise. 
                I also love traveling and exploring new cultures whenever possible. 
                Experiencing how others live opens my mind as both a developer and human being.
                </p>
            </div>
        </div>
    </div>
  )
}

export default AboutMe