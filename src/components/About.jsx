import React from 'react'
import style from '../styles/about.module.css';
const About = () => {
  return (
    <div id={style.container}>
        <div id={style.left}>
            <h1>VistaPrint India : The leader in customisation</h1>
            <p>For more than 20 years, VistaPrint has helped business owners, entrepreneurs and individuals create their identities with custom designs and professional marketing. Our online printing services are intended to help you find high quality customised products you need – visiting cards, personalized clothing, gifting products, and much more.</p>
        </div>
        <div id={style.right}>
            <ul>
                <li><b>Even Low Quantities @ Best Prices</b></li>
                <li>We offer low/ single product quantities at affordable prices.</li>
                <li><b>High quality products and Easy design</b></li>
                <li>Our wide selection of high-quality products and online design tools make it easy for you to customize and order your favourite products.</li>
                <li><b>Free replacement or Full Refund</b></li>
                <li>We stand by everything we sell. So if you’re not satisfied, we’ll make it right.</li>
            </ul>
        </div>
    </div>
  )
}

export default About