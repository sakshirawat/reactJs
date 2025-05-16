import React, { useState } from 'react';
import styles from './SignUp.module.css';
import { useNavigate } from 'react-router-dom';  
import { useDispatch } from 'react-redux';
import { userActions } from '../store/userSlice';

const SignIn = () => {
  // Get registered users from localStorage or set to empty array if not found
  let users = JSON.parse(localStorage.getItem('users') || '[]');

  // State for form inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // State for error messages
  const [errors, setErrors] = useState({ email: '', password: '', credentials: '' });

  // React Router's hook to navigate programmatically
  const navigate = useNavigate(); 

  // Redux dispatch function
  const dispatch = useDispatch();

  // Input validation logic
  const validateInputs = () => {
    let valid = true;
    const newErrors = { email: '', password: '', credentials: '' };

    // Check if email is empty or not in valid format
    if (!email) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      newErrors.email = 'Invalid email format';
      valid = false;
    }

    // Check if password is empty
    if (!password) {
      newErrors.password = 'Password is required';
      valid = false;
    }

    // Update error state
    setErrors(newErrors);
    return valid;
  };

  // Form submission handler
  function handleSubmitSignIn(e) {
    e.preventDefault(); // Prevent default form behavior (page reload)

    if (!validateInputs()) return; // If validation fails, exit early

    // Check if a user with entered credentials exists
    const loggedInUser = users.find(
      (user) => user.email === email && user.password === password
    );

    if (!loggedInUser) {
      // Show error message if login fails
      setErrors((prev) => ({ ...prev, credentials: 'Incorrect email or password' }));
      return;
    }

    // Dispatch login action to Redux store
    dispatch(userActions.signIn(loggedInUser));

    // Redirect user to products page
    navigate('/products');
  }

  return (
    <div>
      <div className={styles.modalContainer}>
        <div className={styles.modalBackground}></div>

        <div className={styles.modalDialog}>
          <h2>Sign In</h2>

          {/* Sign In form */}
          <form onSubmit={handleSubmitSignIn}>
            <div>
              <label>Email:</label>
              <input
                className={styles.modalInput}
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {/* Email validation message */}
              {errors.email && <p className={styles.error}>{errors.email}</p>}
            </div>

            <div>
              <label>Password:</label>
              <input
                className={styles.modalInput}
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {/* Password validation message */}
              {errors.password && <p className={styles.error}>{errors.password}</p>}
            </div>

            {/* Login failure message */}
            {errors.credentials && <p className={styles.error}>{errors.credentials}</p>}

            {/* Submit button */}
            <button className={styles.modalButton} type="submit">
              Submit
            </button>
          </form>

          {/* Close button to go back */}
          <button className={styles.modalButton} onClick={() => navigate('/', { replace: true })}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
