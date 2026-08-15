'use client'
import React, { useEffect, useRef, useState } from 'react';
import dot from '../../../public/images/dot.svg';
import bg from '../../../public/images/bgm.jpg';
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
import Head from 'next/head';



function MachineryLoans() {
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

    const equipmentData = [
        { sector: "Manufacturing & Engineering", equipment: "CNC Machines, Lathes, Injection Molding, Laser Cutters, Tooling equipment." },
        { sector: "Healthcare & Diagnostics", equipment: "MRI/CT Scanners, X-ray units, Ultrasound machines, Advanced Lab Equipment." },
        { sector: "Printing & Packaging", equipment: "Offset printing presses, Flexographic machines, Corrugation and Corrugated Box makers." },
        { sector: "Food Processing", equipment: "Industrial ovens, Bottling lines, Cold storage systems, Packaging units." },
        { sector: "Textiles", equipment: "Automated Looms, Spinning machines, Industrial Dyeing and Stitching equipment." },
    ];

    const eligibilityData = [
        { criteria: "Business Constitution", description: "Sole Proprietorships, Partnerships, LLPs, and Private Limited Companies." },
        { criteria: "Business Vintage", description: "Minimum 3 years of active operations in the same line of business." },
        { criteria: "Turnover", description: "Minimum annual turnover of ₹50 Lakhs with audited financial statements." },
        { criteria: "Credit Score", description: "Good repayment history with a preferred CIBIL score of 700+ for promoters." },
    ];

    return (
        <div ref={containerRef} className='page-content nse-page'>
            {windowWidth <500 ? (<ClosiongNav/>) : (<InnerNav/>) }
            <Head>
                <title>Machinery Loans - Dhumavati Consulting LLP | Equipment Financing up to ₹5 Crores</title>
                <meta 
                    name="description" 
                    content="Get machinery loans up to ₹5 Crores for your business. Equipment financing for manufacturing, healthcare, printing, food processing, and textiles. Apply now with minimal collateral." 
                />
            </Head>
            <section className="gallery" data-scroll-section>
                {/* Banner Section */}
                <div className="col-12 about-img-c">
                    <div className="about-img center" style={{
                        backgroundImage: `url(${bg.src})`,
                    }}>
                        <h1 data-scroll data-scroll-speed="2" data-scroll-repeat="true">Machinery Loans</h1>
                    </div>
                </div>

                {/* Content Section */}
                <div className="row posotion-container">
                    <div className="col-12 fund-page-content" style={{ paddingTop: '5rem' }}>

                        {/* Title */}
                        <h1 className="page-main-title mb-4">MACHINERY LOANS</h1>

                        {/* Hero Description */}
                        <div className="about-section">
                            <h2 className="heading mb-4">Grow Your Company. Upgrade Your Technology.</h2>
                            <div className="about-content">
                                <p><em>terms and conditions apply. Lending at the sole discretion of the lenders.</em></p>
                                <p><strong>Machinery Loans up to ₹5 Crores with Minimal Collateral.</strong></p>
                                <p>Whether you are expanding production, replacing outdated equipment, or automating your assembly line, our tailored <strong>Machinery & Equipment Loans</strong> give your business the financial muscle it needs to scale without draining your working capital.</p>
                            </div>
                        </div>

                        {/* Why Choose Our Machinery Loans */}
                        <div className="about-section">
                            <h2 className="heading mb-4">Why Choose Our Machinery Loans?</h2>
                            <div className="about-content">
                                <p>We understand that in manufacturing, timing is everything. Our loan structures are designed to keep your production lines moving.</p>
                                <ul style={{ paddingLeft: '1.5rem', marginBottom: '0.8rem' }}>
                                    <li><strong>High Quantum of Finance:</strong> Access funding from <strong>₹10 Lakhs up to ₹5 Crores</strong> depending on your business vintage and financial profile.</li>
                                    <li><strong>Flexible Repayment Tenures:</strong> Comfortable repayment windows ranging from <strong>12 to 60 months</strong>, aligning perfectly with your machinery's productive lifespan.</li>
                                    <li><strong>Competitive Interest Rates:</strong> Highly attractive rates tailored to MSMEs, starting from competitive industry benchmarks (linked to current ROI/MCLR).</li>
                                    <li><strong>Direct Vendor Payouts:</strong> We disburse funds directly to your machinery manufacturer or supplier, ensuring seamless delivery and setup.</li>
                                </ul>
                            </div>
                        </div>

                        {/* What We Fund */}
                        <div className="fundamentals-section">
                            <h2 className="heading mb-4">What We Fund</h2>
                            <div className="about-content">
                                <p>We provide financing for both imported and indigenous (Indian-manufactured) machinery across diverse sectors:</p>
                            </div>
                            <div className="table-responsive">
                                <table className="data-table">
                                    <thead>
                                        <tr>
                                            <th>Sector</th>
                                            <th>Eligible Equipment</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {equipmentData.map((item, index) => (
                                            <tr key={index}>
                                                <td><strong>{item.sector}</strong></td>
                                                <td>{item.equipment}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Eligibility Criteria */}
                        <div className="fundamentals-section">
                            <h2 className="heading mb-4">Eligibility Criteria</h2>
                            <div className="about-content">
                                <p>We keep our entry barriers realistic so that genuine, growing businesses can get funded quickly.</p>
                            </div>
                            <div className="table-responsive">
                                <table className="data-table">
                                    <thead>
                                        <tr>
                                            <th>Criteria</th>
                                            <th>Description</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {eligibilityData.map((item, index) => (
                                            <tr key={index}>
                                                <td><strong>{item.criteria}</strong></td>
                                                <td>{item.description}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Documentation Checklist */}
                        <div className="about-section">
                            <h2 className="heading mb-4">Documentation Checklist</h2>
                            <div className="about-content">
                                <p>Keep these documents ready for lightning-fast processing:</p>
                                
                                <p><strong>1. Know Your Customer (KYC) - Step 1.</strong></p>
                                <p>PAN Card and Aadhaar Card of the promoters/directors, along with Company PAN and Certificate of Incorporation/LLP agreement.</p>
                                
                                <p><strong>2. Financial Proofs - Step 2.</strong></p>
                                <p>Audited financial statements (Balance Sheet, P&L account) for the last <strong>2 to 3 years</strong>, along with ITR filings.</p>
                                
                                <p><strong>3. Banking Streams - Step 3.</strong></p>
                                <p>Latest <strong>12 months' bank statements</strong> of the primary business operative account, along with recent GST returns (GSTR-1 and GSTR-3B).</p>
                                
                                <p><strong>4. Machinery Details - Step 4.</strong></p>
                                <p>A valid <strong>Proforma Invoice</strong> or commercial quotation from the machinery vendor detailing the technical specs and cost breakdown.</p>
                            </div>
                        </div>

                        {/* Disclaimer */}
                        <div className="about-section" style={{ background: '#f8f9fa', borderColor: '#ddd' }}>
                            <h2 className="heading mb-4">Disclaimer</h2>
                            <div className="about-content">
                                <p><em>"The information, content, and comparison data provided on this website regarding machinery loans and equipment financing are for general informational purposes only. They do not constitute professional financial, legal, tax, or investment advice. Loan terms, interest rates, and structures vary based on business profiles and lender policies. Users should consult with their chartered accountants, financial advisors, or legal counsel before executing any loan or hypothecation agreements."</em></p>
                                <p>We have tie ups with Lenders for Machinery Loans.</p>
                                <p><strong>Please call us at 8655811111 or email us at d@dconsult.in</strong></p>
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

export default MachineryLoans;