import React from 'react'
import style from '../styles/branded.module.css';
import e1 from '../images/explore/e1.webp';
import e2 from '../images/explore/e2.webp';
import e3 from '../images/explore/e3.webp';
import e4 from '../images/explore/e4.webp';
const Explore = () => {
  return (
    <div id={style.container}>
        <h1>Explore More</h1>
        <ul>
            <li><img src={e1} alt="" /><br />Labels & Stickers →</li>
            <li><img src={e2} alt="" /><br />Standees →</li>
            <li><img src={e3} alt="" /><br />Office Shirts →</li>
            <li><img src={e4} alt="" /><br />Men's Cotton T-Shirts →</li>
        </ul>
    </div>
  )
}

export default Explore