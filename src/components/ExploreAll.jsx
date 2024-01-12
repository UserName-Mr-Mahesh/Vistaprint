import React from 'react'
import style from '../styles/explore.module.css';
import e1 from '../images/exploreAll/e1.webp';
import e2 from '../images/exploreAll/e2.jpg';
import e3 from '../images/exploreAll/e3.webp';
import e4 from '../images/exploreAll/e4.webp';
import e5 from '../images/exploreAll/e5.webp';
import e6 from '../images/exploreAll/e6.webp';
import e7 from '../images/exploreAll/e7.webp';
import e8 from '../images/exploreAll/e8.jpeg';
import e9 from '../images/exploreAll/e9.webp';
import e10 from '../images/exploreAll/e10.webp';
import e11 from '../images/exploreAll/e11.webp';
import e12 from '../images/exploreAll/e12.webp';

const ExploreAll = () => {
  return (
    <div id={style.container}>
        <h1>Explore all categories</h1>
        <ul>
            <li><img src={e1} alt="" /><br />Visiting Cards</li>
            <li><img src={e2} alt="" /><br />Clothing, Caps & Bags</li>
            <li><img src={e3} alt="" /><br />Winter Were</li>
            <li><img src={e4} alt="" /><br />Calendars, Notebooks & Diaries</li>
            <li><img src={e5} alt="" /><br />Signs, Posters & Marketing Materials</li>
            <li><img src={e6} alt="" /><br />Stamps and Ink</li>
            <li><img src={e7} alt="" /><br />Labels, Stickers & Packaging</li>
            <li><img src={e8} alt="" /><br />Stationery, Letterheads & Notebooks</li>
            <li><img src={e9} alt="" /><br />Mugs, Albums & Gifts</li>
            <li><img src={e10} alt="" /><br />Drinkware</li>
            <li><img src={e11} alt="" /><br />Invitations & Announcements</li>
            <li><img src={e12} alt="" /><br />Personalised Pens</li>
        </ul>
    </div>
  )
}

export default ExploreAll