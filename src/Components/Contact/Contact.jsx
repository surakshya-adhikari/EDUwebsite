import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'


const Contact = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "133ad568-478e-4e62-8c34-1b8a1317acf2");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
   
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className='contact'>
        <div className="call">
            <h3>Send Us Message <img src={msg_icon} alt="" /></h3>
            <p>Feel free to contact us Lorem ipsum dolor sit amet.</p>
            <ul>
                <li> <img src={mail_icon} alt="" />sur@gmail.com</li>
                <li><img src={phone_icon} alt="" />9700000000001</li>
                <li><img src={location_icon}alt="" /> KTM</li>
            </ul>
        </div>
        <div className="call">
            <form onSubmit={onSubmit} >
                <label> Name</label>
                <input type="text" name='name' placeholder='Enter your Name' required/>
                <label> Phone Number</label>
                <input type="tel" name='phone' placeholder='Enter your Phone Number' required/>
                <label> Write your message here</label>
                <textarea name="message" rows="6" placeholder='Text here' required></textarea>
               <button type='submit' className='btn dark-btn' > <img src={white_arrow} alt="" />Submit</button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact