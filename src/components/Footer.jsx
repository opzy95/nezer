import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>About Nezer Rot HomePro</h4>
          <p>Everyday essentials for your kitchen, home, and table, from practical appliances to useful gadgets and food staples.</p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/kitchen">Kitchen</Link></li>
            <li><Link to="/appliances">Appliances</Link></li>
            <li><Link to="/shop">Gadgets</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Us</h4>
          <p><a href="mailto:info@araire-ventures.com">info@araire-ventures.com</a></p>
          <p><a href="tel:+2348071512437">+234 807 151 2437</a></p>
          <p><a href="https://wa.me/2348071512437" target="_blank" rel="noreferrer">Chat on WhatsApp</a></p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 Nezer Rot HomePro. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;