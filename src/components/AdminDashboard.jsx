// AdminDashboard.jsx

import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { auth } from "../firebase"; // Adjust the path accordingly

const AdminDashboard = () => {
  const [loggedIn, setLoggedIn] = useState(true); // Initially assuming the user is logged in

  // Function to handle sign out
  const handleSignOut = async () => {
    try {
      await auth.signOut();
      setLoggedIn(false); // Set loggedIn state to false
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  if (!loggedIn) {
    return <Redirect to="/login" />; // Redirect to login page if not logged in
  }

  return (
    <div>
      <h1>Welcome to Admin Dashboard</h1>
      <nav>
        <ul>
          <li>
            <Link to="/upload">Upload Images</Link>
          </li>
          <li>
            <Link to="/delete">Delete Images</Link>
          </li>
          <li>
            <Link to="/view">View Images</Link>
          </li>
          <li>
            <button onClick={handleSignOut}>Sign Out</button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default AdminDashboard;
