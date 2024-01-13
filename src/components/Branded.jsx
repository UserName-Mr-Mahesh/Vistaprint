import React from 'react'
import style from '../styles/branded.module.css';
import b1 from '../images/branded/b1.webp';
import b2 from '../images/branded/b2.webp';
import b3 from '../images/branded/b3.webp';
import b4 from '../images/branded/b4.webp';
import b5 from '../images/branded/b5.webp';
import b6 from '../images/branded/b6.webp';
import b7 from '../images/branded/b7.webp';
import b8 from '../images/branded/b8.webp';

const Branded = () => {
  return (
    <div id={style.container}>
        <h1>Branded Products</h1>
        <ul>
            <li><img src={b1} alt="" /><br />Custom Adidas Hoodies →</li>
            <li><img src={b2} alt="" /><br />US POLO ASSN. Fleece Jacket →</li>
            <li><img src={b3} alt="" /><br />Adidas Jackets →</li>
            <li><img src={b4} alt="" /><br />Men's Scott Polo T-Shirts →</li>
            <li><img src={b5} alt="" /><br />Puma Polo T-Shirts →</li>
            <li><img src={b6} alt="" /><br />Adidas Polo T-Shirts →</li>
            <li><img src={b7} alt="" /><br />Cambridge Dress Shirts →</li>
            <li><img src={b8} alt="" /><br />Puma Caps →</li>

        </ul>
    </div>
  )
}

export default Branded