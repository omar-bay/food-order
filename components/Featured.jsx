import Image from 'next/image'
import styles from '../styles/Featured.module.css'

const Featured = () => {
    const images = [
        "/img/featured.png",
        "/img/featured2.png",
        "/img/featured3.jpg"
    ];

    return (
        <div className={styles.container}>
            {/* Sliding Images */}
            <div className={styles.arrowContainer} style={{ left:0 }}>
                <Image src="/img/arrowl.png" alt="" layout="fill" />
            </div>
            
            <div className={styles.wrapper}>
                {images.map((img, index) => (
                    <div className={styles.imageContainer} key={index}>
                        <Image src={img} alt="" layout="fill" />
                    </div>
                ))}
            </div>
            
            <div className={styles.arrowContainer} style={{ right: 0 }}>
                <Image src="/img/arrowr.png" alt="" layout="fill" />
            </div>

        </div>
    )
}

export default Featured