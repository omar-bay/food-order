import Image from 'next/image'
import styles from '../styles/Footer.module.css'

const Footer = () => {
    return (
        <div className={styles.container}>
            {/* Image */}
            <div className={styles.item}>
                <Image src="/img/bg.png" layout="fill" alt="" objectFit='cover'/>
            </div>

            {/* Contact */}
            <div className={styles.item}>
                {/* Motto */}
                <div className={styles.card}>
                    <h2 className={styles.motto}>
                        DONE WITH PASION, THE PIZZA-LOVER'S PIZZA.
                    </h2>
                </div>

                {/* Address */}
                <div className={styles.card}>
                    <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
                    <p className={styles.text}>
                        445 Route St <br />
                        Apt 123 <br />
                        ADA, 12345
                    </p>
                    <p className={styles.text}>
                        241 Raily Street <br />
                        VUX 000 <br />
                        NY, 12345
                    </p>
                    <p className={styles.text}>
                        121 Juam Street <br />
                        Zpr 400 <br />
                        LA, 12399
                    </p>
                </div>

                {/* Working Hours */}
                <div className={styles.card}>
                    <h1 className={styles.title}>WORKING HOURS</h1>
                    <p className={styles.text}>
                        MONDAY UNTIL FRIDAY <br />
                        9:00 - 22:00
                    </p>
                    <p className={styles.text}>
                        SATURDAY - SUNDAY <br />
                        12:00 - 23:59
                    </p>
                </div>

            </div>

        </div>
    )
}

export default Footer