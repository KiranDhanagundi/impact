import React, { useState } from "react";
import axios from "axios";

const ShiprocketAuthentication = () => {
  // State variables to store user credentials and authentication status
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [error, setError] = useState("");

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to Shiprocket API for authentication
      const response = await axios.post(
        "https://apiv2.shiprocket.in/v1/external/auth/login",
        {
          email,
          password,
        }
      );

      // If authentication is successful, set the token
      const { token } = response.data;
      setToken(token);
      setError("");
    } catch (err) {
      // Handle authentication errors
      setError("Invalid email or password.");
      console.error("Authentication error:", err);
    }
  };

  return (
    <div>
      <h2>Shiprocket Authentication</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {error && <p>{error}</p>}
      {token && <p>Authentication successful. Token: {token}</p>}
    </div>
  );
};

export default ShiprocketAuthentication;
