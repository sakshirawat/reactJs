import React from 'react';
import styles from './header1.module.css';
import logo from '../../images/logo.jpeg'
import { useNavigate } from 'react-router-dom'; 
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../../store/userSlice';

const Header1 = () => {
  const navigate = useNavigate(); 
  const dispatch= useDispatch()
  const user= useSelector((state)=> state.user.currentUser)


  //
  const openSignUp = () => {
    console.log("Navigating to SignUp...");
    navigate('/signup'); 
  };

  const openSignIn = () => {
    navigate('/signin'); 
  };
  const handleLogout=()=>{
    dispatch(userActions.logOut())
    navigate('/')
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
    
        <div className={styles.logoSection}>
          <img src={logo} alt="logo" className={styles.logoImg} />
          <h2 className={styles.logoText}>Sroto</h2>
          <h6 style={{ marginTop: '30px' }}>"Where Fashion Meets You."</h6>
        </div>

     
        <div className={styles.navRightSection}>
      
          <div className={styles.dropdown}>
            <button className={styles.dropdownButton}>Currency ▾</button>
            <ul className={styles.dropdownMenu}>
              <li className={styles.dropdownItem}>USD</li>
              <li className={styles.dropdownItem}>EUR</li>
              <li className={styles.dropdownItem}>INR</li>
            </ul>
          </div>

        
          <div className={styles.dropdown}>
            <button className={styles.dropdownButton}>Language ▾</button>
            <ul className={styles.dropdownMenu}>
              <li className={styles.dropdownItem}>English</li>
              <li className={styles.dropdownItem}>German</li>
              <li className={styles.dropdownItem}>Spanish</li>
            </ul>
          </div>

       
          <div className={styles.authLinks}>
          {user? (
            <span className={styles.username}>
              Welcome! {user}
              <button  onClick={handleLogout}>LogOut</button>
              </span>
            
          ):(
            <>
            <button className={styles.signInLink} onClick={openSignIn}>Sign In</button>
            <button className={styles.signUpButton} onClick={openSignUp}>Sign Up</button>
            </>
          )
         
          }
           
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header1;
