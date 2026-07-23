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

function PolymatechUnlistedStocks() {
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
        { label: "Polymatech Electronics Limited Unlisted Shares Price", value: "₹ 72 Per Equity Share" },
        { label: "Lot Size", value: "1000 Shares" },
        { label: "52 Week High", value: "₹ 565" },
        { label: "52 Week Low", value: "₹ 54" },
        { label: "Depository", value: "NSDL & CDSL" },
        { label: "PAN Number", value: "AAECP29810" },
        { label: "ISIN Number", value: "INEGOLN01029" },
        { label: "CIN", value: "U23107TX2007PLC063706" },
        { label: "RTA", value: "Link Intime" },
    ];

    const rightFundamentals = [
        { label: "Market Cap (cr)", value: "₹ 2869" },
        { label: "P/E Ratio", value: "11.96" },
        { label: "P/B Ratio", value: "3.57" },
        { label: "Debt to Equity", value: "0.03" },
        { label: "ROE (%)", value: "30.28" },
        { label: "Book Value", value: "2034" },
        { label: "Face Value", value: "2" },
        { label: "Total Shares", value: "398438975" },
    ];

    // Subsidiaries Data
    const subsidiariesData = [
        { name: "Polymatech Electronics Manufacturing Private Limited", place: "India", ownership: "100" },
        { name: "Polymatech Semiconductor Private Limited", place: "India", ownership: "100" },
    ];

    // P&L Statement Data
    const pnlData = [
        { metric: "Revenue", 2021: "45", 2022: "126", 2023: "649", 2024: "1221" },
        { metric: "Cost of Material Consumed", 2021: "-14", 2022: "102", 2023: "468", 2024: "780" },
        { metric: "Change in Inventory", 2021: "-1", 2022: "-18", 2023: "-16", 2024: "-79" },
        { metric: "Gross Margins", 2021: "24.44", 2022: "18.05", 2023: "27.89", 2024: "35.12" },
        { metric: "Employee Benefits Expenses", 2021: "0.6", 2022: "0.7", 2023: "1", 2024: "27" },
        { metric: "Other Expenses", 2021: "0.6", 2022: "1.5", 2023: "12", 2024: "189" },
        { metric: "EBITDA", 2021: "10.8", 2022: "39.8", 2023: "184", 2024: "304" },
        { metric: "OPM", 2021: "24", 2022: "31.59", 2023: "28.35", 2024: "24.9" },
        { metric: "Other Income", 2021: "0.5", 2022: "0.5", 2023: "0.6", 2024: "17" },
        { metric: "Finance Cost", 2021: "0.8", 2022: "2.4", 2023: "3", 2024: "0.13" },
        { metric: "D&A", 2021: "3", 2022: "3", 2023: "16", 2024: "50" },
        { metric: "EBIT", 2021: "7.8", 2022: "36.8", 2023: "168", 2024: "254" },
        { metric: "EBIT Margins", 2021: "17.33", 2022: "29.21", 2023: "25.89", 2024: "20.8" },
        { metric: "PBT", 2021: "7", 2022: "35", 2023: "167", 2024: "270" },
        { metric: "PBT Margins", 2021: "15.86", 2022: "27.78", 2023: "25.73", 2024: "22.11" },
        { metric: "Tax", 2021: "0", 2022: "0", 2023: "0", 2024: "30" },
        { metric: "PAT", 2021: "7", 2022: "35", 2023: "167", 2024: "240" },
        { metric: "NPM", 2021: "15.56", 2022: "27.78", 2023: "25.73", 2024: "19.66" },
        { metric: "EPS", 2021: "11", 2022: "5.52", 2023: "23.26", 2024: "30.15" },
    ];

    // Financial Ratios Data
    const ratiosData = [
        { metric: "Operating Profit Margin", 2021: "24", 2022: "31.59", 2023: "28.35", 2024: "24.9" },
        { metric: "Net Profit Margin", 2021: "15.56", 2022: "27.78", 2023: "25.73", 2024: "19.66" },
        { metric: "Earning Per Share (Diluted)", 2021: "11", 2022: "5.52", 2023: "23.26", 2024: "30.15" },
    ];

    // History Data
    const historyData = [
        { year: "2007", description: "Polymatech Electronics Limited was incorporated as a subsidiary of Polymatech Company Ltd., Japan, specializing in manufacturing keypads for mobile phones." },
        { year: "2011-12", description: "The company faced significant challenges as mobile phone keypads became obsolete, leading to declining demand, losses, and operational struggles." },
        { year: "2018", description: "Polymatech was completely acquired by Mr. Eswara Rao Nandam and his wife Mrs. Uma Nandam, Chennai-based entrepreneurs, from Polymer Asset Management Company (Japan) and Polymatech (Malaysia) who held 52.20% and 47.80% respectively." },
        { year: "2019", description: "The new management shifted the company's focus to manufacturing semiconductor chips for LEDs and Luminaires, transforming the business direction." },
        { year: "2020", description: "The company generated approximately ₹2 Crores in revenue with a loss of ₹27 Lakhs, marking the beginning of its turnaround journey." },
        { year: "2021", description: "Revenue surged to ₹45 Crores with a Profit After Tax (PAT) of ₹7 Crores, demonstrating significant growth." },
        { year: "2022", description: "Revenue reached ₹126 Crores with a PAT of ₹34 Crores. The company announced plans to expand manufacturing capacity from 300 million chips per year to 20 billion chips per year by 2024." },
        { year: "2023", description: "Polymatech's shares were trading at ₹525 per share in the unlisted market, with a market capitalization of ₹2,869 Crores." },
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
                        <h1 data-scroll data-scroll-speed="2" data-scroll-repeat="true">Polymatech Unlisted Stocks</h1>
                    </div>
                </div>

                {/* Content Section */}
                <div className="row posotion-container">
                    <div className="col-12 fund-page-content" style={{ paddingTop: '5rem' }}>

                        {/* Title */}
                        <h1 className="page-main-title">POLYMETECH ELECTRONICS UNLISTED STOCKS</h1>

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
                            <h2 className="section-title">About Polymatech Electronics Limited Unlisted Shares</h2>
                            <div className="about-content">
                                <p><strong>1. Introduction</strong></p>
                                <p>Polymatech Electronics Limited is an Indian company that was incorporated in 2007 as a subsidiary of Polymatech Company Ltd., Japan. However, in 2018, it was completely acquired by Mr. Eswara Rao Nandam and his wife, Mrs. Uma Nandam, Chennai-based entrepreneurs. Mr. Eswara Rao Nandam, an alumnus of BITS Pilani, is a key promoter in the company. PEL specializes in manufacturing LED semiconductor chips and has a production facility in the SIPCOT Hi-Tech SEZ in Ongadam Kancheepuram, Tamil Nadu. The company aims to become a world leader in the manufacturing of semiconductor components.</p>

                                <p><strong>2. Previous Ownership and Acquisitions</strong></p>
                                <p>Before the 2018 acquisition by Mr. Eswara Rao Nandam and his wife, Polymatech was controlled by Polymer Asset Management Company from Japan and Polymatech (Malaysia) with shareholdings of 52.20% and 47.80%, respectively. The company faced challenges in the past, as it was involved in manufacturing and supplying keypads for mobile phones, which became obsolete around 2011-12. Due to declining demand, the company incurred losses and struggled to sustain its operations.</p>

                                <p><strong>3. Post-Acquisition Transformation</strong></p>
                                <p>After the acquisition in 2019, the new management shifted the company's focus to manufacturing semiconductor chips for LEDs and Luminaires. Polymatech currently produces Opto Semiconductors used in high-power lighting systems, ICs, and Sanitizing LEDs for hospital applications.</p>

                                <p><strong>4. Financial Performance</strong></p>
                                <p>Since the acquisition, Polymatech unlisted share has witnessed significant growth in its financial performance. In FY20, the company generated approximately ₹2 Crores in revenue with a loss of ₹27 Lakhs. However, in FY21, the revenue surged to ₹45 Crores with a profit after tax (PAT) of ₹7 Crores. The growth trend continued in FY22, with revenue reaching ₹126 Crores and a PAT of ₹34 Crores.</p>

                                <p><strong>5. Manufacturing Capacity Expansion</strong></p>
                                <p>Polymatech is planning to expand its manufacturing capacity from the current 300 million chips per year to 20 billion chips per year by 2024. This expansion is crucial to accommodate the increasing demand for its semiconductor chips. The total money to be deployed would be ~$1 Billion. Polymatech Electronics manufactures various products including:</p>
                                <ul style={{ paddingLeft: '1.5rem', marginBottom: '0.8rem' }}>
                                    <li>a) Micro Controllers</li>
                                    <li>b) Wireless Chips</li>
                                    <li>c) Logic Chips</li>
                                    <li>d) Memory Chips</li>
                                    <li>e) LED Chips</li>
                                </ul>

                                <p><strong>6. Shareholding and Valuation</strong></p>
                                <p>As of 31st March 2022, Mr. Eswara Rao Nandam and Mrs. Uma Nandam were the primary investors in PEL. In the unlisted market, the company's shares were trading at Rs. 400 per share, resulting in a market capitalization of ₹2,540 Crores based on approximately 6.35 Crore outstanding shares. The EPS for FY22 based on these outstanding shares stands at 5.35, and the P/E ratio is 74x. However, as per media news in FY22-23, some other investors have invested in the company.</p>

                                <p><strong>7. Management and Board Structure</strong></p>
                                <p>The company is supported by Japanese nationals, who serve as Chief Technology Officers (CTOs) and are also members of the board of PEL. The acquisition by Mr. Eswara Rao Nandam and his wife in 2019 brought new leadership and direction to the company, resulting in its successful transformation.</p>

                                <p><strong>8. Future Prospects</strong></p>
                                <p>With the growing demand for LED semiconductor chips in various industries, including lighting systems and sanitization applications, Polymatech technology has been well-positioned for further expansion and profitability. The company's commitment to increasing its manufacturing capacity and its focus on innovative technologies will likely drive future growth.</p>

                                <p><strong>9. Conclusion</strong></p>
                                <p>Polymatech Electronics Limited has experienced a remarkable turnaround since its acquisition by Mr. Eswara Rao Nandam and Mrs. Uma Nandam. The company's shift to LED semiconductor chip manufacturing has proved to be a successful strategy, leading to substantial revenue and profit growth in recent years. With its expansion plans and favorable market dynamics, PEL holds strong potential for continued success in the semiconductor industry.</p>

                                <p><strong>Polymatech Electronics Limited Unlisted Shares Price</strong></p>
                                <p>As of July 2023, Polymatech Electronics Limited Unlisted Shares Price is ₹525/share.</p>
                            </div>
                        </div>

                        {/* History Section */}
                        <div className="history-section">
                            <h2 className="section-title">History of Polymatech Electronics</h2>
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
                            <h2 className="section-title">Subsidiaries of Polymatech Electronics</h2>
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
                                                <th>2021</th><th>2022</th><th>2023</th><th>2024</th>
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
                                                        <td>{item['2021']}</td>
                                                        <td>{item['2022']}</td>
                                                        <td>{item['2023']}</td>
                                                        <td>{item['2024']}</td>
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
                                                <th>2021</th><th>2022</th><th>2023</th><th>2024</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {ratiosData.map((item, index) => (
                                                <tr key={index}>
                                                    <td className="metric-name">{item.metric}</td>
                                                    <td>{item['2021']}</td>
                                                    <td>{item['2022']}</td>
                                                    <td>{item['2023']}</td>
                                                    <td>{item['2024']}</td>
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

export default PolymatechUnlistedStocks;