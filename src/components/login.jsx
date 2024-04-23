import React, { useState } from 'react';
import axios from 'axios';


import { Link } from 'react-router-dom';

const preventRefresh = (e) => {
	e.preventDefault();
};

export default function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/login', {
        email,
        password,
      });
      if (response.data === 'Login successful') {
        // navigate("/"); 
        window.location = `/?userEmail=${encodeURIComponent(email)}`;

      }
      else if(response.data==='Invalid email or password')
      {
        alert("Invalid email or password");
        window.location = '/login';
      }

    } catch (error) {
      console.error('Error occurred:', error);
    }
  };
	return (
		<div className="wrapper signIn">
			
			<div className="form">
				<div className="heading">LOGIN</div>
				<form>
					<div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
					<button type="submit" onClick={handleSubmit}>
						Submit
					</button>
          
				</form>
				<p>
					Don't have an account ? <Link to="/signup"> Sign In </Link>
				</p>
			</div>
		</div>
	);
  };

