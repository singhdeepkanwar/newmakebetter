import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, Loader2 } from 'lucide-react';
import submissionService from '../services/submissionService';
import './Contact.css';

const Contact = () => {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [submitStatus, setSubmitStatus] = useState('idle'); // idle, submitting, success

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitStatus('submitting');

        try {
            await submissionService.submitContact(formState);
            setSubmitStatus('success');
            setFormState({ name: '', email: '', message: '' });

            // Return to idle after 4 seconds
            setTimeout(() => {
                setSubmitStatus('idle');
            }, 4000);
        } catch (error) {
            console.error('Submission failed:', error);
            setSubmitStatus('idle');
            // Add error handling UI if needed
        }
    };

    return (
        <div className="contact-page section-padding">
            <div className="container">
                <div className="section-header">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="section-title"
                    >
                        Get in <span className="text-gradient">Touch</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="section-subtitle"
                    >
                        Have a project in mind? Let's talk about how we can help.
                    </motion.p>
                </div>

                <div className="contact-grid">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="contact-info-cards"
                    >
                        {/* <div className="contact-card glass">
                            <Phone className="icon" size={24} />
                            <div>
                                <h4>Call Us</h4>
                                <p>+91 9872180369</p>
                            </div>
                        </div> */}
                        <div className="contact-card glass">
                            <Mail className="icon" size={24} />
                            <div>
                                <h4>Email Us</h4>
                                <p>info@makebetter.tech</p>
                            </div>
                        </div>
                        {/* <div className="contact-card glass">
                            <MapPin className="icon" size={24} />
                            <div>
                                <h4>Visit Us</h4>
                                <p>Digital Plaza, Tech City, India</p>
                            </div>
                        </div> */}
                    </motion.div>

                    <motion.form
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="contact-form glass"
                        onSubmit={handleSubmit}
                    >
                        <AnimatePresence>
                            {submitStatus === 'success' && (
                                <motion.div
                                    className="form-success-overlay"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                >
                                    <motion.div
                                        initial={{ scale: 0.5, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        transition={{ type: "spring", damping: 12 }}
                                        className="success-content"
                                    >
                                        <div className="success-icon-wrapper">
                                            <CheckCircle size={48} className="text-secondary" />
                                        </div>
                                        <h3>Message Sent!</h3>
                                        <p>Thank you for reaching out. Our team will get back to you within 24 hours.</p>
                                        <button
                                            type="button"
                                            className="btn btn-secondary btn-sm"
                                            onClick={() => setSubmitStatus('idle')}
                                        >
                                            Send Another
                                        </button>
                                    </motion.div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <div className="form-group">
                            <label>Full Name</label>
                            <input
                                type="text"
                                placeholder="John Doe"
                                required
                                disabled={submitStatus !== 'idle'}
                                value={formState.name}
                                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                            />
                        </div>
                        <div className="form-group">
                            <label>Email Address</label>
                            <input
                                type="email"
                                placeholder="john@example.com"
                                required
                                disabled={submitStatus !== 'idle'}
                                value={formState.email}
                                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                            />
                        </div>
                        <div className="form-group">
                            <label>Message</label>
                            <textarea
                                rows="5"
                                placeholder="Tell us about your project..."
                                required
                                disabled={submitStatus !== 'idle'}
                                value={formState.message}
                                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className={`btn btn-primary submit-btn ${submitStatus === 'submitting' ? 'loading' : ''}`}
                            disabled={submitStatus !== 'idle'}
                        >
                            {submitStatus === 'submitting' ? (
                                <><Loader2 size={18} className="animate-spin" /> Sending...</>
                            ) : (
                                <>Send Message <Send size={18} /></>
                            )}
                        </button>
                    </motion.form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
