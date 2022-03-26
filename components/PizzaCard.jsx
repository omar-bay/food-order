import Image from 'next/image'
import styles from '../styles/PizzaCard.module.css'

const PizzaCard = () => {
    return (
        <div className={styles.container}>
            {/* Image */}
            <Image src="/img/pizza.png" alt="" width="500" height="500"/>
            <h1 className={styles.title}>Pepperoni Bue Bay</h1>
            <span className={styles.price}>$19.90</span>
            <p className={styles.desc}>
                LauriPatterson was the first Finder, and we are his
                descenders.
            </p>

            {/* Description */}

            {/* Title */}

        </div>
    )
}

export default PizzaCard