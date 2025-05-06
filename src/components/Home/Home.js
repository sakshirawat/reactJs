import React from 'react';
import { useSelector } from 'react-redux';
import Footer from '../Footer/Footer';

const Home = () => {
  const user = useSelector((state) => state.user.currentUser);

  return (
    <>
      {!user && <Footer />}
    </>
  );
};

export default Home;
