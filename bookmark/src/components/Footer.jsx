import React, { useState } from 'react';
import { AiFillWarning } from 'react-icons/ai';

const Footer = () => {
  const [valueInp,setValueInp] = useState('')
  const [error,setError] = useState([])
  const errMsg = ()=> {
    if(valueInp === ''){
      setError([<AiFillWarning className='error'/>])
    }
  }
  return (
    <div className='footer'>
      <h4>35,000+ already joined</h4>
      <h2 className='footer-title'>Stay up-to-date with what <br /> we’re doing</h2>
      <label>
        <input type={'email'} placeholder='example@gmail.com' className='input' value={valueInp} onChange={(e)=>{setValueInp(e.target.value)
        if(valueInp !== ''){setError([])}}} required/>
        <button className='contact-btn' onClick={errMsg}>Contact Us</button>
        {error}
      </label>
    </div>
  )
}

export default Footer