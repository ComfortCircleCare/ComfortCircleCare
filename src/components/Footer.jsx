import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 mt-12">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        <div>
          <img src="/logo.png" alt="Logo" className="h-12 mb-3" />
          <p>Flexible, compassionate companionship and support in Colchester & Essex.</p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Navigation</h4>
          <ul className="space-y-1">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/careers">Careers</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Services</h4>
          <ul className="space-y-1">
            <li>Home from Hospital</li>
            <li>Sitting & Respite</li>
            <li>Companionship</li>
            <li>Practical Help at Home</li>
            <li>Rapid Response</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Contact</h4>
          <p>Email: info@comfortcirclecare.co.uk</p>
          <p>Phone: 07481 259386</p>
          <p>Opening: Mon–Fri 9am–6pm</p>
          <div className="flex space-x-4 mt-3">
            <FaFacebook />
            <FaInstagram />
            <FaLinkedin />
          </div>
        </div>

      </div>
      <div className="bg-gray-200 text-center py-3 text-sm">
        © {new Date().getFullYear()} Comfort Circle Care. All rights reserved.
      </div>
    </footer>
  );
}
