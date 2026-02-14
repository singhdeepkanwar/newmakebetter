import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Info, Building2, Scale } from 'lucide-react';
import './Legal.css';

const Legal = () => {
    const legalSections = [
        {
            icon: <Building2 className="section-icon" />,
            title: "Corporate Information",
            content: (
                <div className="legal-details">
                    <p><strong>Entity Name:</strong> Shree Ananta Consultancy and Solutions LLP</p>
                    <p><strong>LLPIN:</strong> ACS-2694</p>
                    <p><strong>Tradename:</strong> MakeBetter Technologies</p>
                </div>
            )
        },
        {
            icon: <Info className="section-icon" />,
            title: "About Makebetter",
            content: (
                <p>
                    MakeBetter Technologies (a tradename of Shree Ananta Consultancy and Solutions LLP) is a premier technology
                    consultancy providing advanced solutions in Artificial Intelligence, Cloud Computing,
                    and Digital Transformation. We are committed to delivering excellence and innovation
                    to our clients worldwide.
                </p>
            )
        },
        {
            icon: <Scale className="section-icon" />,
            title: "Legal Terms",
            content: (
                <p>
                    The information provided on this website is for general informational purposes only.
                    All content and services are provided by Shree Ananta Consultancy and Solutions LLP.
                    Unauthorized use of our tradename "MakeBetter Technologies" or any content from this site is
                    strictly prohibited.
                </p>
            )
        }
    ];

    return (
        <div className="legal-page">
            <section className="legal-hero">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="legal-header"
                    >
                        <div className="hero-badge">
                            <span>Compliance & Legal</span>
                        </div>
                        <h1 className="hero-title">Legal <span className="text-gradient">Information</span></h1>
                        <p className="hero-description">
                            Official corporate details and legal notices for Shree Ananta Consultancy and Solutions LLP.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="legal-content section-padding">
                <div className="container">
                    <div className="legal-grid">
                        {legalSections.map((section, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="legal-card glass"
                            >
                                <div className="card-header">
                                    {section.icon}
                                    <h3>{section.title}</h3>
                                </div>
                                <div className="card-body">
                                    {section.content}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Legal;
