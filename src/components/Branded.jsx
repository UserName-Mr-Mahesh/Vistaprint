import React from 'react'
import style from '../styles/branded.module.css';
import b1 from '../images/branded/b1.webp';
import b2 from '../images/branded/b2.webp';
import b3 from '../images/branded/b3.webp';
import b4 from '../images/branded/b4.webp';
const Branded = () => {
  return (
    <div id={style.container}>
        <h1>Branded Products</h1>
        <ul>
            <li><img src={b1} alt="" /><br />Custom Adidas Hoodies →</li>
            <li><img src={b2} alt="" /><br />US POLO ASSN. Fleece Jacket →</li>
            <li><img src={b3} alt="" /><br />Adidas Jackets →</li>
            <li><img src={b4} alt="" /><br />Men's Scott Polo T-Shirts →</li>
        </ul>
    </div>
  )
}

export default Branded