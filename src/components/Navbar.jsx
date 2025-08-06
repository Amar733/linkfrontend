import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate('/login');
  };

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between">
      <Link to="/">Home</Link>
      <br />
      <div>
        <Link to="/login" className="mr-4">Login</Link><br />
        <Link to="/register" className="mr-4">Register</Link><br />
        <button onClick={logout}>Logout</button>
      </div>
    </nav>
  );
}
