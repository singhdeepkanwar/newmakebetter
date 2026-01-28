import React from 'react';
import { motion } from 'framer-motion';
import {
    ArrowRight, Code, BarChart, Shield, Terminal,
    Cpu, Zap, BrainCircuit, Globe, CheckCircle2,
    Workflow, Database, MessageSquare
} from 'lucide-react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    const stats = [
        { label: 'Cloud Solutions', value: '100+' },
        { label: 'AI Models Deployed', value: '50+' },
        { label: 'Client Satisfaction', value: '99%' },
        { label: 'Uptime Guarantee', value: '99.9%' }
    ];

    const coreFocus = [
        {
            icon: <BrainCircuit size={32} />,
            title: 'Generative AI & LLMs',
            desc: 'Customized Large Language Models and fine-tuning for specific business domains.'
        },
        {
            icon: <Cpu size={32} />,
            title: 'Predictive Analytics',
            desc: 'Advanced ML architectures to forecast trends and optimize decision making.'
        },
        {
            icon: <Zap size={32} />,
            title: 'Neural Automation',
            desc: 'Seamlessly integrating AI into existing business workflows for maximum efficiency.'
        }
    ];

    const process = [
        { step: '01', title: 'Consultation', desc: 'Deep dive into your business challenges and data landscape.' },
        { step: '02', title: 'Architecture', desc: 'Designing scalable AI and cloud architectures.' },
        { step: '03', title: 'Implementation', desc: 'Secure development with rigorous testing and deployment.' },
        { step: '04', title: 'Optimization', desc: 'Continuous monitoring and refinement for peak performance.' }
    ];

    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="container">
                    <div className="hero-content">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="hero-badge"
                        >
                            <span>Visionary AI & Tech Partners</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="hero-title"
                        >
                            Next-Gen <span className="text-gradient">AI & LLM</span> <br />
                            Business Solutions.
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="hero-description"
                        >
                            Makebetter Technologies specializes in bridging the gap between cutting-edge AI research
                            and real-world business impact. We build the intelligence that drives growth.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="hero-actions"
                        >
                            <Link to="/contact" className="btn btn-primary lg">
                                Transform Your Business <ArrowRight size={20} />
                            </Link>
                            <Link to="/services" className="btn btn-secondary lg">
                                AI Expertise
                            </Link>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="hero-visual"
                    >
                        <div className="hero-card glass">
                            <div className="card-top">
                                <div className="dots"><span></span><span></span><span></span></div>
                                <Terminal size={14} />
                            </div>
                            <div className="card-body">
                                <code><span className="code-blue">async function</span> <span className="code-green">deployAI</span>() {'{'}</code>
                                <code> &nbsp;&nbsp;<span className="code-blue">const</span> intelligence = <span className="code-blue">await</span> LLM.initialize();</code>
                                <code> &nbsp;&nbsp;<span className="code-blue">return</span> intelligence.automate({'{'}</code>
                                <code> &nbsp;&nbsp;&nbsp;&nbsp;impact: <span className="code-green">'high'</span>,</code>
                                <code> &nbsp;&nbsp;&nbsp;&nbsp;scale: <span className="code-purple">Infinity</span></code>
                                <code> &nbsp;&nbsp;{'}'});</code>
                                <code>{'}'}</code>
                            </div>
                        </div>
                        <div className="hero-shape-blur"></div>
                    </motion.div>
                </div>
            </section>

            {/* Trust & Stats Section */}
            <section className="stats-section glass">
                <div className="container">
                    <div className="stats-grid">
                        {stats.map((stat, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="stat-item"
                            >
                                <div className="stat-value text-gradient">{stat.value}</div>
                                <div className="stat-label">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Primary Focus: AI/ML/LLMs */}
            <section className="focus-section section-padding">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Core <span className="text-gradient">Intelligence</span></h2>
                        <p className="section-subtitle">We specialize in turning complex AI models into reliable business infrastructure.</p>
                    </div>

                    <div className="focus-grid">
                        {coreFocus.map((item, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ y: -10 }}
                                className="focus-card glass"
                            >
                                <div className="focus-icon">{item.icon}</div>
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                                <Link to="/services" className="learn-more">
                                    Explore Tech <ArrowRight size={14} />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us: The Genuineness Part */}
            <section className="why-us-section section-padding">
                <div className="container why-us-grid">
                    <div className="why-us-content">
                        <h2 className="section-title">Built on <span className="text-gradient">Integrity.</span></h2>
                        <p className="section-description">
                            Makebetter Technologies isn't just about code; it's about commitment.
                            We deliver genuine solutions that are tested, secure, and scalable.
                        </p>
                        <div className="usp-list">
                            {[
                                { title: 'Full Transparency', text: 'Clear documentation and honest timelines.' },
                                { title: 'Security First', text: 'Vulnerability testing and data privacy by design.' },
                                { title: 'Long-term Support', text: 'We partner with you for the lifecycle of your product.' }
                            ].map((usp, i) => (
                                <div key={i} className="usp-item">
                                    <CheckCircle2 size={24} className="usp-icon" />
                                    <div>
                                        <h4>{usp.title}</h4>
                                        <p>{usp.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="why-us-visual">
                        <div className="visual-graphic glass">
                            <Workflow size={48} className="icon-main" />
                            <div className="nodes">
                                <Database size={24} className="node" />
                                <MessageSquare size={24} className="node" />
                                <Globe size={24} className="node" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Process Section */}
            <section className="process-section section-padding glass">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Our <span className="text-gradient">Methodology</span></h2>
                        <p className="section-subtitle">A structured approach to ensure your AI projects reach production successfully.</p>
                    </div>

                    <div className="process-grid">
                        {process.map((step, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="process-card"
                            >
                                <div className="step-num">{step.step}</div>
                                <h3>{step.title}</h3>
                                <p>{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
