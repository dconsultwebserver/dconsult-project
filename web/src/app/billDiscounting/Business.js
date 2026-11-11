'use client'
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import InnerNav from '../components/Nav/InnerNav';
import '../aboutUs/about.css';
import ClosiongNav from '../components/ClosingNav/ClosiongNav';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import client from '../sanity/client';
import Footer from '../components/footer/Footer';
import Enquiry from '../components/Enquiry/Enquiry';
gsap.registerPlugin(ScrollTrigger);

function page() {
    const containerRef = useRef(null);
    const scrollRef = useRef(null); // 👈 store scroll instance in ref

    // ✅ Fix 1: Proper Locomotive Scroll lifecycle with cleanup
    useEffect(() => {
        import('locomotive-scroll').then((locomotiveModule) => {
            if (!containerRef.current) return;

            scrollRef.current = new locomotiveModule.default({
                el: containerRef.current,
                smooth: true,
                direction: 'vertical',
                resetNativeScroll: true, // 👈 prevents jerk on page enter
            });

            // ✅ Fix 2: Sync ScrollTrigger with Locomotive
            scrollRef.current.on('scroll', ScrollTrigger.update);

            ScrollTrigger.scrollerProxy(containerRef.current, {
                scrollTop(value) {
                    return arguments.length
                        ? scrollRef.current.scrollTo(value, 0, 0)
                        : scrollRef.current.scroll.instance.scroll.y;
                },
                getBoundingClientRect() {
                    return {
                        top: 0, left: 0,
                        width: window.innerWidth,
                        height: window.innerHeight,
                    };
                },
            });

            ScrollTrigger.addEventListener('refresh', () => scrollRef.current.update());
            ScrollTrigger.refresh();
        });

        return () => {
            // ✅ Fix 3: Full cleanup on unmount (route change)
            if (scrollRef.current) {
                scrollRef.current.destroy();
                scrollRef.current = null;
            }
            ScrollTrigger.getAll().forEach(t => t.kill());
            ScrollTrigger.clearScrollMemory();
            window.history.scrollRestoration = 'manual'; // 👈 prevents browser scroll restore jerk
        };
    }, []);

    const [data, setData] = useState();
    useEffect(() => {
        const newData = async () => {
            try {
                const fetchData = await client.fetch(`*[_type == "insurence"] {
                  heading,
                  "banner": banner.asset->{
                      url
                  },
                  description
              }`);
                setData(fetchData[0]);
            } catch (error) {
                console.error('Error fetching data from Sanity:', error);
            }
        };
        newData();
    }, []);

    // ✅ Fix 4: Initialize windowWidth correctly to avoid nav flash
    const [windowWidth, setWindowWidth] = useState(null);

    useEffect(() => {
        // Only runs client-side, avoids SSR mismatch
        setWindowWidth(window.innerWidth);

        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div ref={containerRef} className='page-content nse-page'>
            {/* ✅ Fix 5: Render nothing until width is known — prevents nav swap flash */}
            {windowWidth !== null && (
                windowWidth < 500 ? <ClosiongNav /> : <InnerNav />
            )}
            <section className="gallery" data-scroll-section>
                <div className="col-12 about-img-c">
                    <div className="about-img center" style={{
                        backgroundImage: `url(${data && data.banner.url})`
                    }}>
                        <h1 data-scroll data-scroll-speed="2" data-scroll-repeat="true">
                            Bill Discounting
                        </h1>
                    </div>
                </div>
                <div className="row posotion-container">
                    <div className="col-12 fund-page-content" style={{ paddingTop: '5rem' }}>

                        <h2 className="page-main-title mb-4">BILL DISCOUNTING IN MUMBAI</h2>

                        <div className="about-section">
                            <h2 className="heading mb-4">Turn Unpaid Invoices into Working Capital</h2>
                            <div className="about-content">
                                <p><em>Terms and conditions apply. Funding at the sole discretion of the lenders.</em></p>
                                <p>Waiting 60 or 90 days for customers to pay can hold back your business. <strong>Bill discounting</strong> (also called <strong>invoice discounting</strong>) lets you get most of the money from an unpaid invoice now, instead of waiting for the due date.</p>
                                <p>Dhumavati Consulting LLP helps businesses in Mumbai and across India find the right bill discounting arrangement with banks and NBFCs, prepare the paperwork, and get funded quickly.</p>
                            </div>
                        </div>

                        <div className="about-section">
                            <h2 className="heading mb-4">How Bill Discounting Works</h2>
                            <div className="about-content">
                                <ol style={{ paddingLeft: '1.5rem', marginBottom: '0.8rem' }}>
                                    <li><strong>You supply goods or services</strong> and raise an invoice to your customer with a credit period.</li>
                                    <li><strong>The lender checks the invoice</strong> and the credit standing of your customer.</li>
                                    <li><strong>You receive an advance</strong>, usually a large part of the invoice value, within a few days.</li>
                                    <li><strong>Your customer pays on the due date</strong>, the lender keeps its advance plus a discount charge, and any balance comes back to you.</li>
                                </ol>
                            </div>
                        </div>

                        <div className="fundamentals-section">
                            <h2 className="heading mb-4">Types of Bill Discounting</h2>
                            <div className="table-responsive">
                                <table className="data-table">
                                    <thead>
                                        <tr>
                                            <th>Type</th>
                                            <th>What it means</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr><td><strong>Sales bill discounting</strong></td><td>You (the seller) get early payment against invoices raised to your customers.</td></tr>
                                        <tr><td><strong>Purchase bill discounting</strong></td><td>The buyer arranges for its suppliers to be paid early, while the buyer pays on the normal due date.</td></tr>
                                        <tr><td><strong>LC-backed bill discounting</strong></td><td>Bills backed by a Letter of Credit from the buyer&apos;s bank, which usually means lower risk and better pricing.</td></tr>
                                        <tr><td><strong>Invoice discounting vs factoring</strong></td><td>In invoice discounting you keep collecting from your customers. In factoring, the financier takes over collection.</td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="about-section">
                            <h2 className="heading mb-4">Benefits for Your Business</h2>
                            <div className="about-content">
                                <ul style={{ paddingLeft: '1.5rem', marginBottom: '0.8rem' }}>
                                    <li><strong>Better cash flow:</strong> pay salaries, suppliers and taxes on time without waiting for customers.</li>
                                    <li><strong>No new long-term debt:</strong> funding is tied to invoices you have already earned.</li>
                                    <li><strong>Grows with your sales:</strong> the more you invoice, the more you can discount.</li>
                                    <li><strong>Take bigger orders:</strong> accept large orders from reputed buyers even when they ask for long credit periods.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="about-section">
                            <h2 className="heading mb-4">Who Is Eligible?</h2>
                            <div className="about-content">
                                <p>Any business that sells goods or services on credit to other businesses can apply, including MSMEs, manufacturers, traders, exporters and service companies. Lenders mainly look at:</p>
                                <ul style={{ paddingLeft: '1.5rem', marginBottom: '0.8rem' }}>
                                    <li>The credit standing of the customer you have invoiced</li>
                                    <li>Your business track record and banking history</li>
                                    <li>Genuine, undisputed invoices with clear payment terms</li>
                                </ul>
                                <p><strong>Documents usually needed:</strong> KYC of the business and promoters, GST registration, recent bank statements, financial statements, and copies of the invoices and purchase orders to be discounted.</p>
                            </div>
                        </div>

                        <div className="about-section">
                            <h2 className="heading mb-4">Frequently Asked Questions</h2>
                            <div className="about-content">
                                <p><strong>How much of the invoice value can I get?</strong></p>
                                <p>It depends on the lender and on your customer&apos;s credit standing. Lenders usually advance a large share of the invoice value and release the balance, minus their charges, once your customer pays.</p>
                                <p><strong>How fast is the money paid out?</strong></p>
                                <p>Once the lender has approved your business and your customer, individual invoices can often be funded within a few working days.</p>
                                <p><strong>Is bill discounting a loan?</strong></p>
                                <p>It is short-term finance secured against your invoices, not a long-term loan. The cost is a discount charge for the period until the invoice is paid.</p>
                                <p><strong>Do my customers need to know?</strong></p>
                                <p>That depends on the arrangement. In many invoice discounting setups you continue to collect from your customers yourself.</p>
                            </div>
                        </div>

                        <div className="about-section">
                            <h2 className="heading mb-4">Other Business Finance We Arrange</h2>
                            <div className="about-content">
                                <ul style={{ paddingLeft: '1.5rem', marginBottom: '0.8rem' }}>
                                    <li><Link href="/machinery-loans/">Machinery loans</Link> to buy or upgrade equipment</li>
                                    <li><Link href="/acquisition-debt/">Acquisition finance</Link> to buy another company</li>
                                    <li><Link href="/ecb/">External Commercial Borrowings (ECB)</Link> to raise funds from overseas</li>
                                </ul>
                                <p><Link href="/contact/">Contact us</Link> to discuss your bill discounting requirement.</p>
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

export default page;