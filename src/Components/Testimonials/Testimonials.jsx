import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import img12 from '../../assets/img12.avif'

const Testimonials = () => {

  const slider =useRef();
  let tx =0;

  const sildeForward = () =>{
    if (tx > -50) {
      tx -= 25
    }
    slider.current.style.transform = `translateX(${tx}%)`
  }
  const sildeBackward = () =>{
    if (tx < 0) {
      tx += 25
    }
    slider.current.style.transform = `translateX(${tx}%)`

  }

  return (
    <div className='testimonials'>
        <img src={next_icon} alt="" className='next-btn' onClick={sildeForward}/>
        <img src={back_icon} alt="" className='back-btn'onClick={sildeBackward}/>
        <div className='slider'>
          <ul ref={slider}>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user_1} alt="" />
                  <div>
                    <h3>Asmina</h3>
                    <span>Nepal,UK</span>
                  </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque minima facilis esse quasi. Tenetur quam assumenda cupiditate odio labore delectus
                   minima, esse commodi quod temporibus?</p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user_2} alt="" />
                  <div>
                    <h3>Dip Kishor</h3>
                    <span>Nepal,Austrilia</span>
                  </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque minima facilis esse quasi. Tenetur quam assumenda cupiditate odio labore delectus
                   minima, esse commodi quod temporibus?</p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user_3} alt="" />
                  <div>
                    <h3>Anushreya</h3>
                    <span>Nepal,UK</span>
                  </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque minima facilis esse quasi. Tenetur quam assumenda cupiditate odio labore delectus
                   minima, esse commodi quod temporibus?</p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={img12} alt="" />
                  <div>
                    <h3>Asmita</h3>
                    <span>Nepal,UK</span>
                  </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque minima facilis esse quasi. Tenetur quam assumenda cupiditate odio labore delectus
                   minima, esse commodi quod temporibus?</p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user_1} alt="" />
                  <div>
                    <h3>Surakshya</h3>
                    <span>Nepal,UK</span>
                  </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque minima facilis esse quasi. Tenetur quam assumenda cupiditate odio labore delectus
                   minima, esse commodi quod temporibus?</p>
              </div>
            </li>
          </ul>

        </div>
    </div>
  )
}

export default Testimonials