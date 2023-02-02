import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
  
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Brovitech</h2>
            <Link to='/sign-up'>We build beautiful web and mobile apps using react framework</Link>
            <Link to='/'>@2021 Brovitech. All rights reserved</Link>
          
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Email: bharat.chavan@brovitech.com</Link>
            <Link to='/'>Phone: +91 9975452800</Link>
            <Link to='/'>Address: Pune, Maharashtra, India</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>  Quick Links</h2>
            <Link to='/'>About us</Link>
            <Link to='/'>Privacy policy</Link>
          </div>
      
        </div>
      </div>
   
    </div>
  );
}

export default Footer;
