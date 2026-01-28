import React from 'react';
import { motion } from 'framer-motion';
import {
    BrainCircuit, Cpu, Database, Network,
    Search, MessageSquare, Zap, BarChart,
    Code2, Cloud, ShieldCheck, Workflow
} from 'lucide-react';
import './Services.css';

const Services = () => {
    const aiDeepDive = [
        {
            icon: <BrainCircuit size={40} />,
            title: 'LLM Fine-Tuning',
            desc: 'Specialized training of Large Language Models on proprietary business data to ensure domain-specific accuracy and brand voice consistency.',
            features: ['Quantization', 'PEFT/LoRA', 'Dataset Curation']
        },
        {
            icon: <Network size={40} />,
            title: 'RAG Pipelines',
            desc: 'Retrieval-Augmented Generation systems that connect LLMs to your private Knowledge Base for hallucination-free AI responses.',
            features: ['Vector Databases', 'Semantic Search', 'Embedding Models']
        },
        {
            icon: <MessageSquare size={40} />,
            title: 'AI Agents & Copilots',
            desc: 'Autonomous agents capable of executing complex multi-step workflows, from automated customer support to internal coding assistants.',
            features: ['Tool Use/Function Calling', 'Multi-agent Systems', 'Stateful Memory']
        }
    ];

    const techStack = [
        { name: 'PyTorch', category: 'Framework' },
        { name: 'TensorFlow', category: 'Framework' },
        { name: 'HuggingFace', category: 'Library' },
        { name: 'OpenAI', category: 'API' },
        { name: 'Pinecone', category: 'Database' },
        { name: 'LangChain', category: 'Orchestration' },
        { name: 'AWS SageMaker', category: 'Cloud' },
        { name: 'Azure AI', category: 'Cloud' }
    ];

    const roadmap = [
        { title: 'Discovery', desc: 'Identifying high-impact AI use cases for your business.' },
        { title: 'Feasibility', desc: 'Data audit and model selection for optimal performance.' },
        { title: 'MVP Development', desc: 'Building and testing core AI functionality.' },
        { title: 'Scaling', desc: 'Full-scale deployment and continuous refinement.' }
    ];

    const classicServices = [
        { icon: <Cloud />, title: 'Cloud Infrastructure', desc: 'Modernizing legacy systems for the AI era.' },
        { icon: <ShieldCheck />, title: 'AI Security', desc: 'Ensuring your AI models are robust against adversarial attacks.' },
        { icon: <Code2 />, title: 'Full-stack Solutions', desc: 'Building the interfaces that power AI interactions.' },
        { icon: <BarChart />, title: 'Data Analytics', desc: 'Turning data into insights for AI readiness.' }
    ];

    return (
        <div className="services-page">
            {/* Hero Section */}
            <section className="services-hero section-padding">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="section-header"
                    >
                        <h1 className="section-title">AI & Engineering <span className="text-gradient">Precision</span></h1>
                        <p className="section-subtitle">
                            We don't just use AI; we build production-grade intelligence that scales
                            your business beyond human limits.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* AI Deep Dive */}
            <section className="deep-dive-section section-padding glass">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title h-smaller">Core <span className="text-gradient">AI Specializations</span></h2>
                    </div>
                    <div className="deep-dive-grid">
                        {aiDeepDive.map((service, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="deep-card glass"
                            >
                                <div className="deep-icon">{service.icon}</div>
                                <h3>{service.title}</h3>
                                <p>{service.desc}</p>
                                <div className="deep-features">
                                    {service.features.map((f, i) => (
                                        <span key={i} className="feature-pill">{f}</span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tech Stack */}
            <section className="tech-stack-section section-padding">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title h-smaller">Our <span className="text-gradient">AI Tech Stack</span></h2>
                    </div>
                    <div className="tech-grid">
                        {techStack.map((tech, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -5 }}
                                className="tech-item glass"
                            >
                                <span className="tech-name">{tech.name}</span>
                                <span className="tech-cat">{tech.category}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* AI Implementation Roadmap */}
            <section className="roadmap-section section-padding glass">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title h-smaller">AI <span className="text-gradient">Roadmap</span></h2>
                    </div>
                    <div className="roadmap-flex">
                        {roadmap.map((item, i) => (
                            <div key={i} className="roadmap-item">
                                <div className="roadmap-point">
                                    <div className="point-inner"></div>
                                </div>
                                <div className="roadmap-info">
                                    <h4>{item.title}</h4>
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Classic Capabilities */}
            <section className="classic-section section-padding">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title h-smaller">Supporting <span className="text-gradient">Capabilities</span></h2>
                    </div>
                    <div className="classic-grid">
                        {classicServices.map((service, idx) => (
                            <div key={idx} className="classic-card">
                                <div className="classic-icon">{service.icon}</div>
                                <div className="classic-text">
                                    <h3>{service.title}</h3>
                                    <p>{service.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
