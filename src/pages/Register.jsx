import { useState } from 'react';
import axios from '../axios';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [form, setForm] = useState({ username: '', password: '' });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = e =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setMessage('');
    setError('');

    try {
      await axios.post('register/', form);
      setMessage('Registration successful! Redirecting to login...');
      setTimeout(() => {
        navigate('/login');
      }, 2000); // wait 2 seconds before redirecting
    } catch (err) {
      console.error(err);
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4">
      <h2 className="text-xl mb-4">Register</h2>

      {message && (
        <div className="mb-4 p-2 bg-green-100 border border-green-400 text-green-700 rounded">
          {message}
        </div>
      )}
      {error && (
        <div className="mb-4 p-2 bg-red-100 border border-red-400 text-red-700 rounded">
          {error}
        </div>
      )}

      <label className="block mb-2">Username</label>
      <input
        name="username"
        onChange={handleChange}
        className="border w-full p-2 mb-2"
        required
      />

      <label className="block mb-2">Password</label>
      <input
        name="password"
        type="password"
        onChange={handleChange}
        className="border w-full p-2 mb-2"
        required
      />

      <button className="bg-green-600 text-white px-4 py-2">Register</button>
    </form>
  );
}
