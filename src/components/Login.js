import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    let valid = true;

    // Basic validation
    if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Please enter a valid email address');
      valid = false;
    } else {
      setEmailError('');
    }

    if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters');
      valid = false;
    } else {
      setPasswordError('');
    }

    if (!valid) return;

    try {
      const response = await axios.post('http://localhost:5005/login', { email, password });
      localStorage.setItem('token', response.data.token);
      navigate('/');
    } catch (error) {
      setError(error.response.data.message || 'Login failed');
    }
  };

  return (
    <div className="w-full h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex justify-center items-center">
      <div className="w-full max-w-6xl mx-auto bg-white shadow-2xl rounded-lg grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
        {/* Left Side - Login Form */}
        <div className="flex flex-col justify-center p-8">
          <h2 className="text-4xl font-bold text-center text-primary-color mb-6">Welcome Back!</h2>
          {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}
          <form onSubmit={handleLogin} className="w-full">
            <div className="mb-4">
              <label className="block text-primary-color text-lg" htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                required
                className={`mt-1 p-3 border rounded-lg w-full focus:outline-none focus:ring-4 transition-all duration-300 ${emailError ? 'border-red-500' : 'border-gray-300 focus:ring-secondary-color'}`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
              />
              {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
            </div>
            <div className="mb-6">
              <label className="block text-primary-color text-lg" htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                required
                className={`mt-1 p-3 border rounded-lg w-full focus:outline-none focus:ring-4 transition-all duration-300 ${passwordError ? 'border-red-500' : 'border-gray-300 focus:ring-secondary-color'}`}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
              />
              {passwordError && <p className="text-red-500 text-sm">{passwordError}</p>}
            </div>
            <button
              type="submit"
              className="w-full secondary-button"
            >
              Login
            </button>
          </form>
          <div className="mt-6 text-center">
            <p className="text-primary-color">Don't have an account? <a href="/signup" className="text-secondary-color hover:underline">Sign up</a></p>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="hidden lg:flex justify-center items-center">
          <img
            src="https://images.pexels.com/photos/3585091/pexels-photo-3585091.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Login Illustration"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
