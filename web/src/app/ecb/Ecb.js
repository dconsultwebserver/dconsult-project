'use client'
import React, { useEffect, useRef, useState } from 'react';
import dot from '../../../public/images/dot.svg';
import bg from '../../../public/images/bg1.jpg';
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



function ECBPage() {
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

    const frameworkData = [
        { 
            feature: "Borrowing Limit", 
            automatic: "Up to USD 1 Billion (or 300% of the company's net worth, whichever is higher).", 
            approval: "Any amount exceeding the limits specified under the Automatic Route." 
        },
        { 
            feature: "Minimum Average Maturity Period (MAMP)", 
            automatic: "3 Years by default. *(Reduced to 1-3 years for the manufacturing sector for borrowings up to USD 150 million).*", 
            approval: "Any structures requiring shorter maturity durations than prescribed." 
        },
        { 
            feature: "Eligible Borrowers", 
            automatic: "All registered/incorporated corporate entities in India (excluding individuals).", 
            approval: "Entities under corporate insolvency (CIRP) unless pre-approved in the resolution blueprint." 
        },
        { 
            feature: "Recognized Lenders", 
            automatic: "Any resident of an FATF or IOSCO-compliant country, or international financial branches in IFSCs.", 
            approval: "Specific non-resident entities not covered under general parameters." 
        },
    ];

    const stepsData = [
        { step: "Step 1", title: "Term Sheet Finalization", description: "Negotiate commercial agreements, interest margins, and collateral requirements with the offshore recognized lender." },
        { step: "Step 2", title: "AD Bank Verification", description: "Submit the formal loan application along with Form ECB to your designated Authorised Dealer (AD) Category-I Bank in India to verify structural compliance." },
        { step: "Step 3", title: "Obtaining the LRN", description: "The AD Bank forwards the compliance checklist to the RBI to secure a unique Loan Registration Number (LRN). No drawdown of international funds can take place until the LRN is successfully generated." },
        { step: "Step 4", title: "Drawdown & Compliance Tracking", description: "Inflow the funds into an explicit foreign currency account. Ensure continuous monthly compliance reporting using the updated Form ECB-2 Return via the RBI's electronic reporting gateway." },
    ];

    return (
        <div ref={containerRef} className='page-content nse-page'>
            {windowWidth <500 ? (<ClosiongNav/>) : (<InnerNav/>) }
            
            <section className="gallery" data-scroll-section>
                {/* Banner Section */}
                <div className="col-12 about-img-c">
                    <div className="about-img center" style={{
                        backgroundImage: `url(${bg.src})`,
                    }}>
                        <h1 data-scroll data-scroll-speed="2" data-scroll-repeat="true">ECB</h1>
                    </div>
                </div>

                {/* Content Section */}
                <div className="row posotion-container">
                    <div className="col-12 fund-page-content" style={{ paddingTop: '5rem' }}>

                        {/* Title */}
                        <h1 className="page-main-title">EXTERNAL COMMERCIAL BORROWINGS (ECB)</h1>

                        {/* Hero Section */}
                        <div className="about-section">
                            <h2 className="heading mb-4">Unlocking Global Capital for Indian Enterprise Growth</h2>
                            <div className="about-content">
                                <p>For corporate entities looking to scale, relying entirely on domestic debt can limit financial flexibility. <strong>External Commercial Borrowings (ECB)</strong> allow eligible Indian corporate borrowers to tap into global liquid markets, securing funding in foreign currencies or Indian Rupees (INR) at highly competitive international pricing structures.</p>
                                <p>With the Reserve Bank of India's (RBI) sweeping updates introduced via the <strong>2026 Amended ECB Regulations</strong>, accessing international debt markets has been significantly streamlined. The framework expands borrowing capacities, eases maturity mandates, and relaxes traditional pricing caps to boost the ease of doing business.</p>
                            </div>
                        </div>

                        {/* Key Pillars of the Updated ECB Framework */}
                        <div className="about-section">
                            <h2 className="heading mb-4">Key Pillars of the Updated ECB Framework</h2>
                            <div className="about-content">
                                <p>The updated regulatory environment divides offshore debt structures into two primary financial instruments:</p>
                                
                                <p><strong>1. Foreign Currency Denominated ECB (FCY)</strong></p>
                                <ul style={{ paddingLeft: '1.5rem', marginBottom: '0.8rem' }}>
                                    <li><strong>Underlying Currencies:</strong> Any freely convertible foreign currency (USD, EUR, GBP, JPY, etc.).</li>
                                    <li><strong>Forms of Borrowing:</strong> Bank loans, securitized instruments (fixed/floating rate bonds, notes), Trade Credits (TC) beyond 3 years, Foreign Currency Convertible Bonds (FCCBs), and Foreign Currency Exchangeable Bonds (FCEBs).</li>
                                </ul>
                                
                                <p><strong>2. Indian Rupee Denominated ECB (INR)</strong></p>
                                <ul style={{ paddingLeft: '1.5rem', marginBottom: '0.8rem' }}>
                                    <li><strong>Underlying Currency:</strong> Indian Rupee (INR).</li>
                                    <li><strong>Forms of Borrowing:</strong> Bank loans, securitized instruments, trade credits, and Rupee-denominated bonds (formerly known as Masala Bonds), alongside non-convertible or optionally convertible preference shares.</li>
                                    <li><strong>Exchange Risk:</strong> The currency risk is entirely borne by the foreign lender.</li>
                                </ul>
                            </div>
                        </div>

                        {/* Strategic Limits & Parameter Matcher */}
                        <div className="fundamentals-section">
                            <h2 className="heading mb-4">Strategic Limits & Parameter Matcher</h2>
                            <div className="table-responsive">
                                <table className="data-table">
                                    <thead>
                                        <tr>
                                            <th>Feature</th>
                                            <th>Automatic Route (No Prior RBI Approval)</th>
                                            <th>Approval Route</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {frameworkData.map((item, index) => (
                                            <tr key={index}>
                                                <td><strong>{item.feature}</strong></td>
                                                <td>{item.automatic}</td>
                                                <td>{item.approval}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className="about-content" style={{ marginTop: '0.8rem' }}>
                                <p><em>*Note: Eligible borrowers already regulated directly by Indian financial sector regulators are granted special exemptions regarding specific domestic debt ratios.</em></p>
                            </div>
                        </div>

                        {/* Permitted & Prohibited End-Uses */}
                        <div className="about-section">
                            <h2 className="heading mb-4">Permitted & Prohibited End-Uses</h2>
                            <div className="about-content">
                                <p>The RBI utilizes a <strong>negative list</strong> framework for end-use. As long as your intended deployment isn't explicitly barred, you can utilize ECB proceeds for working capital, general corporate purposes, or capital expenditure.</p>
                                
                                <p><strong>🚫 Strictly Prohibited Activities:</strong></p>
                                <ul style={{ paddingLeft: '1.5rem', marginBottom: '0.8rem' }}>
                                    <li>Real estate activities (buying, selling, or renting commercial/residential properties or land).</li>
                                    <li>Investment in capital markets or equity investments in India.</li>
                                    <li>On-lending to entities for the above-restricted activities.</li>
                                </ul>
                            </div>
                        </div>

                        {/* Navigating the Approval & Regulatory Compliance Process */}
                        <div className="about-section">
                            <h2 className="heading mb-4">Navigating the Approval & Regulatory Compliance Process</h2>
                            <div className="about-content">
                                <p>To successfully pull down international capital under the updated regulations, borrowers must adhere to a strict chronological workflow.</p>
                                
                                {stepsData.map((item, index) => (
                                    <div key={index} style={{ marginBottom: '0.8rem' }}>
                                        <p><strong>{item.step} - {item.title}</strong></p>
                                        <p>{item.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* How We Help Your Business */}
                        <div className="about-section">
                            <h2 className="heading mb-4">How We Help Your Business Secure Cross-Border Debt</h2>
                            <div className="about-content">
                                <p>Navigating complex Foreign Exchange Management Act (FEMA) guidelines and structural debt compliance requires continuous expert monitoring. Our corporate finance and advisory team steps in to deliver seamless execution:</p>
                                <ul style={{ paddingLeft: '1.5rem', marginBottom: '0.8rem' }}>
                                    <li><strong>Structuring Advice:</strong> Assessing your financial balance sheets to determine optimum FCY vs. INR pricing dynamics and MAMP alignments.</li>
                                    <li><strong>Lender Due Diligence:</strong> Ensuring your offshore counterparties meet the stringent FATF and IOSCO eligibility standards.</li>
                                    <li><strong>Liaison & Execution:</strong> Managing documentation mapping with AD Category-I Banks to secure rapid LRN generation.</li>
                                    <li><strong>Ongoing Compliances:</strong> Streamlining your monthly ECB-2 financial report filings to avoid structural delays or compoundable FEMA regulatory penalties.</li>
                                </ul>
                            </div>
                        </div>

                        {/* Disclaimers */}
                        <div className="about-section" style={{ background: '#f8f9fa', borderColor: '#ddd' }}>
                            <h2 className="heading mb-4">Disclaimers</h2>
                            <div className="about-content">
                                <p><strong>Regulatory Updates & Non-Guarantee of Compliance</strong></p>
                                <p><em>"The information provided on this website regarding External Commercial Borrowings (ECB) is for general informational purposes only. The regulatory framework governing ECBs in India, including guidelines issued by the Reserve Bank of India (RBI) and under the Foreign Exchange Management Act (FEMA), is dynamic and subject to frequent amendments, circulars, and notifications. We do not guarantee that the information on this website reflects the most current legal or regulatory updates. Any reliance you place on such information is strictly at your own risk."</em></p>
                                
                                <p><strong>No Professional Advice</strong></p>
                                <p><em>"The contents of this website do not constitute financial, legal, tax, or investment advice. Raising ECBs involves complex cross-border financial structures, hedging requirements, and strict end-use restrictions (such as prohibitions on real estate or capital market investments). Users are strongly advised to seek independent legal, financial, and tax counsel from qualified professional advisors or Authorized Dealer (AD) Category-I banks before entering into any ECB agreements or initiating any transactions."</em></p>
                                
                                <p><strong>No Guarantee of Funding or Approval</strong></p>
                                <p><em>"Listing, exploring, or calculating loan structures on this website does not guarantee approval under either the RBI Automatic Route or Approval Route. The final approval, assignment of Loan Registration Number (LRN), and terms of any ECB are solely at the discretion of the designated Authorized Dealer (AD) Bank, the Reserve Bank of India, and the respective overseas recognized lenders. We accept no liability for the rejection of any ECB application or variance in interest rate spreads."</em></p>
                                
                                <p><strong>Exchange Rate Volatility & Market Risk</strong></p>
                                <p><em>"Borrowing in foreign currency exposes the borrower to foreign exchange rate risks and currency fluctuations. While the website may provide illustrative exchange rates or calculators, these are for estimation purposes only. Borrowers are solely responsible for understanding and complying with RBI's mandatory hedging guidelines. We are not liable for any financial losses arising from currency devaluation, interest rate movements, or failed hedging strategies."</em></p>
                                
                                <p><strong>For details call us on 8655811111, 10 am to 7 pm Monday to Friday or email us at d@dconsult.in</strong></p>
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

export default ECBPage;