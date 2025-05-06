import React from 'react';
import styles from './header2.module.css';
import { FaShoppingCart, FaHeart } from 'react-icons/fa'; 
import { useNavigate } from 'react-router-dom'; 
import { useSelector } from 'react-redux';

const Header2 = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.currentUser);

  const goToCart = () => {
    navigate('/cart'); 
  };

  const goToWishlist = () => {
    navigate('/wishlist');
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <div className={styles.searchSection}>
          <input
            type="text"
            placeholder="Search products..."
            className={styles.searchInput}
          />
        </div>

        <div className={styles.navRightSection}>
          <div
            className={styles.icon}
            onClick={() => {
              user ? goToWishlist() : alert('Please sign in first!');
            }}
          >
            <FaHeart size={24} />
            <span className={styles.iconLabel}>Wishlist</span>
          </div>

          <div
            className={styles.icon}
            onClick={() => {
              user ? goToCart() : alert('Please sign in first!');
            }}
          >
            <FaShoppingCart size={24} />
            <span className={styles.iconLabel}>Cart</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header2;
