// import { useState } from 'react';
// import axios from '../axios';
// import { useNavigate } from 'react-router-dom';

// export default function Login() {
//   const [form, setForm] = useState({ username: '', password: '' });
//   const navigate = useNavigate();

//   const handleChange = (e) =>
//     setForm({ ...form, [e.target.name]: e.target.value });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const res = await axios.post('token/', form);
//     localStorage.setItem('access', res.data.access);
//     localStorage.setItem('refresh', res.data.refresh);
//     navigate('/');
//   };

//   return (
//     <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4">
//       <h2 className="text-xl mb-4">Login</h2>
//       <input name="username" onChange={handleChange} className="border w-full p-2 mb-2" />
//       <input name="password" type="password" onChange={handleChange} className="border w-full p-2 mb-2" />
//       <button className="bg-blue-600 text-white px-4 py-2">Login</button>
//     </form>
//   );
// }
import { useState } from 'react';
import axios from '../axios';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [form, setForm] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('token/', form);
      localStorage.setItem('access', res.data.access);
      localStorage.setItem('refresh', res.data.refresh);
      navigate('/');
    } catch (error) {
      alert('Login failed. Please check your credentials.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center bg-[#f3f2ef] px-4">
      <div className="max-w-md w-full mx-auto bg-white p-8 rounded-lg shadow-lg border border-gray-300">
        {/* LinkedIn-style logo */}
        <div className="flex justify-center mb-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-blue-700"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M4.98 3.5C3.34 3.5 2 4.85 2 6.5s1.34 3 2.98 3c1.63 0 2.97-1.34 2.97-3S6.61 3.5 4.98 3.5zM2.5 21.5h5v-11h-5v11zm7 0h4.5v-6c0-1.4.5-2.35 1.68-2.35 1.17 0 1.32 1.1 1.32 2.44v5.9H21v-6.5c0-3.3-1.74-4.83-4.06-4.83-1.87 0-2.7 1.03-3.16 1.75h.04v-1.5h-4.5c.06 1 0 11 0 11z" />
          </svg>
        </div>

        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Sign in to LinkedIn
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
              placeholder="Enter your username"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-700 text-white font-semibold py-2 rounded-md hover:bg-blue-800 transition duration-200"
          >
            Sign In
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          New to LinkedIn?{' '}
          <a href="/signup" className="text-blue-600 hover:underline">
            Join now
          </a>
        </p>
      </div>
    </div>
  );
}
