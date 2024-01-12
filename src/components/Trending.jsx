import React from 'react'
import style from '../styles/trending.module.css';
import t1 from '../images/trending/t1.webp';
import t2 from '../images/trending/t2.webp';
import t3 from '../images/trending/t3.webp';
import t4 from '../images/trending/t4.webp';
import t5 from '../images/trending/t5.webp';
import t6 from '../images/trending/t6.webp';

const Trending = () => {
  return (
    <div id={style.container}>
        <h1>Trending Products</h1>
        <ul>
            <li><img src={t1} alt="" /><br />Customised Hoodies →</li>
            <li><img src={t2} alt="" /><br />Fleece Jackets →</li>
            <li><img src={t3} alt="" /><br />Puffer Jackets →</li>
            <li><img src={t4} alt="" /><br />Winter Jackets - Sleeveless →</li>
            <li><img src={t5} alt="" /><br />Desk Calendars →</li>
            <li><img src={t6} alt="" /><br />Wall Calendars →</li>
        </ul>
    </div>
  )
}

export default Trending