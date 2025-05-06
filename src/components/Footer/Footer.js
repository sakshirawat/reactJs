import React from 'react';
import styles from './Footer.module.css'; 
import logo from '../../images/logo.jpeg';


const Footer = () => {
  return (
    
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
 
        <div className={styles.footerColumn}>
          <img src={logo} alt="Logo" className={styles.logo} />
          <p className={styles.logoText}>SOROTO</p>
        </div>

    
        <div className={styles.footerColumn}>
          <h4>Call Us</h4>
          <ul>
          <p>+1 234 567 890</p>
          <p>info@sorto.com</p>
          <p>Visit US</p>
          </ul>
         
        </div>

        <div className={styles.footerColumn}>
          <h4>Useful Links</h4>
          <ul>
            <li><a href="/terms">Terms & Conditions</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>

        <div className={styles.footerColumn}>
          <h4>My Account</h4>
          <ul>
            <li><a href="/profile">Profile</a></li>
            <li><a href="/orders">My Orders</a></li>
            <li><a href="/settings">Settings</a></li>
            <li><a href="/logout">Logout</a></li>
          </ul>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; 2025 Your Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
