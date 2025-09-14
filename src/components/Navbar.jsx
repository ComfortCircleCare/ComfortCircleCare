import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/">
          <img src="/logo.png" alt="Comfort Circle Care Logo" className="h-12" />
        </Link>
        <nav className="space-x-6 font-medium text-gray-700">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/careers">Careers</Link>
        </nav>
      </div>
    </header>
  );
}
