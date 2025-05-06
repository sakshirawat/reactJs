import React, { useEffect, useState } from 'react';
import ProductItem from './ProductItem';
import styles from './Products.module.css';
import { useSelector } from 'react-redux';

const Products = () => {
  const user = useSelector((state) => state.user.currentUser);
  const [productData, setProductData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setProductData(data));
  }, []);

  const totalPages = Math.ceil(productData.length / itemsPerPage);
  const startIdx = (currentPage - 1) * itemsPerPage;
  const currentItems = productData.slice(startIdx, startIdx + itemsPerPage);

  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  return (
    user ? (
      <>
        <div className={styles.productsGrid}>
          {currentItems.map((item) => (
            <ProductItem
              key={item.id}
              title={item.title}
              category={item.category}
              description={item.description}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
    
        <div className={styles.pagination}>
          <button onClick={handlePrev} disabled={currentPage === 1}>Prev</button>
          <span>Page {currentPage} of {totalPages}</span>
          <button onClick={handleNext} disabled={currentPage === totalPages}>Next</button>
        </div>
      </>
    ) : (
      <p style={{ textAlign: 'center', marginTop: '2rem' }}>
        Please sign in to view products.
      </p>
    )
  );
};

export default Products;
