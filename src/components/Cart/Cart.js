import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Cart.module.css';
import { cartActions } from '../../store/cartSlice';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const [couponApplied, setCouponApllied]= useState()
  const cartSubtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Adding coupon code state
  const [couponCode, setCouponCode] = useState('');
  const [discountedTotal, setDiscountedTotal] = useState(0);

  const couponsCode = {
    FLAT50: { type: 'flat', value: 50 },
    SAVE30: { type: 'percent', value: 0.30 },
  };

  const handleCoupon = () => {
    const coupon = couponsCode[couponCode.trim().toUpperCase()];
    const totalAmount = cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
  
    if (coupon) {
      let discountValue = 0;
  
      if (coupon.type === 'flat') {
        discountValue = coupon.value;
      } else if (coupon.type === 'percent') {
        discountValue = totalAmount * coupon.value;
      }
  
      if (discountValue < totalAmount) {
        const newTotal = totalAmount - discountValue;
        setDiscountedTotal(newTotal);
        setCouponApllied(couponCode.toUpperCase());
        setCouponCode(''); 
      } else {
        alert('Add more items to apply this coupon.');
      }
    } else {
      alert('Invalid coupon code');
    }
  };
  
  

  const handleRemove = (item) => {
    dispatch(cartActions.removeFromCart(item));
  };

  const handleIncrease = (item) => {
    dispatch(cartActions.increaseQuantity(item));
  };

  const handleDecrease = (item) => {
    dispatch(cartActions.decreaseQuantity(item));
  };

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains(styles.overlay)) {
      navigate(-1);
    }
  };

  const totalAmount = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const finalTotal = discountedTotal > 0 ? discountedTotal : totalAmount;

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
    <div className={styles.cartContainer} >
      <h2>My Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className={styles.cartContent}>
          <ul className={styles.cartList}>
            {cartItems.map((item, index) => (
              <li key={index} className={styles.cartItem}>
                <img src={item.image} alt={item.title} className={styles.image} />
                <div className={styles.details}>
                  <div className={styles.titleRow}>
                    <h4 className={styles.itemTitle}>{item.title}</h4>
                    <button className={styles.removeBtn} onClick={() => handleRemove(item)}>
                      Remove
                    </button>
                  </div>
                  <p>Price: ${item.price.toFixed(2)}</p>
                  <div className={styles.quantityControl}>
                    <button onClick={() => handleDecrease(item)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => handleIncrease(item)}>+</button>
                  </div>
                </div>
              </li>
            ))}

            <li className={styles.couponRow}>
              <input
                type="text"
                placeholder="Enter coupon code"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                className={styles.couponInput}
              />
              <FaArrowRight className={styles.couponArrow} onClick={handleCoupon} />
            </li>
          </ul>

          <div className={styles.totalColumn}>
            <h5>Cart Subtotal:{cartSubtotal}</h5>
            {discountedTotal > 0 && (
              <div>
                <p className={styles.discountedText}>
                  Discount Applied: 
                  <strong>-${(totalAmount - finalTotal).toFixed(2)}</strong> 
                  <br></br>
                  using coupon: <strong>{couponApplied}</strong>
                </p>
                <p className={styles.discountedText}>
                  New Total: ${finalTotal.toFixed(2)}
                </p>
              </div>
            )}
            <button className={styles.checkoutBtn}>Checkout</button>
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default Cart;
