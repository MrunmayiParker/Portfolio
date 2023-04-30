import React from 'react'
import { useState } from 'react';
import './contact.scss'
function Contact() {
const [message, setmessage] = useState(false);
const handleSubmit = (e) =>{
    e.preventDefault();
    setmessage(true);
}
  return (
    <div className='contact' id='contact'>
        <div className="left">
            <img src="assets/shake.svg" alt="" />
        </div>
        <div className="right">
            <h2>Contact</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Email' />
                <textarea placeholder='Message' name="" id="" cols="30" rows="10"></textarea>
                <button type='submit'>Send</button>
                {message && <span>Thanks, I will reply soon!</span>}
            </form>
        </div>
    </div>
  )
}

export default Contact