'use client'
import React, { useEffect, useRef, useState } from 'react';
import dot from '../../../public/images/dot.svg';
import bg from '../../../public/images/ac.jpeg';
import '../aboutUs/about.css';
import ClosiongNav from '../components/ClosingNav/ClosiongNav';
import { gsap } from 'gsap';
import InnerNav from '../components/Nav/InnerNav';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import 'gsap/dist/gsap';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
gsap.registerPlugin(ScrollTrigger);
import Footer from '../components/footer/Footer';
import Enquiry from '../components/Enquiry/Enquiry';



function AcquisitionFinancing() {
    const containerRef = useRef(null);
    const router = useRouter();

    useEffect(() => {
        let scroll;
        import("locomotive-scroll").then((locomotiveModule) => {
            scroll = new locomotiveModule.default({
                el: containerRef.current,
                smooth: true,
                direction: 'vertical',
            });
        });
        return () => {
            if (scroll) scroll.destroy();
        }
    }, []);

    const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1000);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setWindowWidth(window.innerWidth);

            const handleResize = () => {
                setWindowWidth(window.innerWidth);
            };

            window.addEventListener("resize", handleResize);

            return () => {
                window.removeEventListener("resize", handleResize);
            };
        }
    }, []);

    // Key Features/Statistics Data
    const keyStatsData = [
        { label: "Maximum Leverage Available", value: "Up to 75% of Acquisition Value" },
        { label: "Minimum Net Worth Requirement", value: "₹500 Crore" },
        { label: "Profitability Track Record", value: "3 Consecutive Years" },
        { label: "Debt-to-Equity Ratio", value: "3:1 (Consolidated)" },
        { label: "Transaction Types", value: "Domestic & Cross-Border" },
        { label: "Funding Timeline", value: "30-90 Days" },
        { label: "Ticket Size", value: "₹50 Cr - ₹5000+ Cr" },
        { label: "Regulatory Compliance", value: "SEBI, RBI, Companies Act" },
    ];

    // Solutions Data
    const solutionsData = [
        {
            title: "Onshore Strategic Debt",
            description: "Tailored funding for domestic acquisitions, leveraging corporate balance sheets or target cash flows to optimize capital structures."
        },
        {
            title: "Bridge Financing & Sponsor Funding",
            description: "Short-term interim funding mechanisms designed to ensure deal certainty and rapid execution while long-term take-out structures (Equity/Bonds) are finalized."
        },
        {
            title: "Mezzanine & Structured Credit",
            description: "Subordinated or quasi-equity instruments designed to fill the funding gap between senior debt and promoter equity, minimizing equity dilution."
        },
        {
            title: "Cross-Border & Offshore Financing",
            description: "Specialized structuring via Foreign Direct Investment (FDI) Special Purpose Vehicles (SPVs) and External Commercial Borrowings (ECBs) for international acquirers targeting Indian assets."
        }
    ];

    // Regulatory Framework Parameters
    const regulatoryData = [
        { parameter: "Maximum Leverage", detail: "Debt up to 75% of total acquisition value" },
        { parameter: "Control Thresholds", detail: "26%, 51%, 75%, 90% equity thresholds" },
        { parameter: "Eligibility Criteria", detail: "₹500 Crore+ net worth, 3-year profitability" },
        { parameter: "Bank Participation", detail: "Indian commercial banks eligible under 2026 RBI framework" },
    ];

    // Process Steps
    const processSteps = [
        { 
            step: "Diligence & Valuation", 
            description: "Independent assessment of target valuation (aligned with SEBI/Independent valuer mandates) and target cash flow stability."
        },
        { 
            step: "Structural Engineering", 
            description: "Designing optimal Debt-to-Equity ratios (ensuring compliance with the required 3:1 consolidated caps where applicable)."
        },
        { 
            step: "Regulatory Clearance", 
            description: "Mitigating risks associated with charge creations, ROC registrations, and related-party clauses."
        },
        { 
            step: "Syndication & Drawdown", 
            description: "Smooth execution and capital disbursement to ensure your deal closes on schedule."
        }
    ];

    return (
        <div ref={containerRef} className='page-content nse-page'>
            {windowWidth < 500 ? (<ClosiongNav />) : (<InnerNav />)}
            
            <section className="gallery" data-scroll-section>
                {/* Banner Section */}
                <div className="col-12 about-img-c">
                    <div className="about-img center" style={{
                        backgroundImage: `url(${bg.src})`,
                    }}>
                        <h1 data-scroll data-scroll-speed="2" data-scroll-repeat="true" style={{color:"#bdbdbd"}}>Acquisition Financing</h1>
                    </div>
                </div>

                {/* Content Section */}
                <div className="row posotion-container">
                    <div className="col-12 fund-page-content" style={{ paddingTop: '5rem' }}>

                        {/* Title */}
                        <h1 className="page-main-title">ACQUISITION FINANCING</h1>

                        {/* Subtitle/Hero Text */}
                        <div className="about-section">
                            <div className="about-content" style={{ textAlign: 'center', marginBottom: '2rem' }}>
                                <h2 style={{ fontSize: '1.8rem', fontWeight: '600', marginBottom: '1rem' }}>
                                    Fueling Strategic Growth. Financing Bold Acquisitions.
                                </h2>
                                <p style={{ fontSize: '1.1rem', lineHeight: '1.8', maxWidth: '900px', margin: '0 auto' }}>
                                    Turn your market expansion and consolidation strategies into reality. At Dhumavati Consulting LLP, 
                                    we provide bespoke, high-value acquisition financing solutions tailored to navigate India's evolving 
                                    regulatory landscape and unlock long-term corporate value.
                                </p>
                            </div>
                        </div>

                        {/* Why Partner With Us Section */}
                        <div className="about-section">
                            <h2 className="section-title">Why Partner With Us?</h2>
                            <div className="about-content">
                                <p style={{ marginBottom: '1.5rem' }}>
                                    Value creation through Mergers & Acquisitions (M&A) is intricate and demands deep structural expertise. 
                                    We bridge the gap between your growth ambitions and the complex financial continuum.
                                </p>
                                <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                    <li style={{ padding: '0.5rem 1rem', background: '#f5f5f5', borderRadius: '5px' }}>
                                        <strong>Deep Market Intel:</strong> Proven track record in navigating Indian cross-border and domestic M&A landscapes.
                                    </li>
                                    <li style={{ padding: '0.5rem 1rem', background: '#f5f5f5', borderRadius: '5px' }}>
                                        <strong>Regulatory Precision:</strong> Seamless alignment with the latest SEBI, Companies Act, and RBI frameworks.
                                    </li>
                                    <li style={{ padding: '0.5rem 1rem', background: '#f5f5f5', borderRadius: '5px' }}>
                                        <strong>Custom Structuring:</strong> From bridge loans to complex multi-tiered debt, we design funding models aligned with your post-acquisition cash flows.
                                    </li>
                                    <li style={{ padding: '0.5rem 1rem', background: '#f5f5f5', borderRadius: '5px' }}>
                                        <strong>Balance Sheet Strength:</strong> Ability to underwrite, hold, and syndicate high-quantum credit facilities.
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Key Statistics/Fundamentals Section */}
                        <div className="fundamentals-section">
                            <h2 className="section-title">Key Financing Parameters</h2>
                            <div className="fundamentals-grid">
                                <div className="fundamentals-left" style={{ width: '100%' }}>
                                    {keyStatsData.map((item, index) => (
                                        <div className="fundamental-item" key={index}>
                                            <span className="fundamental-label">{item.label}</span>
                                            <span className="fundamental-value">{item.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Our Acquisition Financing Solutions */}
                        <div className="about-section">
                            <h2 className="section-title">Our Acquisition Financing Solutions</h2>
                            <p style={{ marginBottom: '2rem', fontSize: '1.1rem' }}>
                                We specialize in arranging, structuring, and syndicating capital for mid-to-large-ticket corporate acquisitions.
                            </p>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                                {solutionsData.map((solution, index) => (
                                    <div key={index} style={{ 
                                        padding: '1.5rem', 
                                        background: '#f8f9fa', 
                                        borderRadius: '8px',
                                        borderLeft: '4px solid #1a237e'
                                    }}>
                                        <h3 style={{ color: '#1a237e', marginBottom: '0.8rem', fontSize: '1.2rem' }}>
                                            {index + 1}. {solution.title}
                                        </h3>
                                        <p style={{ lineHeight: '1.6' }}>{solution.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Regulatory Framework Section */}
                        <div className="subsidiaries-section">
                            <h2 className="section-title">Navigating India's Evolving Regulatory Landscape</h2>
                            <div className="about-content">
                                <p style={{ marginBottom: '1.5rem' }}>
                                    The Indian M&A market is entering a golden era of liberalization. We help eligible corporate acquirers 
                                    aggressively capitalize on the <strong>2026 RBI Liberalization Framework for Acquisition Financing</strong>, 
                                    allowing Indian commercial banks to participate in high-value strategic takeovers.
                                </p>
                                <h3 style={{ marginBottom: '1rem' }}>Key Framework Parameters We Support:</h3>
                            </div>
                            <div className="table-responsive">
                                <table className="data-table">
                                    <thead>
                                        <tr>
                                            <th>Parameter</th>
                                            <th>Detail</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {regulatoryData.map((item, index) => (
                                            <tr key={index}>
                                                <td><strong>{item.parameter}</strong></td>
                                                <td>{item.detail}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Process Section */}
                        <div className="about-section">
                            <h2 className="section-title">Our Process: From Intent to Integration</h2>
                            <div style={{ 
                                display: 'flex', 
                                justifyContent: 'space-between', 
                                marginBottom: '2rem',
                                flexWrap: 'wrap',
                                gap: '0.5rem'
                            }}>
                                {processSteps.map((step, index) => (
                                    <span key={index} style={{ 
                                        background: '#1a237e', 
                                        color: 'white', 
                                        padding: '0.5rem 1rem', 
                                        borderRadius: '20px',
                                        fontSize: '0.9rem',
                                        flex: '1',
                                        textAlign: 'center',
                                        minWidth: '150px'
                                    }}>
                                        {step.step}
                                    </span>
                                ))}
                            </div>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                                {processSteps.map((step, index) => (
                                    <div key={index} style={{ 
                                        padding: '1.5rem', 
                                        background: '#f8f9fa', 
                                        borderRadius: '8px'
                                    }}>
                                        <h3 style={{ color: '#1a237e', marginBottom: '0.5rem' }}>
                                            {index + 1}. {step.step}
                                        </h3>
                                        <p style={{ lineHeight: '1.6' }}>{step.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Contact/CTA Section */}
                        <div className="about-section" style={{ 
                            background: '#f0f2f5', 
                            padding: '2rem', 
                            borderRadius: '10px',
                            marginTop: '2rem'
                        }}>
                            <h2 className="section-title" style={{ textAlign: 'center' }}>Let's Start a Conversation</h2>
                            <p style={{ textAlign: 'center', fontSize: '1.1rem', marginBottom: '2rem' }}>
                                Ready to scale your business through strategic acquisition? Connect with our M&A Structured Finance desk today.
                            </p>
                            <div style={{ 
                                display: 'flex', 
                                justifyContent: 'center', 
                                gap: '3rem',
                                flexWrap: 'wrap'
                            }}>
                                <div style={{ textAlign: 'center' }}>
                                    <strong style={{ display: 'block', marginBottom: '0.5rem' }}>📧 Email Us</strong>
                                    <a href="mailto:d@dconsult.in" style={{ color: '#1a237e', fontSize: '1.1rem' }}>d@dconsult.in</a>
                                </div>
                                <div style={{ textAlign: 'center' }}>
                                    <strong style={{ display: 'block', marginBottom: '0.5rem' }}>📞 Call Directly</strong>
                                    <a href="tel:+918655811111" style={{ color: '#1a237e', fontSize: '1.1rem' }}>+91 8655811111</a>
                                </div>
                            </div>
                            <div style={{ 
                                marginTop: '2rem', 
                                padding: '1rem', 
                                background: '#fff3cd', 
                                borderRadius: '5px',
                                fontSize: '0.9rem',
                                textAlign: 'center'
                            }}>
                                <strong>Disclaimer:</strong> Financing is subject to credit approval, independent valuations, and compliance 
                                with prevailing Reserve Bank of India (RBI) and SEBI guidelines.
                            </div>
                        </div>

                    </div>
                </div>

                <Footer />
            </section>
            <Enquiry />
        </div>
    );
}

export default AcquisitionFinancing;