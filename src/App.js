import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header1 from './components/Navbar/Header1'; 
import Header2 from './components/Navbar/Header2';
import Header3 from './components/Navbar/Header3';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Products from './components/Product/Products'
import Home from './components/Home/Home';
import Wishlist from './components/Wishlist/Wishlist';
import Cart from './components/Cart/Cart';
import { useSelector } from 'react-redux';
import ProtectedRoute from './components/ProtectedRoutes'
import ProductDetail from './components/Product/ProductDetail';

const App = () => {
  const user = useSelector((state)=>state.user.currentUser)
  console.log(user,'app')
  return (
    <div>
      <Header1 />
      <Header2/>
      <Header3/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/products" element={<ProtectedRoute><Products /></ProtectedRoute>} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/wishlist" element={<ProtectedRoute><Wishlist /></ProtectedRoute>}/>
        <Route path="/cart" element={<ProtectedRoute><Cart/></ProtectedRoute>} />
        <Route path="/product/:name" element={<ProductDetail />} />

      </Routes>
    </div>
  );
};

export default App;
