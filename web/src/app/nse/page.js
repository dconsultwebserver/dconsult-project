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

function NSEUnlistedStocks() {
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
        { label: "NSE India Limited Unlisted Shares Price", value: "₹ 1890 Per Equity Share" },
        { label: "Lot Size", value: "250 Shares" },
        { label: "52 Week High", value: "₹ 6200" },
        { label: "52 Week Low", value: "₹ 1625" },
        { label: "Depository", value: "NSDL & CDSL" },
        { label: "PAN Number", value: "AAAACN1797L" },
        { label: "ISIN Number", value: "INF721101024" },
        { label: "CIN", value: "U67120MH1992PLC069769" },
        { label: "RTA", value: "Link Intime" },
    ];

    const rightFundamentals = [
        { label: "Market Cap (cr)", value: "₹ 469013" },
        { label: "P/E Ratio", value: "38.48" },
        { label: "P/B Ratio", value: "15.45" },
        { label: "Debt to Equity", value: "0" },
        { label: "ROE (%)", value: "40.15" },
        { label: "Book Value", value: "122.64" },
        { label: "Face Value", value: "1" },
        { label: "Total Shares", value: "2475000000" },
    ];

    // Subsidiaries Data
    const subsidiariesData = [
        { name: "NSE Clearing Limited (formerly known as National Securities Clearing Corporation Limited)", place: "India", ownership: "100" },
        { name: "NSETI Investments Ltd (formerly known as NSE Strategic Investment Corporation Limited)", place: "India", ownership: "100" },
        { name: "NSETI Limited", place: "India", ownership: "100" },
        { name: "NSETI (US) Inc.", place: "United States of America", ownership: "100" },
        { name: "NSE Indices Ltd (formerly known as India Indices Services & Products Limited)", place: "India", ownership: "100" },
        { name: "NSE Data & Analytics Limited (formerly known as DotEx International Limited)", place: "India", ownership: "100" },
        { name: "NSE Infotech Services Limited", place: "India", ownership: "100" },
        { name: "NSE IFSC Limited", place: "India", ownership: "100" },
        { name: "NSE IFSC Clearing Corporation Limited", place: "India", ownership: "100" },
        { name: "NSE Academy Limited", place: "India", ownership: "100" },
        { name: "NSE Foundation (Section 8 Company)", place: "India", ownership: "100" },
    ];

    // P&L Statement Data
    const pnlData = [
        { metric: "Revenue", 2022: "8939", 2023: "11856", 2024: "14780", 2025: "17141" },
        { metric: "Cost of Material Consumed", 2022: "0", 2023: "0", 2024: "0", 2025: "0" },
        { metric: "Change in Inventory", 2022: "0", 2023: "0", 2024: "0", 2025: "0" },
        { metric: "Gross Margins", 2022: "100", 2023: "100", 2024: "100", 2025: "100" },
        { metric: "Employee Benefits Expenses", 2022: "689", 2023: "386", 2024: "460", 2025: "672" },
        { metric: "Other Expenses", 2022: "1740", 2023: "1859", 2024: "2709", 2025: "3588" },
        { metric: "EBITDA", 2022: "6500", 2023: "9631", 2024: "11611", 2025: "12881" },
        { metric: "OPM", 2022: "72.8", 2023: "81.23", 2024: "78.56", 2025: "75.15" },
        { metric: "Other Income", 2022: "570", 2023: "794", 2024: "13", 2025: "3722" },
        { metric: "Finance Cost", 2022: "0", 2023: "0", 2024: "0", 2025: "0" },
        { metric: "D&A", 2022: "338", 2023: "384", 2024: "439", 2025: "547" },
        { metric: "EBIT", 2022: "9162", 2023: "9247", 2024: "11712", 2025: "12334" },
        { metric: "EBIT Margins", 2022: "69.01", 2023: "77.99", 2024: "75.59", 2025: "71.96" },
        { metric: "PBT", 2022: "6912", 2023: "10041", 2024: "11884", 2025: "16057" },
        { metric: "PBT Margins", 2022: "77.41", 2023: "84.69", 2024: "75.67", 2025: "93.68" },
        { metric: "Tax", 2022: "174", 2023: "254", 2024: "278", 2025: "386" },
        { metric: "PAT", 2022: "3198", 2023: "7501", 2024: "8406", 2025: "12818" },
        { metric: "NPM", 2022: "58.21", 2023: "63.27", 2024: "56.87", 2025: "71.1" },
        { metric: "EPS", 2022: "105.01", 2023: "151.54", 2024: "169.82", 2025: "48.24" },
    ];

    // Financial Ratios Data
    const ratiosData = [
        { metric: "Operating Profit Margin", 2022: "72.8", 2023: "81.23", 2024: "78.56", 2025: "75.15" },
        { metric: "Net Profit Margin", 2022: "58.21", 2023: "63.27", 2024: "56.87", 2025: "71.1" },
        { metric: "Earning Per Share (Diluted)", 2022: "105.01", 2023: "151.54", 2024: "169.82", 2025: "48.24" },
    ];

    // History Data
    const historyData = [
        { year: "1995", description: "Setup wholly-owned subsidiary, NSE Clearing, which became the first clearing corporation to be established in India (according to the Oliver Wyman Report). NSE Clearing commenced clearing and settlement operations in the following year." },
        { year: "1996", description: "Established NSE Indices, their subsidiary, as a joint venture with CRISIL Limited to operate an indices business. NSE Indices became a wholly-owned subsidiary in 2013 following the acquisition of CRISIL's 49% stake." },
        { year: "1999", description: "Established NSETI, a wholly-owned subsidiary and a global technology firm providing end-to-end technology solutions, including application services, infrastructure services, analytics as a service, and IT-enabled services. In 2015 and 2016, NSETI launched its Testing Center of Excellence and Integrated Security Response Center." },
        { year: "2000", description: "Incorporated DotEx, a wholly-owned subsidiary, consolidating the data and info-vending business under DotEx." },
        { year: "2006", description: "Incorporated NSE Infotech Ltd., a wholly-owned subsidiary for IT research and development." },
        { year: "2016", description: "Consolidated the education businesses under NSE Academy, a wholly-owned subsidiary. Incorporated two new subsidiaries, NSE IFSC Limited and NSE IFSC Clearing Corporation Limited, to further NSE's long-term business strategy to establish an international exchange in GIFT City." },
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
                        <h1 data-scroll data-scroll-speed="2" data-scroll-repeat="true">NSE Unlisted Stocks</h1>
                    </div>
                </div>

                {/* Content Section */}
                <div className="row posotion-container">
                    <div className="col-12 fund-page-content" style={{ paddingTop: '5rem' }}>

                        {/* Title */}
                        <h1 className="page-main-title">NSE UNLISTED STOCKS</h1>

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
                            <h2 className="section-title">About NSE India Limited Unlisted Shares</h2>
                            <div className="about-content">
                                <p>(i) The National Stock Exchange of India Ltd. (NSE) is the leading stock exchange in India and the second largest in the world by number of trades in equity shares from January to June 2018, according to the World Federation of Exchanges (WFE) report.</p>
                                <p>(ii) NSE launched electronic screen-based trading in 1994, derivatives trading (in the form of index futures), and internet trading in 2000, which were each the first of their kind in India.</p>
                                <p>(iii) NSE has a fully-integrated business model comprising exchange listings, trading services, clearing and settlement services, indices, market data feeds, technology solutions, and financial education offerings. NSE also oversees compliance by trading and clearing members and listed companies with the rules and regulations of the exchange.</p>
                                <p>(iv) NSE is a pioneer in technology and ensures the reliability and performance of its systems through a culture of innovation and investment in technology. NSE believes that the scale and breadth of its products and services enable it to be highly reactive to market demands and changes and deliver innovation in both trading and non-trading businesses to provide high-quality data and services to market participants and clients.</p>
                                <p>(v) NSE was incorporated in 1992. It was recognized as a stock exchange by SEBI in April 1993 and commenced operations in 1994 with the launch of the wholesale debt market, followed shortly after by the cash market segment.</p>
                            </div>
                        </div>

                        {/* History Section */}
                        <div className="history-section">
                            <h2 className="section-title">History of NSE</h2>
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
                            <h2 className="section-title">Subsidiaries of NSE</h2>
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

export default NSEUnlistedStocks;