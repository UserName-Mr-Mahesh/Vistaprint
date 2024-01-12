import React from 'react'
import style from '../styles/trending.module.css';
import n1 from '../images/newArrive/n1.webp';
import n2 from '../images/newArrive/n2.webp';
import n3 from '../images/newArrive/n3.webp';
import n4 from '../images/newArrive/n4.webp';
import n5 from '../images/newArrive/n5.webp';
import n6 from '../images/newArrive/n6.webp';

const NewArrivels = () => {
  return (
    <div id={style.container}>
        <h1>New Arrivals</h1>
        <ul>
            <li><img src={n1} alt="" /><br />NFC Visiting Cards →</li>
            <li><img src={n2} alt="" /><br />Layflat Photo Albums →</li>
            <li><img src={n3} alt="" /><br />Flip Desk Calendars →</li>
            <li><img src={n4} alt="" /><br />Four Sheeter Wall Calenders →</li>
            <li><img src={n5} alt="" /><br />Personalized A5 Diary →</li>
            <li><img src={n6} alt="" /><br />Personalized Dairy with Magnetic Lock →</li>
        </ul>
    </div>
  )
}

export default NewArrivels