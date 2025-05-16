import React, { useEffect, useState } from 'react';
import ProductItem from './ProductItem';
import styles from './Products.module.css';
import { useSelector } from 'react-redux';

const Products = ({ searchTerm }) => {
  // Get current logged-in user from Redux store
  const user = useSelector((state) => state.user.currentUser);

  // State to hold all fetched products
  const [productData, setProductData] = useState([]);

  // State to manage current page number for pagination
  const [currentPage, setCurrentPage] = useState(1);

  // Number of items to display per page
  const itemsPerPage = 4;

  // Fetch product data from API on component mount
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setProductData(data))
      .catch((error) => {
        console.error('Error fetching products:', error);
        setProductData([]); // fallback to empty array on error
      });
  }, []);

  // Filter products by search term (case insensitive)
  const filteredProducts = productData.filter((product) =>
    product.title.toLowerCase().includes(searchTerm?.toLowerCase() || '')
  );

  // Calculate total pages based on filtered products and items per page
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  // Calculate starting index of products for current page
  const startIdx = (currentPage - 1) * itemsPerPage;

  // Slice filtered products for current page display
  const currentItems = filteredProducts.slice(startIdx, startIdx + itemsPerPage);

  // Handler for clicking "Prev" button - moves to previous page but not below 1
  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  // Handler for clicking "Next" button - moves to next page but not beyond totalPages
  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  // Reset to page 1 if searchTerm changes, to avoid out-of-range pages
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  return user ? (
    <>
      {/* Grid layout for displaying products */}
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

      {/* Pagination controls */}
      <div className={styles.pagination}>
        <button onClick={handlePrev} disabled={currentPage === 1}>
          Prev
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={handleNext} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </>
  ) : (
    // Message shown if user is not signed in
    <p style={{ textAlign: 'center', marginTop: '2rem' }}>
      Please sign in to view products.
    </p>
  );
};

export default Products;
