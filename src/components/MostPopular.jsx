import React from 'react'
import style from '../styles/mostPopular.module.css';
import m1 from '../images/mostpopular/m1.jpeg';
import m2 from '../images/mostpopular/m2.webp';
import m3 from '../images/mostpopular/m3.webp';
import m4 from '../images/mostpopular/m4.webp';
import m5 from '../images/mostpopular/m5.webp';
import m6 from '../images/mostpopular/m6.webp';
import m7 from '../images/mostpopular/m7.webp';
import m8 from '../images/mostpopular/m8.webp';

const MostPopular = () => {
  return (
    <div id={style.container}>
        <h1>Our Most Popular Products</h1>
        <ul>
            <li><img src={m1} alt="" /><br />Visiting Cards →</li>
            <li><img src={m2} alt="" /><br />Embriodered Polo's →</li>
            <li><img src={m3} alt="" /><br />Printed T-Shirts →</li>
            <li><img src={m4} alt="" /><br />Custom Winter Wear →</li>
            <li><img src={m5} alt="" /><br />Calendars, Notebooks and Diaries →</li>
            <li><img src={m6} alt="" /><br />Photo Albums →</li>
            <li><img src={m7} alt="" /><br />Stamps →</li>
            <li><img src={m8} alt="" /><br />Letterheads →</li>

        </ul>
    </div>
  )
}

export default MostPopular