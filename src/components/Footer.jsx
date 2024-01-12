import React, { useState } from 'react'
import style from '../styles/footer.module.css';
import img from '../images/footer/Most-Innovative-logo.png';
import image1 from '../images/footer/Mastercard.svg';
import image2 from '../images/footer/Visa.svg';
import image3 from '../images/footer/Visa-Electron.svg';
import logo1 from '../images/footer/Twitter_Logo.svg';
import logo2 from '../images/footer/Facebook_Logo.svg';
import logo3 from '../images/footer/Instagram_Logo.svg';
import logo4 from '../images/footer/YT-1.webp';
import flag from '../images/footer/inFlag.svg';
const Footer = () => {
    
    const [displayStyle, setDisplayStyle] = useState('none');
    const [displayStyle2, setDisplayStyle2] = useState('none');

    const [displayStyle3, setDisplayStyle3] = useState('none');

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        if(!isMenuOpen){
        setIsMenuOpen(!isMenuOpen);
        setDisplayStyle(isMenuOpen ? 'none' : 'block');
        }else{
            setIsMenuOpen(false); // Ensure the menu is closed when togglenone is called
            setDisplayStyle('none'); 
        }
    };
    const toggleMenu2 = () => {
        if(!isMenuOpen){
        setIsMenuOpen(!isMenuOpen);
        setDisplayStyle2(isMenuOpen ? 'none' : 'block');
        }else{
            setIsMenuOpen(false); // Ensure the menu is closed when togglenone is called
            setDisplayStyle2('none'); 
        }
    };
    const toggleMenu3 = () => {
        if(!isMenuOpen){
        setIsMenuOpen(!isMenuOpen);
        setDisplayStyle3(isMenuOpen ? 'none' : 'block');
        }else{
            setIsMenuOpen(false); // Ensure the menu is closed when togglenone is called
            setDisplayStyle3('none'); 
        }
    };
  return (
    <div id={style.container}>
        <div id={style.top}>
            <div>
                <svg width="35" height="32" viewBox="0 0 35 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.3019 31.9999L24.9424 17.8977H9.69727L17.3019 31.9999Z" fill="#016196"/>
                    <path d="M9.69727 17.8993H24.9416L17.3019 3.83447L9.69727 17.8993Z" fill="#2CA8E0"/>
                    <path d="M15.2452 0H0L9.69814 17.8978L17.3036 3.83289L15.2452 0Z" fill="#6DCFF5"/>
                    <path d="M19.3982 0L17.3047 3.83289L24.9452 17.8978L34.6433 0H19.3982Z" fill="#016196"/>
                </svg>
                <h2>Easy Rturns: <u>Free Replacement or Full Refund</u></h2>
                <img src={img} alt="" />
                <hr />
            </div>
            <div>
            <b onClick={toggleMenu}>Let us help</b>
                <ul style={{ display: displayStyle}} >
                    <li>My Account</li>
                    <li>Contact us</li>
                    <li>All Products</li>
                </ul>
            </div>
            <div>
            <b onClick={toggleMenu2}>Our Company</b>
                <ul style={{ display: displayStyle2}}>
                    <li>Careers</li>
                    <li>For investors</li>
                    <li>For media</li>
                    <li>Sustainability</li>
                    <li>Annual Returns</li>
                    <li>Corporate Social Responseibility</li>
                </ul>
            </div>
            <div>
                <b onClick={toggleMenu3}>Our policies</b>
                <ul style={{ display: displayStyle3}}>
                    <li>Terms and Conditions</li>
                    <li>Privacy and Cookie Policy</li>
                    <li>Copyright matters</li>
                    <li>Patents & trademarks</li>
                </ul>
            </div>
        </div>
        <div id={style.bottom}>
            <div>
                <u>02522-669393</u>   <u>Home</u>
                <p>A CIMPRESS company © 2001-2024 Vistaprint. All rights reserved. Unless stated otherwise, prices are exclusive of delivery and product options.</p>
            </div>
            <div>
                <ul>
                    <li><img src={image1} alt="" /></li>
                    <li><img src={image2} alt="" /></li>
                    <li><img src={image3} alt="" /></li>
                </ul>
            </div>
            <div>
                <ul>
                    <li><img src={logo1} alt="" /></li>
                    <li><img src={logo2} alt="" /></li>
                    <li><img src={logo3} alt="" /></li>
                    <li><img src={logo4} alt="" /></li>
                </ul>
            </div>
            <div id={style.flag}><img src={flag} alt="" width="40px"/></div>
        </div>
    </div>
  )
}

export default Footer