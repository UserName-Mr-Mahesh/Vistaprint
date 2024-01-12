import React from 'react'
import style from '../styles/imageSection.module.css';
const ImageSection = () => {
  return (
    <div id={style.imageSection} >
        <div className={style.image} id={style.img1}>
            <ul>
                <li><p>Stay organized with</p></li>
                <li><h1>Calenders, Notebooks & Diaries</h1></li>
                <li><p>start at Rs 150</p></li>
                <li><button>Calenders</button></li>
                <li><button>Notebooks</button></li>
                <li><button>Diaries</button></li>
            </ul>
        </div>
        <div className={style.image} id={style.img2}>
            <ul>
                <li><p>Wear your brand with pride</p></li>
                <li><h1>Winterwear</h1></li>
                <li><p>Start at Rs 700</p></li>
                <li><button>Shop Now</button></li>
            </ul>
        </div>
    </div>
  )
}

export default ImageSection