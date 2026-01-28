import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    X, ArrowRight, CheckCircle2, Trophy,
    Users, Rocket, Sparkles, BarChart3,
    Puzzle, Lightbulb, Code2
} from 'lucide-react';
import { Link } from 'react-router-dom';
import './Projects.css';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            id: 1,
            title: 'Lumina LLM',
            category: 'NLP & LLMs',
            image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=800&q=80',
            description: 'Custom fine-tuned Llama-3 model for automated clinical documentation.',
            fullDescription: 'Lumina LLM is a breakthrough in clinical productivity. By fine-tuning Llama-3-70B on 10M+ anonymized medical records, we created a model that understands complex medical terminology and automates documentation with 98% accuracy. The system uses DPO (Direct Preference Optimization) to align with medical ethics and standard practices.',
            techStack: ['Llama-3', 'PyTorch', 'LoRA', 'vLLM', 'FastAPI'],
            challenges: [
                'Maintaining HIPAA compliance during model inference.',
                'Reducing medical hallucination rate to near-zero.',
                'Fine-tuning on extremely dense and technical medical datasets.'
            ],
            results: [
                '98% accuracy in clinical coding.',
                '60% reduction in documentation time for physicians.',
                'Zero-latency real-time transcription and tagging.'
            ]
        },
        {
            id: 2,
            title: 'Sentenai RAG',
            category: 'AI Infrastructure',
            image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc48?auto=format&fit=crop&w=800&q=80',
            description: 'Advanced multi-modal retrieval system connecting 10TB of corporate data.',
            fullDescription: 'Sentenai is a sophisticated RAG (Retrieval-Augmented Generation) pipeline designed for large-scale enterprise data. It handles multi-modal inputs including PDFs, Excel sheets, and even recorded meeting audio, providing a unified natural language interface for corporate knowledge.',
            techStack: ['Pinecone', 'LangChain', 'OpenAI', 'Python', 'Docker'],
            challenges: [
                'Processing and indexing 10TB of disparate data formats.',
                'Implementing semantic routing for high-precision retrieval.',
                'Handling real-time data updates without full re-indexing.'
            ],
            results: [
                'Sub-200ms document retrieval across billions of tokens.',
                '95% accuracy in complex cross-document reasoning.',
                'Automated 80% of internal knowledge base queries.'
            ]
        },
        {
            id: 3,
            title: 'Visionary AI',
            category: 'Computer Vision',
            image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
            description: 'Real-time safety monitoring system using YOLOv8 for industrial warehouses.',
            fullDescription: 'Visionary AI brings intelligence to the factory floor. By deploying optimized YOLOv8 models on edge devices, the system monitors for safety violations (e.g., missing helmets, forklift proximity) in real-time, preventing accidents before they occur.',
            techStack: ['YOLOv8', 'TensorRT', 'C++', 'NVIDIA Jetson', 'OpenCV'],
            challenges: [
                'Running high-FPS inference on resource-constrained edge devices.',
                'Ensuring reliability under varying industrial lighting conditions.',
                'Integrating with legacy CCTV infrastructure.'
            ],
            results: [
                '40% reduction in workplace accidents in 6 months.',
                '99.5% accuracy in person and equipment detection.',
                'Real-time alerts triggered in under 30ms.'
            ]
        },
        {
            id: 4,
            title: 'Agentic Sales',
            category: 'AI Agents',
            image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80',
            description: 'Autonomous B2B agents that qualify leads and manage sales cycles.',
            fullDescription: 'Agentic Sales is a fleet of autonomous AI agents built using multi-agent orchestration. These agents can browse the web to research leads, draft personalized outreach, and even handle complex scheduling negotiations without human intervention.',
            techStack: ['LangGraph', 'GPT-4o', 'Python', 'Redis', 'Web-search Tools'],
            challenges: [
                'Orchestrating multi-agent collaboration and memory.',
                'Ensuring agents stay within defined ethical and brand boundaries.',
                'Handling edge cases in conversational negotiations.'
            ],
            results: [
                '300% increase in lead generation efficiency.',
                'Managed 1,000+ complex sales conversations monthly.',
                'Avg. response time reduced from 4 hours to 2 minutes.'
            ]
        },
        {
            id: 5,
            title: 'FinCredit LLM',
            category: 'Finance AI',
            image: 'https://images.unsplash.com/photo-1560472355-536de3962603?auto=format&fit=crop&w=800&q=80',
            description: 'Next-gen credit scoring and risk assessment using fine-tuned financial LLMs.',
            fullDescription: 'FinCredit LLM revolutionizes risk assessment for digital lenders. By analyzing non-traditional data points through a fine-tuned financial-domain LLM, we provide real-time credit scoring with deep behavioral insights that traditional systems miss.',
            techStack: ['BloombergGPT', 'PyTorch', 'AWS SageMaker', 'Kubernetes'],
            challenges: [
                'Eliminating bias in automated credit decisioning.',
                'Processing high volumes of transactional data in real-time.',
                'Integrating with legacy banking core systems.'
            ],
            results: [
                '25% reduction in default rates.',
                'Instant credit decisioning for 95% of applicants.',
                'Identified $2M+ in potential fraud attempts in month one.'
            ]
        },
        {
            id: 6,
            title: 'DocuParse AI',
            category: 'Document Intelligence',
            image: 'https://images.unsplash.com/photo-1568667256549-094345857637?auto=format&fit=crop&w=800&q=80',
            description: 'Automated extraction and analysis of complex legal and financial documents.',
            fullDescription: 'DocuParse AI is an enterprise-grade document intelligence platform. It uses multi-modal LLMs and advanced OCR to extract, categorize, and analyze data from thousands of unstructured documents, including complex legal contracts and multi-lingual invoices.',
            techStack: ['Tesseract', 'LayoutLM', 'OpenAI API', 'Elasticsearch'],
            challenges: [
                'Handling highly unstructured and low-quality document scans.',
                'Maintaining 99.9% extraction accuracy for financial figures.',
                'Scaling to process 100,000+ documents per hour.'
            ],
            results: [
                '90% reduction in manual data entry time.',
                'Processed over 5M+ documents with high precision.',
                'Automated compliance checking for 10,000+ contracts.'
            ]
        }
    ];

    const industries = [
        "FinTech", "HealthTech", "Industrial AI", "E-commerce",
        "EdTech", "Legal AI", "Logistics", "Cybersecurity"
    ];

    const testimonials = [
        {
            text: "Makebetter's RAG implementation completely changed how we access our internal knowledge. It's like having a 24/7 expert on every project.",
            author: "Sarah Johnson",
            role: "CTO, GlobalRetail",
            avatarWidth: 48
        },
        {
            text: "The LLM they fine-tuned for our medical use case is terrifyingly accurate. It has saved our doctors hundreds of hours.",
            author: "Dr. Alan Chen",
            role: "Director of Innovation, MedGroup",
            avatarWidth: 48
        }
    ];

    return (
        <div className="projects-page">
            {/* Header Section */}
            <section className="projects-hero section-padding pb-0">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="section-header"
                    >
                        <h1 className="section-title">Portfolio of <span className="text-gradient">Intelligence</span></h1>
                        <p className="section-subtitle">
                            We push the boundaries of what's possible with AI.
                            From fine-tuning LLMs to deploying real-time vision systems at the edge.
                        </p>
                    </motion.div>

                    <div className="projects-stats glass">
                        {[
                            { icon: <CheckCircle2 />, label: 'AI Models Deployed', value: '45+' },
                            { icon: <Users />, label: 'Neural Pipelines', value: '120+' },
                            { icon: <Trophy />, label: 'Accuracy Gain', value: '98%' },
                            { icon: <Rocket />, label: 'Efficiency ROI', value: '3x' }
                        ].map((stat, i) => (
                            <div key={i} className="proj-stat-item">
                                <div className="p-stat-icon">{stat.icon}</div>
                                <div>
                                    <h4>{stat.value}</h4>
                                    <p>{stat.label}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Industry Ticker & Grid Entry consolidated */}
                    <div className="projects-grid-intro-embedded">
                        <div className="industry-ticker-wrapper">
                            <span className="ticker-label">Sector Expertise:</span>
                            <div className="industry-ticker">
                                <div className="ticker-track">
                                    {[...industries, ...industries].map((industry, i) => (
                                        <span key={i} className="industry-tag">{industry}</span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="grid-header">
                            <div className="header-line"></div>
                            <h2 className="featured-title">Featured <span className="text-secondary">Case Studies</span></h2>
                            <div className="header-line"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Grid Section */}
            <section className="section-padding pt-0">
                <div className="container">
                    <div className="projects-grid">
                        {projects.map((project, idx) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="project-card glass clickable-card"
                                onClick={() => setSelectedProject(project)}
                            >
                                <div className="project-image">
                                    <img src={project.image} alt={project.title} />
                                    <div className="project-quick-view">
                                        <span>View Case Study <ArrowRight size={16} /></span>
                                    </div>
                                </div>
                                <div className="project-content">
                                    <span className="project-category">{project.category}</span>
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="testimonials-section section-padding glass">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title h-smaller">Client <span className="text-gradient">Success</span></h2>
                        <p className="section-subtitle">What the industry leaders say about working with Makebetter.</p>
                    </div>
                    <div className="testimonials-grid">
                        {testimonials.map((t, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="testimonial-card glass"
                            >
                                <p className="t-text">"{t.text}"</p>
                                <div className="t-author">
                                    <div className="t-avatar"></div>
                                    <div>
                                        <h4>{t.author}</h4>
                                        <p>{t.role}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="projects-cta section-padding">
                <div className="container">
                    <div className="cta-box glass">
                        <h2>Ready to build something <span className="text-gradient">Extraordinary?</span></h2>
                        <p>Let's collaborate on your next big technology project and drive real business impact.</p>
                        <div className="cta-actions">
                            <Link to="/contact" className="btn btn-primary lg">Start a Project <ArrowRight size={20} /></Link>
                            <Link to="/services" className="btn btn-secondary lg">Explore AI Services</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Modal Backdrop and Content */}
            <AnimatePresence>
                {selectedProject && (
                    <div className="modal-backdrop" onClick={() => setSelectedProject(null)}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="project-modal glass"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button className="modal-close" onClick={() => setSelectedProject(null)}>
                                <X size={24} />
                            </button>

                            <div className="modal-scroll-area">
                                <div className="modal-header-visual">
                                    <img src={selectedProject.image} alt={selectedProject.title} />
                                    <div className="modal-header-overlay">
                                        <span className="project-category">{selectedProject.category}</span>
                                        <h1>{selectedProject.title}</h1>
                                    </div>
                                </div>

                                <div className="modal-body">
                                    <div className="modal-main-content">
                                        <section>
                                            <h3 className="modal-sec-title"><Lightbulb size={20} className="icon" /> Overview</h3>
                                            <p className="modal-text">{selectedProject.fullDescription}</p>
                                        </section>

                                        <section>
                                            <h3 className="modal-sec-title"><Puzzle size={20} className="icon" /> Key Challenges</h3>
                                            <ul className="modal-list">
                                                {selectedProject.challenges.map((c, i) => (
                                                    <li key={i}>{c}</li>
                                                ))}
                                            </ul>
                                        </section>

                                        <section>
                                            <h3 className="modal-sec-title"><BarChart3 size={20} className="icon" /> Impact & Results</h3>
                                            <div className="results-grid">
                                                {selectedProject.results.map((r, i) => (
                                                    <div key={i} className="result-card">
                                                        <CheckCircle2 size={16} className="icon" />
                                                        <span>{r}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </section>
                                    </div>

                                    <aside className="modal-sidebar">
                                        <div className="sidebar-box glass">
                                            <h4><Code2 size={18} /> Tech Stack</h4>
                                            <div className="modal-tech-stack">
                                                {selectedProject.techStack.map((tech, i) => (
                                                    <span key={i} className="tech-pill">{tech}</span>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="sidebar-box glass">
                                            <h4><Sparkles size={18} /> Status</h4>
                                            <p>Completed & Deployed</p>
                                        </div>
                                    </aside>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Projects;
