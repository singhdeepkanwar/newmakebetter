import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-info">
                        <Link to="/" className="logo footer-logo">
                            <span className="logo-icon">M</span>
                            <span className="logo-text">Makebetter</span>
                        </Link>
                        <p className="footer-tagline">
                            Innovating the future with cutting-edge technology solutions.
                            We build experiences that matter.
                        </p>
                        <div className="social-links">
                            <a href="https://www.linkedin.com/company/makebetter-technologies" target='_blank' className="social-icon"><Linkedin size={20} /></a>
                        </div>
                    </div>

                    <div className="footer-links">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/services">Services</Link></li>
                            <li><Link to="/projects">Projects</Link></li>
                            <li><Link to="/career">Career</Link></li>
                        </ul>
                    </div>

                    <div className="footer-contact">
                        <h4>Contact Us</h4>
                        {/* <div className="contact-item">
                            <Phone size={18} className="icon" />
                            <span>+91 9872180369</span>
                        </div> */}
                        <div className="contact-item">
                            <Mail size={18} className="icon" />
                            <span>info@makebetter.tech</span>
                        </div>
                        {/* <div className="contact-item">
                            <MapPin size={18} className="icon" />
                            <span>India</span>
                        </div> */}
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Makebetter Technologies. All rights reserved.</p>
                    <button className="scroll-top" onClick={scrollToTop}>
                        <ArrowUp size={20} />
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
