import React from 'react'
import style from '../styles/trending.module.css';
import n1 from '../images/newArrive/n1.webp';
import n2 from '../images/newArrive/n2.webp';
import n3 from '../images/newArrive/n3.webp';
import n4 from '../images/newArrive/n4.webp';
import n5 from '../images/newArrive/n5.webp';
import n6 from '../images/newArrive/n6.webp';
import n7 from '../images/newArrive/n7.webp';
import n8 from '../images/newArrive/n8.webp';
import n9 from '../images/newArrive/n9.webp';
import n10 from '../images/newArrive/n10.webp';

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
            <li><img src={n7} alt="" /><br />Premium Diary →</li>
            <li><img src={n8} alt="" /><br />Hooded Crewneck Sweatshirts →</li>
            <li><img src={n9} alt="" /><br />Convertible Zipper Hoodie Jackets →</li>
            <li><img src={n10} alt="" /><br />American Tourister Laptop Bags →</li>

        </ul>
    </div>
  )
}

export default NewArrivels