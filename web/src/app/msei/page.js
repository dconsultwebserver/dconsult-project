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

function MSEIUnlistedStocks() {
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
        { label: "Metropolitan Stock Exchange (MSEI) Unlisted Shares Price", value: "₹ 3.15 Per Equity Share" },
        { label: "Lot Size", value: "10000 Shares" },
        { label: "52 Week High", value: "₹ 14" },
        { label: "52 Week Low", value: "₹ 2.0009" },
        { label: "Depository", value: "NSDL & CDSL" },
        { label: "PAN Number", value: "AAFCM6942F" },
        { label: "ISIN Number", value: "INE312K01010" },
        { label: "CIN", value: "U65999MH2008PLC185856" },
        { label: "RTA", value: "KFin Technology" },
    ];

    const rightFundamentals = [
        { label: "Market Cap (cr)", value: "₹ 3.65" },
        { label: "P/E Ratio", value: "N/A" },
        { label: "P/B Ratio", value: "8.75" },
        { label: "Debt to Equity", value: "0" },
        { label: "ROE (%)", value: "-8.58" },
        { label: "Book Value", value: "0.36" },
        { label: "Face Value", value: "1" },
        { label: "Total Shares", value: "11000217033" },
    ];

    // Subsidiaries Data
    const subsidiariesData = [
        { name: "Metropolitan Clearing Corporation of India Limited (MCCIL)", place: "India", ownership: "86.94" },
        { name: "MCX SX KYC Registration Agency Limited (MRAL)", place: "India", ownership: "100" },
    ];

    // P&L Statement Data
    const pnlData = [
        { metric: "Revenue", 2022: "10", 2023: "9", 2024: "7", 2025: "4.3" },
        { metric: "Cost of Material Consumed", 2022: "17", 2023: "23", 2024: "29", 2025: "21" },
        { metric: "Change in Inventory", 2022: "0", 2023: "0", 2024: "0", 2025: "0" },
        { metric: "Gross Margins", 2022: "-70", 2023: "-155.56", 2024: "-314.29", 2025: "-388.37" },
        { metric: "Employee Benefits Expenses", 2022: "20", 2023: "19", 2024: "16", 2025: "15" },
        { metric: "Other Expenses", 2022: "8", 2023: "16", 2024: "16", 2025: "10" },
        { metric: "EBITDA", 2022: "-35", 2023: "-49", 2024: "-54", 2025: "-41.7" },
        { metric: "OPM", 2022: "-350", 2023: "-544.44", 2024: "-771.43", 2025: "-969.77" },
        { metric: "Other Income", 2022: "15", 2023: "40", 2024: "14", 2025: "13" },
        { metric: "Finance Cost", 2022: "0.6", 2023: "0.4", 2024: "1", 2025: "0.26" },
        { metric: "D&A", 2022: "10", 2023: "11", 2024: "6", 2025: "5.1" },
        { metric: "EBIT", 2022: "-45", 2023: "-60", 2024: "-60", 2025: "-46.8" },
        { metric: "EBIT Margins", 2022: "-450", 2023: "-666.67", 2024: "-857.14", 2025: "-1088.37" },
        { metric: "PBT", 2022: "-31", 2023: "-20", 2024: "-48", 2025: "-35" },
        { metric: "PBT Margins", 2022: "-310", 2023: "-222.22", 2024: "-685.71", 2025: "-813.95" },
        { metric: "Tax", 2022: "-1", 2023: "-1.3", 2024: "1", 2025: "-1" },
        { metric: "PAT", 2022: "-30", 2023: "-18.7", 2024: "-49", 2025: "-34" },
        { metric: "NPM", 2022: "-300", 2023: "-207.78", 2024: "-700", 2025: "-790.7" },
        { metric: "EPS", 2022: "-0.06", 2023: "-0.04", 2024: "-0.1", 2025: "-0.06" },
    ];

    // Financial Ratios Data
    const ratiosData = [
        { metric: "Operating Profit Margin", 2022: "-350", 2023: "-544.44", 2024: "-771.43", 2025: "-969.77" },
        { metric: "Net Profit Margin", 2022: "-300", 2023: "-207.78", 2024: "-700", 2025: "-790.7" },
        { metric: "Earning Per Share (Diluted)", 2022: "-0.06", 2023: "-0.04", 2024: "-0.1", 2025: "-0.06" },
    ];

    // History Data
    const historyData = [
        { year: "2008", description: "Metropolitan Stock Exchange of India Limited (MSEI) was incorporated as a full-service national level Stock Exchange with a license to operate in Equity, Equity Derivatives, Currency Derivatives, Debt, and SME Platform." },
        { year: "2010", description: "MSEI launched its live trading platform in all segments except SME, establishing itself as a comprehensive exchange in the Indian financial market." },
        { year: "2012", description: "MSEI established Metropolitan Clearing Corporation of India Limited (MCCIL) as its subsidiary for clearing and settlement of deals in multi-asset classes carried out at MSEI." },
        { year: "2015", description: "MSEI diversified its shareholding between corporates, banks, and individuals, with Banks/FIs holding 23.64%, Corporates holding 29.94%, and Individual Investors holding 40.47%." },
        { year: "2018", description: "MSEI strengthened its KYC infrastructure through MCX SX KYC Registration Agency Limited (MRAL), maintaining a comprehensive database for members of the exchange under the Know Your Client (KYC) Guidelines." },
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
                        <h1 data-scroll data-scroll-speed="2" data-scroll-repeat="true">MSEI Unlisted Stocks</h1>
                    </div>
                </div>

                {/* Content Section */}
                <div className="row posotion-container">
                    <div className="col-12 fund-page-content" style={{ paddingTop: '5rem' }}>

                        {/* Title */}
                        <h2 className="page-main-title">METROPOLITAN STOCK EXCHANGE (MSEI) UNLISTED STOCKS</h2>

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
                            <h2 className="section-title">About Metropolitan Stock Exchange (MSEI) Unlisted Shares</h2>
                            <div className="about-content">
                                <p>Metropolitan Stock Exchange of India Limited (MSEI) is a full-service national level Stock Exchange with a license to operate in Equity, Equity Derivatives, Currency Derivatives, Debt, and SME Platform. It has a live trading platform in all segments except SME.</p>
                                
                                <p>MSEI has two subsidiaries: Metropolitan Clearing Corporation of India Limited (MCCIL) and MCX SX KYC Registration Agency Limited (MRAL) in which it holds 86.94% and 100% respectively. MCCIL is in the business of clearing and settlement of deals in multi-asset classes carried out at MSEI and MRAL is in the business of maintaining a database for members of the exchange and other under the Know Your Client (KYC) Guidelines.</p>
                                
                                <p><strong>Key Highlights</strong></p>
                                
                                <p><strong>(i)</strong> The ownership of MSEI is diversified between corporates, banks, and individuals.</p>
                                
                                <p><strong>(ii)</strong> The shareholding of MSEI consists of Banks/FIs at 23.64% which includes leading public and private sector banks like State Bank of India, Bank of Baroda, Punjab National Bank, Axis Bank, HDFC Bank, etc.</p>
                                
                                <p><strong>(iii)</strong> Leading Corporates and Institutions hold around 29.94% which includes Edelweiss Commodities Services Limited, ILSFS Financial Services Limited, Multi Commodity Exchange of India Limited, etc.</p>
                                
                                <p><strong>(iv)</strong> Individual Investors hold around 40.47% which includes leading investors like Mr. Rakesh Jhunjhunwala, Mr. Radhakishan Damani, Mr. Nemish Shah among others.</p>
                            </div>
                        </div>

                        {/* History Section */}
                        <div className="history-section">
                            <h2 className="section-title">History of MSEI</h2>
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
                            <h2 className="section-title">Subsidiaries of MSEI</h2>
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

export default MSEIUnlistedStocks;