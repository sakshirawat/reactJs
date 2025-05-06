import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Wishlist.module.css';
import { useNavigate } from 'react-router-dom';
import { wishlistActions } from '../../store/wishlistSlice';
import { FaTrashAlt } from 'react-icons/fa';

const Wishlist = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.currentUser);
  const wishlistItems = useSelector((state) => state.wishlist.items);

  if (!user) return null;

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains(styles.overlay)) {
      navigate(-1);
    }
  };

  const handleRemove = (item) => {
    dispatch(wishlistActions.removeFromWishlist(item));
  };

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={styles.wishlistBlock}>
        <h2>My Wishlist</h2>
        {wishlistItems.length === 0 ? (
          <p>No items in wishlist.</p>
        ) : (
          wishlistItems.map((item, index) => (
            <div className={styles.item} key={index}>
              <img src={item.image} alt={item.title} className={styles.image} />
              <div className={styles.itemInfo}>
                <h4>{item.title}</h4>
                <p>${item.price.toFixed(2)}</p>
                <button>Add To Cart</button>
                <FaTrashAlt
                className={styles.deleteIcon}
                onClick={()=>handleRemove(item)}
                title="Remove"
              />
              </div>
              
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Wishlist;
