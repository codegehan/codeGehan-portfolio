import React from 'react'
import { Navbar } from './assets/Navbar'

const Projects = () => {
  return (
    <div className='projects'>
        <Navbar />
        <div className='project-card'>
            <div className='project-items'>
                <div className='project-list'>
                    <div className='slides'>
                        <img src="./img/project1/1.png" alt="1" />
                    </div>
                    <div className='context'>
                        <h3>Attendance System using QR Code</h3>
                        <a href="https://www.facebook.com/codeGehan/posts/pfbid081JEiHSEda4GLYkViKVRfGh6CymTYXRCbrE7y4mK8dsfmZ3VtoENkzQ1hqXTvUPcl">View full details</a>
                    </div>
                </div>
                <div className='project-list'>
                    <div className='slides'>
                        <img src="./img/project2/1.jpg" alt="1" />
                    </div>
                    <div className='context'>
                        <h3>Class Monitoring and Management System</h3>
                        <a href="https://www.facebook.com/codeGehan/posts/pfbid0qkbWJsJbMb54Q59vs1d3Hriz8XNMHPFp7ZwFjHTVgzoGCYHA8NoGKGnm9n2jPcGol">View full details</a>
                    </div>
                </div>
                <div className='project-list'>
                    <div className='slides'>
                        <img src="./img/project3/1.png" alt="1" />
                    </div>
                    <div className='context'>
                        <h3>School Student's Activity and Attendance Monitoring System - JRMSU Main</h3>
                        <a href="#">View full details</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects