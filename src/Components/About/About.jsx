import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img' />
            <img src={play_icon} alt="" className='play-icon' />
        </div>
        <div className="about-right">
            <h3>About University</h3>
            <h2>Nucturing Tommorow's Leaders Today</h2>
            <p>
                Lorem ipsum dolor sit amet, 
                consectetur adipisicing elit. Non, quos.
            </p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Veritatis voluptatum corporis quae, unde necessitatibus 
            temporibus amet impedit.
                 Itaque, perferendis possimus.
            </p> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Dolor magni suscipit fuga, a cupiditate quibusdam alias voluptas!</p>
        </div>
    </div>
  )
}

export default About