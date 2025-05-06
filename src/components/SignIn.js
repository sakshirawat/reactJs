import React, { useState } from 'react';
import styles from './SignUp.module.css';
import { useNavigate } from 'react-router-dom';  
import { useDispatch } from 'react-redux';
import { userActions } from '../store/userSlice';
const SignIn = () => {
  let users= JSON.parse(localStorage.getItem('users')|| '[]')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 
  const dispatch= useDispatch()

 
  function handleSubmitSignIn(e) {
    e.preventDefault();


    if (!email || !password) {
      alert('Please enter valid credentials');
      return;
    }
    //console.log(users,'users')

    const loggedInUser = users.find(
        (user) => user.email === email && user.password === password
      );
      if(loggedInUser){
        //console.log(loggedInUser.name)
        dispatch(userActions.signIn(loggedInUser))
      }
    navigate('/products');
    console.log('Email:', email, 'Password:', password);

  }

  return (
    <div>
    
        <div className={styles.modalContainer}>
          <div className={styles.modalBackground}></div>

          <div className={styles.modalDialog}>
            <h2>Sign In</h2>
            <form onSubmit={handleSubmitSignIn}>
              <div>
                <label>Email:</label>
                <input
                  className={styles.modalInput}
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <label>Password:</label>
                <input
                  className={styles.modalInput}
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button className={styles.modalButton} type="submit">
                Submit
              </button>
            </form>
            <button className={styles.modalButton} onClick={()=>navigate(-1)}>
              Close
            </button>
          </div>
        </div>
      
    </div>
  );
};

export default SignIn;
