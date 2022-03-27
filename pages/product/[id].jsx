import { useState } from 'react'
import Image from 'next/image'
import styles from '../../styles/Product.module.css'

const Product = () => {
    const [size, setSize] = useState(0)

    const pizza = {
        id: 1,
        img: "/img/pizza.png",
        name: "Peppe Buex Bay",
        price: [19.90, 23.90, 27.90],
        desc: "LauriPatterson was the first Finder, and we are his descenders."
    };

    return (
        <div className={styles.container}>
            {/* Image */}
            <div className={styles.left}>
                <div className={styles.imgContainer}>
                    <Image src={pizza.img} layout="fill" alt=""/>
                </div>
            </div>

            {/* Cred */}
            <div className={styles.right}>
                <h1 className={styles.title}>{pizza.name}</h1>
                <span className={styles.price}>${pizza.price[size]}</span>
                <p className={styles.desc}>{pizza.desc}</p>
                <h3 className={styles.choose}>Choose the size</h3>
                <div className={styles.sizes}>
                    <div className={styles.size} onClick={() => setSize(0)}>
                        <Image src="/img/size.png" layout="fill" alt=""/>
                        <span className={styles.number}>Small</span>
                    </div>
                    <div className={styles.size} onClick={() => setSize(1)}>
                        <Image src="/img/size.png" layout="fill" alt=""/>
                        <span className={styles.number}>Medium</span>
                    </div>
                    <div className={styles.size} onClick={() => setSize(2)}>
                        <Image src="/img/size.png" layout="fill" alt=""/>
                        <span className={styles.number}>Large</span>
                    </div>
                </div>
                <h3 className={styles.choose}>Choose additional ingredients</h3>
                <div className={styles.ingredients}>
                    <div className={styles.option}>
                        <input
                        type="checkbox"
                        id="double"
                        name="double"
                        className={styles.checkbox}
                        />
                        <label htmlFor='double'>Double Ingredients</label>
                    </div>
                    <div className={styles.option}>
                        <input
                        type="checkbox"
                        id="cheese"
                        name="cheese"
                        className={styles.checkbox}
                        />
                        <label htmlFor='cheese'>Extra Cheese</label>
                    </div>
                    <div className={styles.option}>
                        <input
                        type="checkbox"
                        id="spicy"
                        name="spicy"
                        className={styles.checkbox}
                        />
                        <label htmlFor='spicy'>Hot Sauce</label>
                    </div>
                    <div className={styles.option}>
                        <input
                        type="checkbox"
                        id="garlic"
                        name="garlic"
                        className={styles.checkbox}
                        />
                        <label htmlFor='garlic'>Garlic Sauce</label>
                    </div>
                </div>
                <div className={styles.add}>
                    <input type="number" defaultValue={1} className={styles.quantity}/>
                    <button className={styles.button}>Add to Cart</button>
                </div>
            </div>

        </div>
    )
}

export default Product