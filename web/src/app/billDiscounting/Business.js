'use client'
import React, { useEffect, useRef, useState } from 'react';
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
        <div ref={containerRef} className='page-content'>
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
                    <div className="col-12 about-left-content bg" style={{ paddingTop: '5rem' }}>
                        <div className='title'>Bill Discounting</div>
                        <div className='heading top-heading'>What is invoice discounting?</div>
                        <p>Invoice discounting is probably the simplest form of invoice finance...</p>

                        <div className='p-container'>
                            <div className='heading'>Factoring</div>
                            <p>Factoring is a type of finance...</p>

                            <div className='heading'>What is Bill Discounting?</div>
                            <p>Bill discounting is the practice of using company's unpaid invoices...</p>

                            <div className='heading'>What is the eligibility criteria for businesses?</div>
                            <p>Any business that supplies goods/services...</p>
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