import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/signup', {
        email,
        password,
      });
      if (response.data === 'User registered successfully') {
        // navigate("/"); 
        window.location = `/?userEmail=${encodeURIComponent(email)}`;

      }
      else if(response.data==='User already exists')
      {
        alert("Already User Exist");
        window.location = '/login';
      }

      
 
    } catch (error) {
      console.error('Error occurred:', error);
    }
  };

  return (
    <div className="wrapper signIn">
			
    <div className="form">
      <div className="heading">SIGN UP</div>
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
      
    </div>
  </div>
    
  );
};

export default Signup;
