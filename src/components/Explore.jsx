import React from 'react'
import style from '../styles/branded.module.css';
import e1 from '../images/explore/e1.webp';
import e2 from '../images/explore/e2.webp';
import e3 from '../images/explore/e3.webp';
import e4 from '../images/explore/e4.webp';
import e5 from '../images/explore/e5.webp';
import e6 from '../images/explore/e6.jpeg';
import e7 from '../images/explore/e7.webp';
import e8 from '../images/explore/e8.webp';
import e9 from '../images/explore/e9.webp';
import e10 from '../images/explore/e10.webp';

const Explore = () => {
  return (
    <div id={style.container}>
        <h1>Explore More</h1>
        <ul>
            <li><img src={e1} alt="" /><br />Labels & Stickers →</li>
            <li><img src={e2} alt="" /><br />Standees →</li>
            <li><img src={e3} alt="" /><br />Office Shirts →</li>
            <li><img src={e4} alt="" /><br />Men's Cotton T-Shirts →</li>
            <li><img src={e5} alt="" /><br />Flyers and Leaflets →</li>
            <li><img src={e6} alt="" /><br />Drinkware →</li>
            <li><img src={e7} alt="" /><br />Custom Mugs →</li>
            <li><img src={e8} alt="" /><br />Custom Bags →</li>
            <li><img src={e9} alt="" /><br />Custom Caps →</li>
            <li><img src={e10} alt="" /><br />Custom Mousepads →</li>
        </ul>
    </div>
  )
}

export default Explore