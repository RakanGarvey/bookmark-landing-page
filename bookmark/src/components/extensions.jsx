import React from 'react'
import chrome from './images/logo-chrome.svg'
import firefox from './images/logo-firefox.svg'
import opera from './images/logo-opera.svg'

const extensions = () => {
  return (
    <div className='extensions'>
        <h2>Download the extention</h2>
        <p>We’ve got more browsers in the pipeline. Please do let us know if <br /> you’ve 
  got a favourite you’d like us to prioritize.</p>
        <div className="browsers">
            <div className='browser chrome'>
                <div>
                    <img src={chrome} alt="" />
                    <h2>Add to Chrome</h2>
                    <p className='version'>Minimum version 62</p>
                </div>
                <div>
                    <button className='add-btn'>Add & Install Extension</button>
                </div>
            </div>
            <div className='browser firefox'>
                <div>
                    <img src={firefox} alt="" />
                    <h2>Add to Firefox</h2>
                    <p className='version'>Minimum version 55</p>
                </div>
                <div>
                    <button className='add-btn'>Add & Install Extension</button>
                </div>
            </div>
            <div className='browser opera'>
                <div>
                    <img src={opera} alt="" />
                    <h2>Add to Opera</h2>
                    <p className='version'>Minimum version 46</p>
                </div>
                <div>
                    <button className='add-btn'>Add & Install Extension</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default extensions