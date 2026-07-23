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

function OYOUnlistedStocks() {
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
        { label: "Oravel Stays Limited (OYO) Unlisted Shares Price", value: "₹ 28 Per Equity Share" },
        { label: "Lot Size", value: "1000 Shares" },
        { label: "52 Week High", value: "₹ 60" },
        { label: "52 Week Low", value: "₹ 28" },
        { label: "Depository", value: "NSDL & CDSL" },
        { label: "PAN Number", value: "AABC06063D" },
        { label: "ISIN Number", value: "INE561701021" },
        { label: "CIN", value: "U630900J2012PLC107088" },
        { label: "RTA", value: "Link Intime" },
    ];

    const rightFundamentals = [
        { label: "Market Cap (cr)", value: "₹ 40105" },
        { label: "P/E Ratio", value: "164.71" },
        { label: "P/B Ratio", value: "10.61" },
        { label: "Debt to Equity", value: "1.89" },
        { label: "ROE (%)", value: "6.47" },
        { label: "Book Value", value: "2.64" },
        { label: "Face Value", value: "1" },
        { label: "Total Shares", value: "14323364782" },
    ];

    // Subsidiaries Data
    const subsidiariesData = [
        { name: "OYO Hospitality Private Limited", place: "India", ownership: "100" },
        { name: "OYO International Pte. Ltd.", place: "Singapore", ownership: "100" },
        { name: "OYO Global Limited", place: "India", ownership: "100" },
        { name: "OYO Hotels & Homes Pvt. Ltd.", place: "India", ownership: "100" },
    ];

    // P&L Statement Data
    const pnlData = [
        { metric: "Revenue", 2022: "4781", 2023: "5464", 2024: "5389", 2025: "6253" },
        { metric: "Cost of Material Consumed", 2022: "0", 2023: "0", 2024: "0", 2025: "0" },
        { metric: "Change in Inventory", 2022: "0", 2023: "0", 2024: "0", 2025: "0" },
        { metric: "Gross Margins", 2022: "100", 2023: "100", 2024: "100", 2025: "100" },
        { metric: "Employee Benefits Expenses", 2022: "1862", 2023: "1549", 2024: "744", 2025: "616" },
        { metric: "Other Expenses", 2022: "4079", 2023: "4289", 2024: "3937", 2025: "4601" },
        { metric: "EBITDA", 2022: "-1160", 2023: "-374", 2024: "708", 2025: "1036" },
        { metric: "OPM", 2022: "-24.26", 2023: "-6.84", 2024: "13.14", 2025: "16.57" },
        { metric: "Other Income", 2022: "286", 2023: "49", 2024: "573", 2025: "-83" },
        { metric: "Finance Cost", 2022: "746", 2023: "681", 2024: "844", 2025: "959" },
        { metric: "D&A", 2022: "299", 2023: "280", 2024: "200", 2025: "484" },
        { metric: "EBIT", 2022: "-1459", 2023: "-654", 2024: "508", 2025: "552" },
        { metric: "EBIT Margins", 2022: "-30.52", 2023: "-11.97", 2024: "9.43", 2025: "8.83" },
        { metric: "PBT", 2022: "-1919", 2023: "-1286", 2024: "236", 2025: "-489" },
        { metric: "PBT Margins", 2022: "-40.14", 2023: "-23.54", 2024: "4.38", 2025: "-7.82" },
        { metric: "Tax", 2022: "23", 2023: "0", 2024: "6", 2025: "-734" },
        { metric: "PAT", 2022: "-1942", 2023: "-1286", 2024: "230", 2025: "245" },
        { metric: "NPM", 2022: "-40.62", 2023: "-23.54", 2024: "4.27", 2025: "3.92" },
        { metric: "EPS", 2022: "-14.63", 2023: "-9.68", 2024: "1.72", 2025: "0.36" },
    ];

    // Financial Ratios Data
    const ratiosData = [
        { metric: "Operating Profit Margin", 2022: "-24.26", 2023: "-6.84", 2024: "13.14", 2025: "16.57" },
        { metric: "Net Profit Margin", 2022: "-40.62", 2023: "-23.54", 2024: "4.27", 2025: "3.92" },
        { metric: "Earning Per Share (Diluted)", 2022: "-14.63", 2023: "-9.68", 2024: "1.72", 2025: "0.36" },
    ];

    // History Data
    const historyData = [
        { year: "2012", description: "OYO was incorporated with a vision to reshape the short-stay accommodation space and develop a unique two-sided technology platform focused on addressing key pain points of Patrons and Customers." },
        { year: "2013", description: "OYO launched its first hotel in India, marking the beginning of its journey in the hospitality sector." },
        { year: "2015", description: "OYO expanded its presence beyond India, entering international markets in Southeast Asia." },
        { year: "2018", description: "OYO became the largest hospitality chain in India and expanded into Europe with the acquisition of @Leisure Group." },
        { year: "2019", description: "OYO achieved significant global expansion with presence in more than 35 countries and over 157,344 storefronts listed on the platform." },
        { year: "2021", description: "OYO filed for an IPO, marking a significant milestone in the company's journey as a leading new-age technology platform in the global hospitality ecosystem." },
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
                        <h1 data-scroll data-scroll-speed="2" data-scroll-repeat="true">OYO Unlisted Stocks</h1>
                    </div>
                </div>

                {/* Content Section */}
                <div className="row posotion-container">
                    <div className="col-12 fund-page-content" style={{ paddingTop: '5rem' }}>

                        {/* Title */}
                        <h1 className="page-main-title">OYO UNLISTED STOCKS</h1>

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
                            <h2 className="section-title">About Oravel Stays Limited (OYO) Unlisted Shares</h2>
                            <div className="about-content">
                                <p><strong>Brief about OYO</strong></p>
                                <p>OYO is a leading, new-age technology platform empowering the large yet highly fragmented global hospitality ecosystem, according to RedSeer. They have been focused on reshaping the short-stay accommodation space since its incorporation in 2012 and have developed a unique two-sided technology platform focused on comprehensively addressing key pain points of the Patrons (being the owners, lessors and/or operators of storefronts listed on the platform) on the supply side and the Customers (being travelers and guests who book accommodations at the Patrons' storefronts through the platform) on the demand side.</p>
                                <p>As at March 31, 2021, they had 157,344 storefronts across more than 35 countries listed on the platform. The Patrons use the platform to manage all mission-critical aspects of their business operations. The comprehensive, full-stack technology suite integrates more than 40 products and services across the digital signup and onboarding, revenue management, daily business management and D2C stacks into the two flagship Patron applications, Co-OYO and OYO OS.</p>
                                
                                <p><strong>Business Model of OYO</strong></p>
                                <p>OYO business model relies on the Patrons who list their storefronts on its platform and its large base of Customers who book accommodations at Patrons' storefronts through OYO platform. The value proposition to the Patrons of OYO hotel and homes business is based on our integrated, full-stack technology suite, which empowers all mission-critical aspects of their business operations. In turn, the Patrons provide them with distribution rights (largely on an exclusive basis) and significant control over pricing decisions relating to their storefront inventory, which enables them to maximize their revenue generation potential through the dynamic pricing algorithms.</p>
                                
                                <p><strong>Asset-light Model of OYO</strong></p>
                                <p>They have an asset-light business model and a lean cost structure. They do not own the storefronts listed on the platform. As at March 31, 2021, 99.9% of the storefronts did not have contracts with minimum guarantees or fixed payout commitments from us, with any investments, capital expenditure, storefront employee costs and other expenses relating to the operation of such storefronts borne by the Patrons.</p>
                                
                                <p><strong>Hotels Listed on OYO</strong></p>
                                <p>They have 157,344 storefronts across more than 35 countries listed on the platform as at March 31, 2021. As at September 9, 2021, they had the largest footprint in terms of hotel storefronts in India and SEA and the second largest footprint in Europe in terms of home storefronts among full stack short-stay accommodation players, according to RedSeer.</p>
                            </div>
                        </div>

                        {/* History Section */}
                        <div className="history-section">
                            <h2 className="section-title">History of OYO</h2>
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
                            <h2 className="section-title">Subsidiaries of OYO</h2>
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

export default OYOUnlistedStocks;