'use client'
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
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

                        <div style={{ margin: '3rem 0 1rem 0' }}><h2 className='heading'>How to Buy Unlisted Shares</h2></div>
                        <ol className="unlisted-list">
                            <li><strong>Choose a company</strong> and check its latest price and financials (see the company pages above).</li>
                            <li><strong>Share your demat account details</strong> and complete KYC. You need a demat account, just as for listed shares. Don&apos;t have one? <Link href="/demateAccount/">Open a demat account</Link>.</li>
                            <li><strong>Agree the price and quantity.</strong> Unlisted shares trade over the counter, so the price is agreed between buyer and seller.</li>
                            <li><strong>Make the payment</strong> to the seller&apos;s bank account.</li>
                            <li><strong>Receive the shares</strong> in your demat account, usually within a few working days.</li>
                        </ol>

                        <div style={{ margin: '3rem 0 1rem 0' }}><h2 className='heading'>Things to Know Before You Invest</h2></div>
                        <ul className="unlisted-list">
                            <li><strong>Prices are not on any exchange.</strong> Quotes can differ between dealers, so compare before you buy.</li>
                            <li><strong>Lock-in after IPO:</strong> if the company lists, shares bought before the IPO are generally locked in for a period (currently six months for most pre-IPO shareholders) before you can sell them on the exchange.</li>
                            <li><strong>Tax:</strong> gains on unlisted shares are taxed differently from listed shares. Check the current rules with your tax adviser before investing.</li>
                            <li><strong>No guaranteed listing:</strong> an expected IPO can be delayed or cancelled.</li>
                        </ul>

                        <div style={{ margin: '3rem 0 1rem 0' }}><h2 className='heading'>Frequently Asked Questions</h2></div>
                        <div className="unlisted-faq">
                            <p><strong>Is it legal to buy unlisted shares in India?</strong></p>
                            <p>Yes. Unlisted shares can be bought and sold legally, and they are held in your demat account like any other shares.</p>
                            <p><strong>What is the minimum investment?</strong></p>
                            <p>It depends on the company and the seller. Many unlisted shares are sold in minimum lots, so the minimum amount is often higher than for listed shares.</p>
                            <p><strong>Can I sell my unlisted shares later?</strong></p>
                            <p>Yes, but finding a buyer can take time because there is no exchange. If the company lists, you can sell on the stock exchange after any lock-in period ends.</p>
                        </div>
                        <p style={{ marginTop: '2rem' }}>Want a current price for <Link href="/nse/">NSE</Link>, <Link href="/ncdex/">NCDEX</Link>, <Link href="/msei/">MSEI</Link>, <Link href="/oyo/">OYO</Link> or <Link href="/polymatech/">Polymatech</Link> unlisted shares? <Link href="/contact/">Contact us</Link>.</p>
                    </div>
                    
                </div>


                <Footer />
            </section>
            <Enquiry />
        </div>
    );
}

export default UnlistedStocks;