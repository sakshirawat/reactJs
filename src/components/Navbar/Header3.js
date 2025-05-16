import React from 'react';
import styles from './Header3.module.css'; // Import CSS module for styling

const Header3 = () => {
  return (
    <>
      {/* Main navigation bar */}
      <nav className={styles.navbar}>

        {/* Hamburger button for browsing categories */}
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

        {/* Dropdown for ELECTRONICS category */}
        <div className={styles.dropdown}>
          {/* Dropdown button */}
          <button className={styles.dropdownButton}>ELECTRONICS ▾</button>

          {/* Dropdown menu items */}
          <ul className={styles.dropdownMenu}>
            {/* You can replace these <li> items with <Link> components for navigation */}
            {/* Example: <li><Link to="/electronics/sports" className={styles.dropdownItem}>SPORTS</Link></li> */}
            <li className={styles.dropdownItem}>SPORTS</li>
            <li className={styles.dropdownItem}>CASUAL</li>
            <li className={styles.dropdownItem}>FORMAL</li>
          </ul>
        </div>

        {/* Dropdown for MEN CLOTHING category */}
        <div className={styles.dropdown}>
          <button className={styles.dropdownButton}>MEN CLOTHING ▾</button>
          <ul className={styles.dropdownMenu}>
            <li className={styles.dropdownItem}>SPORTS</li>
            <li className={styles.dropdownItem}>CASUAL</li>
            <li className={styles.dropdownItem}>FORMAL</li>
          </ul>
        </div>

        {/* Dropdown for WOMEN CLOTHING category */}
        <div className={styles.dropdown}>
          <button className={styles.dropdownButton}>WOMEN CLOTHING ▾</button>
          <ul className={styles.dropdownMenu}>
            <li className={styles.dropdownItem}>SPORTS</li>
            <li className={styles.dropdownItem}>CASUAL</li>
            <li className={styles.dropdownItem}>FORMAL</li>
          </ul>
        </div>

        {/* Dropdown for JEWELRY category */}
        <div className={styles.dropdown}>
          <button className={styles.dropdownButton}>JEWELRY ▾</button>
          <ul className={styles.dropdownMenu}>
            <li className={styles.dropdownItem}>CASUAL</li>
            <li className={styles.dropdownItem}>FORMAL</li>
          </ul>
        </div>

        {/* Clearance sale promo */}
        <div className={styles.clearanceSale}>
          <h6>CLEARANCE SALE 30%</h6>
        </div>
      </nav>
    </>
  );
};

export default Header3;
