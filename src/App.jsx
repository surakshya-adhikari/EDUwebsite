import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Collegephoto from './Components/Collegephoto/Collegephoto'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'


const App = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <div className="container">
          <Title subTitle='Our Program' title='What We Offer'/>
            <Programs/> 
            <About/> 
            <Title subTitle='Gallery' title='college photo'/>
            <Collegephoto/>
            <Title subTitle='Testimonials' title='What students says'/>
            <Testimonials/>
            <Title subTitle='Contact Us' title='Get in touch'/>
            <Contact/>
            
        </div>
        
    </div>
  )
}

export default App