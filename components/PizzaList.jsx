import PizzaCard from './PizzaCard'
import styles from '../styles/PizzaList.module.css'

const PizzaList = () => {
    return (
        <div className={styles.container}>
            {/* Title */}
            <h1 className={styles.title}>
                OH-BAY, I'm 𝓵𝓸𝓿𝓲𝓷 It
            </h1>

            {/* Description */}
            <p className={styles.desc}>
                People from everywhere have tasted lots of PIZZAs.
                It's not easy getting back at one. You always see them come back
                for the best PIZZA anyone could diserve to get. Elite PIZZA is
                what we serve.
            </p>

            {/* PIZZAs */}
            <div className={styles.wrapper}>
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
            </div>

        </div>
    )
}

export default PizzaList