import Image from 'next/image'
import { useState } from 'react'
import styles from '../styles/Featured.module.css'

const Featured = () => {
    const [index, setIndex] = useState(0)

    const images = [
        "/img/featured3.png",
        "/img/featured.png",
        "/img/featured2.png",
    ];

    const handleArrow = (direction) => {
        if(direction == 'l') 
            setIndex(index!=0 ? index-1 : images.length-1)
        if(direction == 'r')
        setIndex(index!=images.length-1 ? index+1 : 0)
    }

    return (
        <div className={styles.container}>
            {/* Left Arrow */}
            <div className={styles.arrowContainer} style={{ left:0 }} onClick={()=>handleArrow("l")}>
                <Image src="/img/arrowl.png" alt="" layout="fill"/>
            </div>

            {/* Picture */}
            <div className={styles.wrapper} style={{ transform: `translateX(${-100*index}vw)` }}>
                {images.map((img, index) => (
                    <div className={styles.imageContainer} key={index}>
                        <Image src={img} alt="" layout="fill" objectFit="contain"/>
                    </div>
                ))}
            </div>

            {/* Right Arrow */}
            <div className={styles.arrowContainer} style={{ right: 0 }} onClick={()=>handleArrow("r")}>
                <Image src="/img/arrowr.png" alt="" layout="fill"/>
            </div>

        </div>
    )
}

export default Featured