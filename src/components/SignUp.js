import React, { useState } from 'react';
import styles from './SignUp.module.css';
import { useNavigate } from 'react-router-dom';  

const SignUp = () => {
    
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate(); 

 
  function handleSubmitSignUp(e) {
    e.preventDefault();
    

    if (!name || !email || !password || !confirmPassword) {
      alert('All fields are required');
      return;
    }
    
 
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

  
    const submittedData = {
      name,
      email,
      password,
    };
    let existingUsers = [];

    try {
      const stored = JSON.parse(localStorage.getItem('users'));
      if (Array.isArray(stored)) {
        existingUsers = stored;
      }
    } catch {
      existingUsers = [];
    }

    existingUsers.push(submittedData)
    localStorage.setItem('users', JSON.stringify(existingUsers))
    

    navigate('/signin');  

   
  }

  return (
    <div>
     
        <div className={styles.modalContainer}>
          <div className={styles.modalBackground}></div>

          <div className={styles.modalDialog}>
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmitSignUp}>
              <div>
                <label>Name:</label>
                <input
                  className={styles.modalInput}
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
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
              <div>
                <label>Confirm Password:</label>
                <input
                  className={styles.modalInput}
                  type="password"
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
              <button className={styles.modalButton} type="submit">
                Submit
              </button>
            </form>
            <button className={styles.modalButton}
            onClick={()=>navigate(-1)}>
              Close
            </button>
          </div>
        </div>
      
    </div>
  );
};

export default SignUp;
