'use client'
import React,{useState, useEffect} from 'react'
import './ClosingNav.css'
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../../../public/images/blogo.png';
import Menuline from '../../../../public/images/Menuline.svg';
import blackMenuline from '../../../../public/images/blackMenu.svg';
import closeBtn from '../../../../public/images/close-btn.svg';
import Modal from 'react-bootstrap/Modal';
import { usePathname , useRouter } from 'next/navigation'
function ClosiongNav() {
  const pathname = usePathname();
  const router = useRouter();
  const [show, setShow] = useState(false);

    return (
        <div className='closing-Nav'>
            <div className="closing-nav-container">
                <div className="row">
                    <div className="col-2 logo-container" onClick={()=>{router.push('/')}} ><Image src={logo} height={60} width={150} className='nav-logo' style={{cursor:'pointer'}}/></div>
                    <div className="col-10 menu-btn" onClick={()=>{setShow(true);}} >
               
  <Image src={blackMenuline} style={{cursor:'pointer'}} className='menu-btn-res' alt='image'/>
                    </div>
                </div>
            </div>
            <Modal show={show} fullscreen={true} onHide={() =>setShow(false)} className='fade-modal'>
                <Modal.Body closeButton>
                    <div className='modal-Close' onClick={() =>setShow(false)} style={{cursor:'pointer'}}> <Image src={closeBtn} alt='image'/> </div>
                    <div className="horizontal-nav-container" >
                    <Link className={`link d-flex align-items-center ${pathname === '/' ? 'activeHorizontalNavLink' : 'horizontalNavLink'}`}href="/" onClick={() =>setShow(false)}>HOME</Link>
            <Link className={`link d-flex align-items-center ${pathname === '/aboutUs/' ? 'activeHorizontalNavLink' : 'horizontalNavLink'}`}href="/aboutUs" onClick={() =>setShow(false)}>ABOUT</Link>
            <Link className={`link d-flex align-items-center ${pathname === '/acquisition-debt/' ? 'activeHorizontalNavLink' : 'horizontalNavLink'}`}href="/acquisition-debt" onClick={() =>setShow(false)}>ACQUISITION DEBT</Link>
            <Link className={`link d-flex align-items-center ${pathname === '/machinery-loans/' ? 'activeHorizontalNavLink' : 'horizontalNavLink'}`}href="/machinery-loans" onClick={() =>setShow(false)}>MACHINERY LOANS</Link>
            <Link className={`link d-flex align-items-center ${pathname === '/ecb/' ? 'activeHorizontalNavLink' : 'horizontalNavLink'}`}href="/ecb" onClick={() =>setShow(false)}>ECB</Link>
            <Link className={`link d-flex align-items-center ${pathname === '/contact/' ? 'activeHorizontalNavLink' : 'horizontalNavLink'}`}href="/contact" onClick={() =>setShow(false)}>CONTACT US</Link>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default ClosiongNav
