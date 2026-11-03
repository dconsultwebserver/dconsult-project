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

function NCDEXUnlistedStocks() {
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

    // Fundamentals Data
    const fundamentalsData = [
        { label: "National Commodity & Derivatives Exchange Limited Unlisted Shares Price", value: "₹ 440 Per Equity Share" },
        { label: "Lot Size", value: "500 Shares" },
        { label: "52 Week High", value: "₹ 525" },
        { label: "52 Week Low", value: "₹ 208" },
        { label: "Depository", value: "NSDL & CDSL" },
        { label: "PAN Number", value: "AABC19479D" },
        { label: "ISIN Number", value: "INE127001010" },
        { label: "CIN", value: "U51909MH2003PLC140116" },
        { label: "RTA", value: "Link Intime" },
    ];

    const rightFundamentals = [
        { label: "Market Cap (cr)", value: "₹ 4081" },
        { label: "P/E Ratio", value: "17.29" },
        { label: "P/B Ratio", value: "5.37" },
        { label: "Debt to Equity", value: "0" },
        { label: "ROE (%)", value: "31.48" },
        { label: "Book Value", value: "84.7" },
        { label: "Face Value", value: "10" },
        { label: "Total Shares", value: "89694973" },
    ];

    // Subsidiaries Data
    const subsidiariesData = [
        { name: "NCDEX e-Markets Limited", place: "India", ownership: "100" },
        { name: "NCDEX Services Limited", place: "India", ownership: "100" },
        { name: "NCDEX Foundation", place: "India", ownership: "100" },
    ];

    // P&L Statement Data
    const pnlData = [
        { metric: "Revenue", 2022: "115", 2023: "104", 2024: "96", 2025: "88" },
        { metric: "Cost of Material Consumed", 2022: "0", 2023: "11", 2024: "0", 2025: "0" },
        { metric: "Change in Inventory", 2022: "0", 2023: "0", 2024: "0", 2025: "0" },
        { metric: "Gross Margins", 2022: "100", 2023: "89.42", 2024: "100", 2025: "100" },
        { metric: "Employee Benefits Expenses", 2022: "81", 2023: "88", 2024: "91", 2025: "96" },
        { metric: "Other Expenses", 2022: "69", 2023: "71", 2024: "70", 2025: "75" },
        { metric: "EBITDA", 2022: "-35", 2023: "-66", 2024: "-65", 2025: "-83" },
        { metric: "OPM", 2022: "-30.43", 2023: "-63.46", 2024: "-67.71", 2025: "-94.32" },
        { metric: "Other Income", 2022: "45", 2023: "35", 2024: "58", 2025: "388" },
        { metric: "Finance Cost", 2022: "2", 2023: "1.5", 2024: "1.3", 2025: "1" },
        { metric: "D&A", 2022: "24", 2023: "25", 2024: "25", 2025: "25" },
        { metric: "EBIT", 2022: "-59", 2023: "-91", 2024: "-90", 2025: "-108" },
        { metric: "EBIT Margins", 2022: "-51.3", 2023: "-87.5", 2024: "-93.75", 2025: "-122.73" },
        { metric: "PBT", 2022: "-17", 2023: "-58", 2024: "-33", 2025: "279" },
        { metric: "PBT Margins", 2022: "-14.78", 2023: "-55.77", 2024: "-34.37", 2025: "317.05" },
        { metric: "Tax", 2022: "-5", 2023: "-16", 2024: "-5", 2025: "43" },
        { metric: "PAT", 2022: "-12", 2023: "-42", 2024: "-28", 2025: "236" },
        { metric: "NPM", 2022: "-10.43", 2023: "-40.38", 2024: "-29.17", 2025: "268.18" },
        { metric: "EPS", 2022: "-2.37", 2023: "-8.29", 2024: "-5.52", 2025: "46.57" },
    ];

    // Financial Ratios Data
    const ratiosData = [
        { metric: "Operating Profit Margin", 2022: "-30.43", 2023: "-63.46", 2024: "-67.71", 2025: "-94.32" },
        { metric: "Net Profit Margin", 2022: "-10.43", 2023: "-40.38", 2024: "-29.17", 2025: "268.18" },
        { metric: "Earning Per Share (Diluted)", 2022: "-2.37", 2023: "-8.29", 2024: "-5.52", 2025: "46.57" },
    ];

    // History Data
    const historyData = [
        { year: "2003", description: "NCDEX was established on April 23, 2003, as a public limited company. The Exchange began its operations on December 15, 2003, as an online commodities exchange specializing in agricultural and non-agricultural derivative products." },
        { year: "2015", description: "NCDEX transitioned to a deemed recognized stock exchange under the Securities Contracts (Regulation) Act, 1956, on September 28, 2015, regulated by the SEBI." },
        { year: "2020", description: "NCDEX launched options in goods, further expanding its product offerings and providing enhanced risk management tools for market participants." },
        { year: "2022", description: "NCDEX became the first Indian exchange to operate from a Tier-IV data center, ensuring secure and efficient trading operations." },
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
                        <h1 data-scroll data-scroll-speed="2" data-scroll-repeat="true">NCDEX Unlisted Stocks</h1>
                    </div>
                </div>

                {/* Content Section */}
                <div className="row posotion-container">
                    <div className="col-12 fund-page-content" style={{ paddingTop: '5rem' }}>

                        {/* Title */}
                        <h2 className="page-main-title">NCDEX UNLISTED STOCKS</h2>

                        {/* Fundamentals Section */}
                        <div className="fundamentals-section">
                            <h2 className="section-title">Fundamentals</h2>
                            <div className="fundamentals-grid">
                                <div className="fundamentals-left">
                                    {fundamentalsData.map((item, index) => (
                                        <div className="fundamental-item" key={index}>
                                            <span className="fundamental-label">{item.label}</span>
                                            <span className="fundamental-value">{item.value}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="fundamentals-right">
                                    {rightFundamentals.map((item, index) => (
                                        <div className="fundamental-item" key={index}>
                                            <span className="fundamental-label">{item.label}</span>
                                            <span className="fundamental-value">{item.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* About Section */}
                        <div className="about-section">
                            <h2 className="section-title">About National Commodity & Derivatives Exchange (NCDEX) Limited Unlisted Shares</h2>
                            <div className="about-content">
                                <p>The National Commodity & Derivatives Exchange Limited (NCDEX) is a prominent online commodities exchange, specializing in a diverse range of agricultural and non-agricultural derivative products. Established on April 23, 2003, as a public limited company, NCDEX began its operations on December 15, 2003. The Exchange transitioned to a deemed recognized stock exchange under the Securities Contracts (Regulation) Act, 1956, on September 28, 2015, regulated by the SEBI.</p>
                                <p><strong>Mission:</strong> NCDEX serves as a reliable platform for price discovery and risk management, consistently offering a wide array of derivative products that meet the needs of various stakeholders in the commodity value chain.</p>
                                <p><strong>Functions:</strong> NCDEX prices are considered benchmarks in the domestic and global commodities markets. The exchange offers commodity futures, options in goods, and index futures. NCDEX is the first Indian exchange to operate from a Tier-IV data center, ensuring secure and efficient trading.</p>
                                <p>NCDEX's online platform enhances market transparency, helping farmers better price their products. It reduces the role of middlemen by providing direct market access to farmers and traders. Contracts standardize quality specifications, increasing awareness and improving crop quality. The exchange enables electronic trading of agricultural commodities, simplifying transactions for traders.</p>
                                <p><strong>Key Shareholders:</strong> Life Insurance Corporation of India (LIC), National Bank for Agriculture and Rural Development (NABARD), National Stock Exchange of India Limited (NSE), Canara Bank, Punjab National Bank (PNB), and Indian Farmers Fertiliser Cooperative Limited (IFFCO).</p>
                            </div>
                        </div>

                        {/* History Section */}
                        <div className="history-section">
                            <h2 className="section-title">History of NCDEX</h2>
                            <div className="history-timeline">
                                {historyData.map((item, index) => (
                                    <div className="history-item" key={index}>
                                        <div className="history-year">{item.year}</div>
                                        <div className="history-description">{item.description}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Subsidiaries Section */}
                        <div className="subsidiaries-section">
                            <h2 className="section-title">Subsidiaries of NCDEX</h2>
                            <div className="table-responsive">
                                <table className="data-table">
                                    <thead>
                                        <tr>
                                            <th>Name of Entity</th>
                                            <th>Place of Incorporation</th>
                                            <th>Ownership %</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {subsidiariesData.map((item, index) => (
                                            <tr key={index}>
                                                <td>{item.name}</td>
                                                <td>{item.place}</td>
                                                <td>{item.ownership}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Why NCDEX incurred losses Section */}
                        <div className="about-section">
                            <h2 className="section-title">Why NCDEX incurred losses in FY22-23?</h2>
                            <div className="about-content">
                                <p><strong>Q1. What was the impact of commodity suspensions at the start of FY 2022-23 on NCDEX?</strong></p>
                                <p>The suspensions of key commodities had an adverse effect on the overall performance of the exchange.</p>
                                
                                <p><strong>Q2. What was the Average Daily Traded Value (ADTV) for NCDEX in FY 2022-23?</strong></p>
                                <p>The ADTV for FY 2022-23 was ₹ 834 Crores.</p>
                                
                                <p><strong>Q3. How did the Average Daily Open Interest (ADOI) change in FY 2022-23 compared to the previous year?</strong></p>
                                <p>The ADOI increased to ₹ 2,069 Crores in FY 2022-23, marking a 6% growth from ₹ 1,947 Crores in the previous financial year.</p>
                                
                                <p><strong>Q4. How did the ADTV for continuing contracts change in FY 2022-23?</strong></p>
                                <p>The ADTV for continuing contracts saw a marginal reduction.</p>
                                
                                <p><strong>Q5. What does the increase in Open Interest indicate?</strong></p>
                                <p>The increase in Open Interest indicates strong support from value chain participants.</p>
                                
                                <p><strong>Q6. What percentage of the Exchange's volumes were previously contributed by suspended commodities?</strong></p>
                                <p>Suspended commodities previously contributed to 70% of the Exchange's volumes.</p>
                                
                                <p><strong>Q7. What was the impact on deposits and deliveries due to the loss of suspended contracts?</strong></p>
                                <p>The impact on deposits and deliveries was contained to a 20% loss despite the suspensions.</p>
                            </div>
                        </div>

                        {/* Wrap P&L and Ratios side by side */}
                        <div className="pnl-ratios-wrapper">

                            {/* P&L Statement Section */}
                            <div className="pnl-section">
                                <div className="heading">P&L Statement (in cr)</div>
                                <div className="table-responsive">
                                    <table className="data-table">
                                        <thead>
                                            <tr>
                                                <th>P&L Statement</th>
                                                <th>2022</th><th>2023</th><th>2024</th><th>2025</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {pnlData.map((item, index) => {
                                                const rowClass =
                                                    item.metric === 'EBITDA' ? 'row-ebitda' :
                                                    item.metric === 'EBIT'   ? 'row-ebit'   :
                                                    item.metric === 'PBT'    ? 'row-pbt'    :
                                                    item.metric === 'PAT'    ? 'row-pat'    : '';
                                                return (
                                                    <tr key={index} className={rowClass}>
                                                        <td className="metric-name">{item.metric}</td>
                                                        <td>{item['2022']}</td>
                                                        <td>{item['2023']}</td>
                                                        <td>{item['2024']}</td>
                                                        <td>{item['2025']}</td>
                                                    </tr>
                                                );
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* Financial Ratios Section */}
                            <div className="ratios-section">
                                <div className="heading">Financial Ratios</div>
                                <div className="table-responsive">
                                    <table className="data-table">
                                        <thead>
                                            <tr>
                                                <th>Financial Ratios</th>
                                                <th>2022</th><th>2023</th><th>2024</th><th>2025</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {ratiosData.map((item, index) => (
                                                <tr key={index}>
                                                    <td className="metric-name">{item.metric}</td>
                                                    <td>{item['2022']}</td>
                                                    <td>{item['2023']}</td>
                                                    <td>{item['2024']}</td>
                                                    <td>{item['2025']}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
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

export default NCDEXUnlistedStocks;