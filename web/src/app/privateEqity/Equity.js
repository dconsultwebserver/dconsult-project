'use client'
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import dot from '../../../public/images/dot.svg'
import bg from '../../../public/images/bg.svg'

import '../aboutUs/about.css'
import ClosiongNav from '../components/ClosingNav/ClosiongNav';
import { gsap } from 'gsap';
import InnerNav from '../components/Nav/InnerNav';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import 'gsap/dist/gsap';
import Image from 'next/image';
import chart from '../../../public/images/chart.svg'
import client from '../sanity/client';
gsap.registerPlugin(ScrollTrigger);
import Footer from '../components/footer/Footer';

import mail from '../../../public/images/email.svg'
import Enquiry from '../components/Enquiry/Enquiry';
function page() {
    const containerRef = useRef(null);
    const sectionRef = useRef(null);
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
    });

    const [data, setData] = useState()
    useEffect(() => {
        const newData = async () => {
            try {
                const fetchData = await client.fetch(`*[_type == "equity"] {
                    equityHeading,
                    news[]{
                        heading,
                        title,
                        point1,
                        point2,
                        point3,
                        "image": image.asset->{
                          url
                        }
                      },
                    "equityBanner": equityBanner.asset->{
                        url
                    },
                    "chart": chart.asset->{
                        url
                    },
                    equityDescription
                }`);
                setData(fetchData[0]);
            } catch (error) {
                console.error('Error fetching data from Sanity:', error);
            }
        };
        newData();
    }, []);
    const [dataa, setdataa] = useState()
    useEffect(() => {
        const newdata = async () => {
            try {
                const fetchData = await client.fetch(`*[_type == "fund"] {
                    "img1": img1.asset->{
                        url
                    },
                    "img2": img2.asset->{
                        url
                    },
                    "img3": img3.asset->{
                        url
                    },
                    philosophy
                }`);
                setdataa(fetchData[0]);
            } catch (error) {
                console.error('Error fetching data from Sanity:', error);
            }
        };
        newdata();
    }, []);
    const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1000);
    const handleEmail = () => {
        window.location.href = 'mailto:sales@dconsult.in';
    };
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
    return (
        <div ref={containerRef} className='page-content'>
            {windowWidth <500 ? (<ClosiongNav/>) : (<InnerNav/>) }
            <section className="gallery" data-scroll-section >
                <div className="col-12 about-img-c">
                    <div className="about-img center" style={{
                        backgroundImage: `url(${bg})`,
                    }}><h1 data-scroll data-scroll-speed="2" data-scroll-repeat="true">Private Equity</h1></div>
                </div>
                <div className="row posotion-container" >
                    <div className="col-12 fund-page-content" style={{ paddingTop: '5rem' }}>
                        <div className='title'>Private Equity</div>
                        <h6 className='heading ft'>List of Companies Looking for Private Equity</h6>
                        <div className="row fund-box-c">
                            {data && data.news && data.news.map((e, i) => (
                                <div className="col-4" key={i}>
                                    <div className="row">
                                        <div className="col-12 fund-img" style={{
                                            backgroundImage: `url(${e.image.url})`
                                        }}>
                                        </div>
                                        <div className="col-12 fund-box-content">
                                            <h6 className='box-head'>{e.title}</h6>
                                            <h6 className='title'>{e.heading}</h6>
                                            <div className='fund-point'>
                                                <Image src={dot} alt='' width={5} height={5} />
                                                <p>
                                                    {e.point1}
                                                </p>
                                            </div>
                                            <div className='fund-point'>
                                                <Image src={dot} alt='' width={5} height={5} />
                                                <p> {e.point2}</p>
                                            </div>
                                            <div className='fund-point'>
                                                <Image src={dot} alt='' width={5} height={5} />
                                                <p> {e.point3}</p>
                                            </div>
                                            <div className='fund-mail' onClick={handleEmail}>
                                                <p>For details email us </p>
                                                <Image src={mail} alt='' width={20} height={20} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
                <div className="row posotion-container" >
                    <div className="col-12 about-left-content bg" style={{ paddingTop: '5rem' }}>

                        <div className='heading top-heading'>Strategies of Private Equity.</div>
                        <div className='p-container'>
                            <div className="row yellow-section-row">
                                <div className="col-4 yellow-section"><Image src={dot} alt='' /> <p>Angel investing</p> </div>
                                <div className="col-4 yellow-section"><Image src={dot} alt='' /> <p>Venture capital</p> </div>
                                <div className="col-4 yellow-section"><Image src={dot} alt='' /> <p>Leveraged buyouts (LBO)</p> </div>
                            </div>
                            <div className="row yellow-section-row">
                                <div className="col-4 yellow-section res-m-t"><Image src={dot} alt='' /> <p>Growth capital</p> </div>
                                <div className="col-4 yellow-section"><Image src={dot} alt='' /> <p>Distressed investments</p> </div>
                                <div className="col-4 yellow-section"><Image src={dot} alt='' /> <p>Mezzanine capital</p> </div>
                            </div>
                            <div className='heading' style={{ margin: "4rem 0 1rem 0" }}>Who invests in Private Equity?</div>
                            <p>Majority of the private equity comes from the Pensioners and contributes a larger part to the asset.The below pie-chart gives a clear picture about various investors of Private Equity.</p>
                        </div>
                    </div>
                    <div className="col-12 about-left-content p0 bot-left">
                        <div className='heading disappear' style={{ margin: ' 0 0 2rem 0' }} data-scroll data-scroll-class="appear" >Investors of Private Equity</div>
                        <Image src={data && data.chart.url} width={650} height={400} data-scroll data-scroll-repeat="true" className='disappear private-chart' alt='Private equity investment chart' />
                        <div className='heading disappear' style={{ margin: '3rem 0 1rem 0' }} data-scroll  >{data && data.equityHeading}</div>
                        <p data-scroll data-scroll-class="appear" data-scroll-repeat="true" className='disappear' style={{ marginBottom: '3rem' }}>{data && data.equityDescription && data.equityDescription.map((block, index) => (
                            <p key={index}>{block.children[0].text} {block.children[1] && block.children[1].text}
                            </p>
                        ))}</p>
                    </div>
                </div>
                <div className="nse-page">
                <div className="row posotion-container">
                    <div className="col-12 fund-page-content" style={{ paddingTop: '3rem' }}>

                        <div className="about-section">
                            <h2 className="heading mb-4">Private Equity Advisory in Mumbai</h2>
                            <div className="about-content">
                                <p><strong>Private equity</strong> is investment in a company in exchange for a share of its ownership, usually by a professional fund or a group of investors. Unlike a loan, there are no fixed repayments: investors earn their return when the company grows and they later sell their stake.</p>
                                <p>Dhumavati Consulting LLP connects growing Indian businesses with private equity investors, and helps investors find companies that are raising capital.</p>
                            </div>
                        </div>

                        <div className="fundamentals-section">
                            <h2 className="heading mb-4">Types of Private Equity Funding</h2>
                            <div className="table-responsive">
                                <table className="data-table">
                                    <thead>
                                        <tr>
                                            <th>Type</th>
                                            <th>Suited to</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr><td><strong>Angel investment</strong></td><td>Very early-stage companies with an idea or first product.</td></tr>
                                        <tr><td><strong>Venture capital</strong></td><td>Young companies with a proven product that need money to scale.</td></tr>
                                        <tr><td><strong>Growth capital</strong></td><td>Established, profitable businesses expanding into new products, plants or markets.</td></tr>
                                        <tr><td><strong>Leveraged buyout (LBO)</strong></td><td>Buying a controlling stake in a mature company, partly funded with debt.</td></tr>
                                        <tr><td><strong>Mezzanine capital</strong></td><td>A mix of debt and equity, used when a company wants funds without giving up much ownership.</td></tr>
                                        <tr><td><strong>Distressed investment</strong></td><td>Companies under financial stress that need capital and a turnaround plan.</td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="about-section">
                            <h2 className="heading mb-4">How We Help You Raise Capital</h2>
                            <div className="about-content">
                                <ol style={{ paddingLeft: '1.5rem', marginBottom: '0.8rem' }}>
                                    <li><strong>Understand your business:</strong> how much you need, what it is for, and how much ownership you are willing to share.</li>
                                    <li><strong>Prepare your story:</strong> financials, business plan and an investor presentation.</li>
                                    <li><strong>Reach the right investors:</strong> funds and investors whose focus matches your sector and stage.</li>
                                    <li><strong>Due diligence and term sheet:</strong> support through investor checks and negotiation of key terms.</li>
                                    <li><strong>Closing:</strong> coordination with legal and financial advisors until funds are received.</li>
                                </ol>
                            </div>
                        </div>

                        <div className="about-section">
                            <h2 className="heading mb-4">Frequently Asked Questions</h2>
                            <div className="about-content">
                                <p><strong>Is private equity better than a loan?</strong></p>
                                <p>It depends. Equity has no fixed repayments, which suits fast-growing businesses, but you share ownership and future profits. Debt such as <Link href="/machinery-loans/">machinery loans</Link> or <Link href="/acquisition-debt/">acquisition finance</Link> keeps ownership with you.</p>
                                <p><strong>How much of my company will I give up?</strong></p>
                                <p>That depends on your company&apos;s valuation and the amount you raise. Both are negotiated with the investor.</p>
                                <p><strong>How long does it take to raise private equity?</strong></p>
                                <p>A funding round usually takes several months from first meetings to money in the bank, mostly because of due diligence and legal work.</p>
                            </div>
                        </div>

                        <div className="about-section">
                            <div className="about-content">
                                <p>Looking for investors, or looking to invest? <Link href="/contact/">Contact us</Link>.</p>
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

export default page;