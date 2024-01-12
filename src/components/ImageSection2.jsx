import React from 'react'
import style from '../styles/imageSection.module.css';
const ImageSection2 = () => {
  return (
    <div id={style.imageSection}>
        <div className={style.image} id={style.img3}>
            <ul>
                <li><h1>My Name, My Pride</h1></li>
                <li><p>100 Visiting Cards at Rs 190</p></li>
                <li><button>Shop Now</button></li>
            </ul>
        </div>
        <div className={style.image} id={style.img4}>
            <ul>
                <li><h1>Preserve your cherished moments</h1></li>
                <li><p>Start at Rs 650</p></li>
                <li><button>Photo Albums</button></li>
                <li><button>Layflat Photo Albums</button></li>
            </ul>
        </div>
    </div>
  )
}

export default ImageSection2