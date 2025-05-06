import React from 'react';
import styles from './Header3.module.css'; // CSS file import

const Header3 = () => {

  return (
    <>
      <nav className={styles.navbar}>
      
        <button className={styles.hamburgerButton}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className={styles.hamburgerIcon}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <div><h5>BROWSE CATEGORIES</h5></div>
        </button>
          <div className={styles.dropdown}>
            <button className={styles.dropdownButton}>ELECTRONICS ▾</button>
            <ul className={styles.dropdownMenu}>
              <li className={styles.dropdownItem}>SPORTS</li>
              <li className={styles.dropdownItem}>CASUAL</li>
              <li className={styles.dropdownItem}>FORMAL</li>
            </ul>
          </div>

          <div className={styles.dropdown}>
            <button className={styles.dropdownButton}>MEN CLOTHING ▾</button>
            <ul className={styles.dropdownMenu}>
              <li className={styles.dropdownItem}>SPORTS</li>
              <li className={styles.dropdownItem}>CASUAL</li>
              <li className={styles.dropdownItem}>FORMAL</li>
            </ul>
          </div>

          <div className={styles.dropdown}>
            <button className={styles.dropdownButton}>WOMEN CLOTHING ▾</button>
            <ul className={styles.dropdownMenu}>
              <li className={styles.dropdownItem}>SPORTS</li>
              <li className={styles.dropdownItem}>CASUAL</li>
              <li className={styles.dropdownItem}>FORMAL</li>
            </ul>
          </div>

          <div className={styles.dropdown}>
            <button className={styles.dropdownButton}>JEWELRY ▾</button>
            <ul className={styles.dropdownMenu}>
              <li className={styles.dropdownItem}>CASUAL</li>
              <li className={styles.dropdownItem}>FORMAL</li>
            </ul>
          </div>

          <div className={styles.clearanceSale}>
            <h6>CLEARANCE SALE 30%</h6>
          </div>
        
      </nav>
    </>
  );
};

export default Header3;
