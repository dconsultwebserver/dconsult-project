'use client'
import React, { useEffect, useRef, useState } from 'react';
import dot from '../../../public/images/dot.svg';
import bg from '../../../public/images/bg.svg';
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
import mail from '../../../public/images/email.svg';
import nseIcon from '../../../public/images/nse.jpg';
import mseiIcon from '../../../public/images/mse.png';
import oyoIcon from '../../../public/images/oyo.webp';
import polymatechIcon from '../../../public/images/Polymatech_logo.jpg';
import ncdex from '../../../public/images/ncdex.jpg';

function UnlistedStocks() {
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

    // Unlisted stocks data with logos
    const unlistedStocks = [
        {
            id: 1,
            name: "NSE India Limited Unlisted Shares",
            price: "₹ 1890",
            icon: nseIcon,
            link:"/nse"
        },
        {
            id: 2,
            name: "ORAVEL STAYS LIMITED (OYO Unlisted Shares)",
            price: "₹ 28",
            icon: oyoIcon,
            link:"/oyo"
        },
        {
            id: 3,
            name: "Polymatech",
            price: "₹ 72",
            icon: polymatechIcon,
            link:"/polymatech"
        },
        {
            id: 4,
            name: "National Commodity & Derivatives Exchange Unlisted Shares",
            price: "₹ 440",
            icon: ncdex,
            link:"/ncdex"
        },
        {
            id: 5,
            name: "Metropolitan Stock Exchange (MSEI)",
            price: "₹ 3.15",
            icon: mseiIcon,
            link:"/msei"
        }
    ];

    const handleEmail = () => {
        window.location.href = 'mailto:sales@dconsult.in';
    };

    return (
        <div ref={containerRef} className='page-content unlisted'>
            {windowWidth <500 ? (<ClosiongNav/>) : (<InnerNav/>) }
            
            <section className="gallery" data-scroll-section>
                {/* Banner Section */}
                <div className="col-12 about-img-c">
                    <div className="about-img center" style={{
                        backgroundImage: `url(${bg.src})`,
                    }}>
                        <h1 data-scroll data-scroll-speed="2" data-scroll-repeat="true">Unlisted Stocks</h1>
                    </div>
                </div>

                {/* Content Section */}
                <div className="row posotion-container">
                    <div className="col-12 fund-page-content" style={{ paddingTop: '5rem' }}>

                        <div className="row unlisted-stocks-container">
                            {unlistedStocks.map((stock, index) => (
                                <div className="col-12 col-md-6 col-lg-6 unlisted-stock-card" key={stock.id} style={{ cursor: 'pointer' }} onClick={() => router.push(stock.link)}>
                                    <div className="stock-card-inner">
                                        <div className="stock-header">
                                            <div className="stock-logo-container">
                                                <Image 
                                                    src={stock.icon} 
                                                    alt={stock.name} 
                                                    className="stock-logo"
                                                    width={60}
                                                    height={60}
                                                />
                                            </div>
                                            <div className="stock-info">
                                                <h6 className='stock-name'>{stock.name}</h6>
                                                <div className="stock-price" >{stock.price}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                                               <div className='title'>Unlisted Stocks</div>

                        <p>Unlisted shares are the shares of the company that are not listed on stock exchanges.</p>
                            <p>The unlisted shares include the following:</p>
                            <ul>
                                <li>
Pre-IPO Shares - Shares provided by companies seeking an IPO.
                                </li>
                                <li>Shares issued in private placements.</li>
                                <li>Shares issued in public offerings.</li>
                                <li>ESOP Shares - Shares issued under employee stock options.</li>
                                <li>Shares held by group shareholders of private companies.</li>
                            </ul>
                        <div className='heading advantage-heading'>Unlisted Shares Advantages</div>
                        <ul className="unlisted-list advantage-list">
                            <li>Opportunity to invest in the company at an early stage.</li>
                            <li>No feeling of insecurity for allotment once the company announces an IPO.</li>
                            <li>Possibility of better returns.</li>
                            <li>Helps diversify the investment.</li>
                            <li>Unlisted shares are traded in dematerialised form and are held in demat account.</li>
                        </ul>

                        {/* Disadvantages Section */}
                        <div className='heading disadvantage-heading'>Unlisted Shares Disadvantages</div>
                        <ul className="unlisted-list disadvantage-list">
                            <li>Risky transaction as it is not backed by the stock exchanges.</li>
                            <li>Longer transaction time.</li>
                            <li>Lack of liquidity.</li>
                            <li>Higher investment amount as the minimum lot size required to purchase is higher.</li>
                            <li>Only a few dealers are available for transactions.</li>
                        </ul>
                    </div>
                    
                </div>


                <Footer />
            </section>
            <Enquiry />
        </div>
    );
}

export default UnlistedStocks;