import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from './ProductDetail.module.css';

const ProductDetail = () => {
  const location = useLocation();
  const product = location.state?.product;

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className={styles.productDetail}>
      <img src={product.image} alt={product.title} className={styles.image} />
      <div className={styles.info}>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <h3>${product.price.toFixed(2)}</h3>
        <button className={styles.buyBtn}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetail;
