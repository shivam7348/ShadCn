import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200">
      <div className="container mx-auto py-6 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold text-white">About Us</h3>
            <p className="mt-2 text-sm">
              We are committed to providing the best services for our customers. 
              Reach out to us for more information!
            </p>
          </div>
          
          {/* Linknks Section */}
          <div>
            <h3 className="text-lg font-semibold text-white">Quick Linknks</h3>
            <ul className="mt-2 space-y-">
              <Link><a href="#" className="hover:text-gray-400">Home</a></Link>
              <Link><a href="#" className="hover:text-gray-400">About</a></Link>
              <Link><a href="#" className="hover:text-gray-400">Services</a></Link>
              <Link><a href="#" className="hover:text-gray-400">Contact</a></Link>
            </ul>
          </div>
          
          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold text-white">Contact</h3>
            <ul className="mt-2 space-y-2">
              <Link>Email: <a href="mailto:info@example.com" className="hover:text-gray-400">info@example.com</a></Link>
              <Link>Phone: <a href="tel:+1234567890" className="hover:text-gray-400">+123 456 7890</a></Link>
              <Link>Address: 123, Main Street, City</Link>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-6 border-t border-gray-700 pt-4 text-center">
          <p className="text-sm">&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
