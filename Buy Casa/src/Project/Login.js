import React, { useState} from 'react';
import '../Styles/Login.css';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [contactnumber, setContactnumber] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    
    const phoneRegex = /^\d{10}$/;
    if (!email || !contactnumber || !password) {
      // setErrorMessage('Please enter all fields');
      alert('Please enter all fields')
      return;
    }

    if (!emailRegex.test(email)) {
      setErrorMessage('Invalid email');
      return;
    }

    if (!phoneRegex.test(contactnumber)) {
      setErrorMessage('Invalid contact number');
      return;
    }

    if (!passwordRegex.test(password)) {
      setErrorMessage('Invalid password. It must contain at least 8 characters, including letters and numbers.');
      return;
    }
    
    setErrorMessage('');
    navigate('/cards');

    console.log('Form submitted:', { email, contactnumber, password });
  };

  return (
    <div className='loginbody'>
    <div className="ccontainer">
      <div className="form">
        <div className="sign-in-section">
          <h1>Log in</h1>

          <form onSubmit={handleSubmit}>
            <div className="form-field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label htmlFor="phone">Contact number</label>
              <input
                id="phone"
                type="phone"
                placeholder="Contact number"
                value={contactnumber}
                onChange={(e) => setContactnumber(e.target.value)}
              />
            </div>
            <div className="form-field">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {errorMessage && <div className="error-message">{errorMessage}</div>}
            <div className="form-options">
              <Link to ="/SignUp">
              New member? SignUp
              </Link>
            </div>
            <div className="form-field">
              <Link to="/cards">
               <input type="submit" className="btn btn-signin" onClick={handleSubmit} value="Submit" /></Link>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Login;
