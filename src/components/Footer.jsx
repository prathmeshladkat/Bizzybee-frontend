import React from "react";
import { Heart, Github, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-rose-50 dark:bg-gray-900 text-gray-700 dark:text-gray-300 mt-auto py-5 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <Heart className="h-6 w-6 text-rose-500 mr-2" />
          <p className="text-sm">
            © {new Date().getFullYear()} DevTinder. All rights reserved.
          </p>
        </div>
        <nav className="flex space-x-4">
          <Link
            href="/about"
            className="hover:text-rose-500 transition-colors duration-200"
          >
            About
          </Link>
          <Link
            href="/privacy"
            className="hover:text-rose-500 transition-colors duration-200"
          >
            Privacy
          </Link>
          <Link
            href="/terms"
            className="hover:text-rose-500 transition-colors duration-200"
          >
            Terms
          </Link>
        </nav>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a
            href="https://github.com/devtinder"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-rose-500 transition-colors duration-200"
          >
            <Github className="h-6 w-6" />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            href="https://linkedin.com/company/devtinder"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-rose-500 transition-colors duration-200"
          >
            <Linkedin className="h-6 w-6" />
            <span className="sr-only">LinkedIn</span>
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
