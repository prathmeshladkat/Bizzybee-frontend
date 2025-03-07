import {
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaTwitter,
  FaFacebook,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Legal Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to={"/privacy-policy"}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <a
                  href="terms-of-service"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <Link
                  to={"/refunds"}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Refund Policy
                </Link>
              </li>
              <li>
                <a
                  href="delivery-policy"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Delivery and shipping
                </a>
              </li>
              <li>
                <a
                  href="contact-us"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Careers Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Careers</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Careers Portal
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Tech Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Social Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Social</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaTiktok size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaYoutube size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaFacebook size={24} />
              </a>
            </div>
          </div>

          {/* FAQ Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Help</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Destinations
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Press Room
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Promo Code
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* App Download Section */}
        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-xl font-bold mb-4 md:mb-0">Get the app!</div>
            <div className="flex space-x-4">
              <a
                href="#"
                className="border border-gray-600 rounded-lg px-4 py-2 flex items-center space-x-2 hover:bg-gray-800 transition-colors"
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="white"
                  >
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.79 1.18-.19 2.27-.88 3.41-.74 1.45.19 2.55.8 3.24 2.01-2.83 1.73-2.11 5.19.42 6.58-.8 1.62-1.76 3.26-3.15 4.33zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.32 2.32-1.66 4.22-3.74 4.25z" />
                  </svg>
                </span>
                <span>App Store</span>
              </a>
              <a
                href="#"
                className="border border-gray-600 rounded-lg px-4 py-2 flex items-center space-x-2 hover:bg-gray-800 transition-colors"
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="white"
                  >
                    <path d="M3.609 1.814L13.792 12 3.609 22.186c-.181.181-.29.432-.29.695 0 .264.109.514.29.695.181.181.432.29.695.29.264 0 .514-.109.695-.29l10.897-10.897c.181-.181.29-.432.29-.695 0-.264-.109-.514-.29-.695L4.999.828c-.181-.181-.432-.29-.695-.29-.264 0-.514.109-.695.29-.181.181-.29.432-.29.695 0 .264.109.514.29.695z" />
                  </svg>
                </span>
                <span>Google Play</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} YourCompany. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
