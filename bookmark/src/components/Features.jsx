import React, { useState } from 'react';
import simple from './images/illustration-features-tab-1.svg'
import speedy from './images/illustration-features-tab-2.svg'
import easy from './images/illustration-features-tab-3.svg'


const Features = () => {
    const [isActive,setIsActive] = useState('Simple-Bookmarking')
    const [style1,setStyle1] = useState({borderBottom: '2px solid rgba(0, 0, 0, 0.3)'})
    const [style2,setStyle2] = useState({borderBottom: '2px solid rgba(0, 0, 0, 0.3)'})
    const [style3,setStyle3] = useState({borderBottom: '2px solid rgba(0, 0, 0, 0.3)'})
  return (
    <div className='features'>
        <h2>Features</h2>
        <p>Our aim is to make it quick and easy for you to access your <br /> favourite websites. 
  Your bookmarks sync between your devices <br /> so you can access them on the go.</p>
        <div>
        <ul className='ul'>
                <li className='li' style={style1} onClick={()=>{setIsActive('Simple-Bookmarking')
            setStyle1({borderBottom: '2px solid orange'})}}>Simple Bookmarking</li>
                <li className='li' style={style2} onClick={()=>{setIsActive('Speedy-Searching')
            setStyle2({borderBottom: '2px solid orange'})}}>Speedy Searching</li>
                <li className='li' style={style3} onClick={()=>{setIsActive('Easy-Sharing')
            setStyle3({borderBottom: '2px solid orange'})}}>Easy Sharing</li>
            </ul>
        </div>
        {isActive === 'Simple-Bookmarking' && 
            (<div className='Simple-Bookmarking'>
            <img src={simple} alt="" />
            <div>
                <h2>Bookmark in one click</h2>
                <p>Organize your bookmarks however you like. Our <br /> simple drag-and-drop interface 
                gives you complete <br /> control over how you manage your favourite sites.</p>
                <button className='moreinfo-btn'>More Info</button>
            </div>
        </div>)}
        {isActive === 'Speedy-Searching' && 
            (<div className='Speedy-Searching'>
            <img src={speedy} alt="" />
            <div>
                <h2>Intelligent search</h2>
                <p>Organize your bookmarks however you like. Our <br /> simple drag-and-drop interface 
                gives you complete <br /> control over how you manage your favourite sites.</p>
                <button className='moreinfo-btn'>More Info</button>
            </div>
        </div>)}
        {isActive === 'Easy-Sharing' && 
            (<div className='Easy-Sharing'>
            <img src={easy} alt="" />
            <div>
                <h2>Share your bookmarks</h2>
                <p>Easily share your bookmarks and collections with <br /> others. Create a shareable 
  link that you can send <br /> at the click of a button.</p>
                <button className='moreinfo-btn'>More Info</button>
            </div>
        </div>)}
    </div>
  )
}

export default Features