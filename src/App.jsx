import React, { useState } from 'react';
import './App.css';
import Header from './components/Header'
import Features from './components/Features'
import tablet from './components/images/illustration-hero.svg'
import Extensions from './components/extensions'
import Questions from './components/Questions'
import Footer from './components/Footer'
import logo from './components/images/logo-bookmark.svg'
import { AiFillFacebook, AiFillTwitterSquare } from 'react-icons/ai';
function App() {
  const examples = [
    {
      id: 1,
      title: 'What is Bookmark?',
      info:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus  blandit ipsum quis quam ornare mattis.',
    },
    {
      id: 2,
      title: 'How can I request a new browser?',
      info:
        'Vivamus luctus eros aliquet convallis ultricies. Mauris  augue massa, ultricies non ligula. Suspendisse imperdie  Vivamus luctus eros aliquet convallis ultricies.  Mauris augue massa, ultricies non ligula.  Suspendisse imperdiet.',
    },
    {
      id: 3,
      title: 'Is there a mobile app?',
      info:
        'Sed consectetur quam id neque fermentum accumsan.  Praesent luctus vestibulum dolor, ut condimentum  urna vulputate eget. Cras in ligula quis est pharetra  mattis sit amet pharetra purus.  Sed sollicitudin ex et ultricies bibendum.',
    },
    {
      id: 4,
      title: 'What about other Chromium browsers?',
      info:
        'Integer condimentum ipsum id imperdiet finibus.  Vivamus in placerat mi, at euismod dui. Aliquam  vitae neque eget nisl gravida pellentesque non ut velit.',
    },
]
  return (
    <div className="container">
      <Header />
      <div className='about'>
        <div className="info">
          <h1>A Simple Bookmark <br /> Manager</h1>
          <p>A clean and simple interface to organize your favourite <br/> websites. Open a new 
          browser tab and see your sites load <br/> 
          instantly. Try it for free.</p>
          <div className="btns2">
            <button className='getit-btn getchrome'>Get it on Chrome</button>
            <button className='getit-btn getfirefox'>Get it on Firefox</button>
          </div>
        </div>
        <div>
        <img src={tablet} alt="" className="image"/>
        <div className="blue"></div>
        </div>
      </div>
      <Features />
      <Extensions />
      <section className='questions'>
      <h2>Frequently Asked Questions</h2>
        <p>Here are some of our FAQs. If you have any other questions <br /> you’d like 
            answered please feel free to email us.</p>
        {examples.map((example) => {
          return (
            <Questions key={example.id} {...example}></Questions>
          )
        })}
        <button className='moreinfo-btn2'>More Info</button>
      </section>
      <Footer />
      <footer>
        <div className='end'>
          <img src={logo} className='logo2'/>
          <ul>
            <li className='li1'>FEATURES</li>
            <li className='li1'>PRICING</li>
            <li className='li1'>CONTACT</li>
          </ul>
        </div>
        <div className='social-media'>
          <AiFillFacebook className='social facebook'/>
          <AiFillTwitterSquare className='social twitter'/>
        </div>
      </footer>
    </div>
  );
}

export default App;
// rafce