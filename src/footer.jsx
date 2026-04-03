import React from 'react';
import { Link } from 'react-router-dom';

const Footer = function () {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-content">
                    {/* Logo and Description */}
                    <div className="footer-brand">
                        <img src="/Images/Logo.avif" alt="Dev Tyagi Logo" className="footer-logo" />
                        <p className="footer-description">
                            Your trusted e-commerce dashboard for managing products and users efficiently.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-links">
                        <h4 className="footer-heading">Quick Links</h4>
                        <ul className="footer-menu">
                            <li><Link to="/productlist">Product List</Link></li>
                            <li><Link to="/AddProduct">Add Product</Link></li>
                            <li><Link to="/Search">Search</Link></li>
                            <li><Link to="/UserList">Users</Link></li>
                        </ul>
                    </div>

                    {/* Account Links */}
                    <div className="footer-links">
                        <h4 className="footer-heading">Account</h4>
                        <ul className="footer-menu">
                            <li><Link to="/Login">Login</Link></li>
                            <li><Link to="/Register">Register</Link></li>
                            <li><Link to="/UpdateProduct">Update Product</Link></li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div className="footer-social">
                        <h4 className="footer-heading">Follow Us</h4>
                        <div className="social-icons">
                            <a href="https://www.facebook.com/login" className="social-link" aria-label="Facebook Login" target="_blank" rel="noopener noreferrer">
                                <svg className="social-icon" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                </svg>
                            </a>
                            <a href="https://x.com/login" className="social-link" aria-label="Twitter/X Login" target="_blank" rel="noopener noreferrer">
                                <svg className="social-icon" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                                </svg>
                            </a>
                            <a href="https://www.instagram.com/accounts/login" className="social-link" aria-label="Instagram Login" target="_blank" rel="noopener noreferrer">
                                <svg className="social-icon" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12.017 0C8.396 0 7.996.014 6.802.067 5.618.12 4.835.26 4.188.48c-.69.23-1.275.538-1.86 1.123-.585.585-.893 1.27-1.123 1.86C1.26 4.835 1.12 5.618.067 6.802.014 7.996 0 8.396 0 12.017s.014 4.021.067 5.215c.053 1.184.193 1.967.413 2.614.23.69.538 1.275 1.123 1.86.585.585 1.27.893 1.86 1.123.647.22 1.43.36 2.614.413 1.194.053 1.594.067 5.215.067s4.021-.014 5.215-.067c1.184-.053 1.967-.193 2.614-.413.69-.23 1.275-.538 1.86-1.123.585-.585.893-1.27 1.123-1.86.22-.647.36-1.43.413-2.614.053-1.194.067-1.594.067-5.215s-.014-4.021-.067-5.215c-.053-1.184-.193-1.967-.413-2.614-.23-.69-.538-1.275-1.123-1.86-.585-.585-1.27-.893-1.86-1.123-.647-.22-1.43-.36-2.614-.413-1.194-.053-1.594-.067-5.215-.067zm0 1.796c4.577 0 5.12.017 6.92.08 1.74.06 2.69.37 3.33.62.78.3 1.34.68 1.92 1.26.58.58.96 1.14 1.26 1.92.25.64.56 1.59.62 3.33.063 1.8.08 2.343.08 6.92s-.017 5.12-.08 6.92c-.06 1.74-.37 2.69-.62 3.33-.3.78-.68 1.34-1.26 1.92-.58.58-1.14.96-1.92 1.26-.64.25-1.59.56-3.33.62-1.8.063-2.343.08-6.92.08s-5.12-.017-6.92-.08c-1.74-.06-2.69-.37-3.33-.62-.78-.3-1.34-.68-1.92-1.26-.58-.58-.96-1.14-1.26-1.92-.25-.64-.56-1.59-.62-3.33-.063-1.8-.08-2.343-.08-6.92s.017-5.12.08-6.92c.06-1.74.37-2.69.62-3.33.3-.78.68-1.34 1.26-1.92.58-.58 1.14-.96 1.92-1.26.64-.25 1.59-.56 3.33-.62 1.8-.063 2.343-.08 6.92-.08zm0 4.48a7.537 7.537 0 100 15.074 7.537 7.537 0 000-15.074zm0 12.44a4.903 4.903 0 110-9.806 4.903 4.903 0 010 9.806zm8.28-12.44a1.76 1.76 0 11-3.52 0 1.76 1.76 0 013.52 0z"/>
                                </svg>
                            </a>
                            <a href="https://www.linkedin.com/login" className="social-link" aria-label="LinkedIn Login" target="_blank" rel="noopener noreferrer">
                                <svg className="social-icon" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="footer-bottom">
                    <div className="footer-copyright">
                        <p>&copy; {currentYear} Dev Tyagi. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;