import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Heart, Rocket, Users, X, Send, CheckCircle } from 'lucide-react';
import submissionService from '../services/submissionService';
import './Career.css';

const Career = () => {
    const [selectedJob, setSelectedJob] = React.useState(null);
    const [formStatus, setFormStatus] = React.useState('idle'); // idle, submitting, success
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        cvLink: '',
        message: ''
    });

    const benefits = [
        { icon: <Heart size={24} />, title: 'Health & Wellness', desc: 'Comprehensive insurance and wellness programs.' },
        { icon: <Rocket size={24} />, title: 'Growth Opportunity', desc: 'Continuous learning and career advancement paths.' },
        { icon: <Users size={24} />, title: 'Incredible Team', desc: 'Work with the brightest minds in the industry.' },
        { icon: <Briefcase size={24} />, title: 'Work-Life Balance', desc: 'Flexible hours and remote work options.' }
    ];

    const jobs = [
        { title: 'Senior Frontend Engineer', type: 'Full-time', location: 'Remote / India' },
        { title: 'Full Stack Developer', type: 'Full-time', location: 'Remote / India' },
        { title: 'UI/UX Designer', type: 'Contract', location: 'Remote' },
        { title: 'DevOps Specialist', type: 'Full-time', location: 'Remote / India' }
    ];

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormStatus('submitting');

        try {
            await submissionService.submitCareer({
                job: selectedJob.title,
                ...formData
            });
            setFormStatus('success');
            setFormData({ name: '', email: '', cvLink: '', message: '' });

            // Auto close after 3 seconds
            setTimeout(() => {
                setSelectedJob(null);
                setFormStatus('idle');
            }, 3000);
        } catch (error) {
            console.error('Career application failed:', error);
            setFormStatus('idle');
        }
    };

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.name || e.target.name]: e.target.value });
    };

    return (
        <div className="career-page section-padding">
            <div className="container">
                <div className="section-header">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="section-title"
                    >
                        Join Our <span className="text-gradient">Team</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="section-subtitle"
                    >
                        Be part of a mission-driven company that values innovation and collaboration.
                    </motion.p>
                </div>

                <div className="benefits-grid">
                    {benefits.map((benefit, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="benefit-card glass"
                        >
                            <div className="benefit-icon">{benefit.icon}</div>
                            <h3>{benefit.title}</h3>
                            <p>{benefit.desc}</p>
                        </motion.div>
                    ))}
                </div>

                <div className="openings-section">
                    <h2>Open Positions</h2>
                    <div className="jobs-list">
                        {jobs.map((job, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="job-card glass"
                            >
                                <div className="job-info">
                                    <h3>{job.title}</h3>
                                    <p>{job.type} • {job.location}</p>
                                </div>
                                <button
                                    className="btn btn-secondary"
                                    onClick={() => setSelectedJob(job)}
                                >
                                    Apply Now
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <AnimatePresence>
                    {selectedJob && (
                        <div className="modal-backdrop" onClick={() => setSelectedJob(null)}>
                            <motion.div
                                className="application-modal glass"
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                                onClick={(e) => e.stopPropagation()}
                            >
                                <button className="modal-close" onClick={() => setSelectedJob(null)}>
                                    <X size={24} />
                                </button>

                                {formStatus === 'success' ? (
                                    <div className="success-state">
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            className="success-icon"
                                        >
                                            <CheckCircle size={64} />
                                        </motion.div>
                                        <h2>Application Received!</h2>
                                        <p>Our team will review your profile for the <strong>{selectedJob.title}</strong> role and get back to you soon.</p>
                                    </div>
                                ) : (
                                    <>
                                        <div className="modal-header">
                                            <h2>Apply for <span className="text-secondary">{selectedJob.title}</span></h2>
                                            <p>{selectedJob.type} • {selectedJob.location}</p>
                                        </div>

                                        <form className="application-form" onSubmit={handleSubmit}>
                                            <div className="form-group">
                                                <label>Full Name</label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    required
                                                    placeholder="John Doe"
                                                    value={formData.name}
                                                    onChange={handleInputChange}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label>Email Address</label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    required
                                                    placeholder="john@example.com"
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label>CV / Portfolio Link</label>
                                                <input
                                                    type="url"
                                                    name="cvLink"
                                                    required
                                                    placeholder="https://linkedin.com/in/..."
                                                    value={formData.cvLink}
                                                    onChange={handleInputChange}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label>Additional Message</label>
                                                <textarea
                                                    name="message"
                                                    rows="4"
                                                    placeholder="Tell us why you're a great fit..."
                                                    value={formData.message}
                                                    onChange={handleInputChange}
                                                ></textarea>
                                            </div>

                                            <button
                                                type="submit"
                                                className={`btn btn-primary submit-btn ${formStatus === 'submitting' ? 'loading' : ''}`}
                                                disabled={formStatus === 'submitting'}
                                            >
                                                {formStatus === 'submitting' ? 'Sending...' : (
                                                    <>Submit Application <Send size={18} /></>
                                                )}
                                            </button>
                                        </form>
                                    </>
                                )}
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Career;
