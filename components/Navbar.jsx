import Image from 'next/image'
import styles from '../styles/Navbar.module.css'
import { useSelector } from 'react-redux'
import Link from 'next/link'

const Navbar = () => {
    const quantity = useSelector(state => state.cart.quantity);

    return (
        <div className={styles.container}>
            {/* cred */}
            <div className={styles.item}>
                <div className={styles.callButton}>
                    <Image src="/img/phone.png" alt="call" width="32" height="32"/>
                </div>
                <div className={styles.texts}>
                    <div className={styles.text}>ORDER NOW</div>
                    <div className={styles.text}>71 239 812</div>
                </div>
            </div>

            {/* menu items */}
            <div className={styles.item}>
                <ul className={styles.list}>
                    <li className={styles.listItem}>Home</li>
                    <li className={styles.listItem}>Products</li>
                    <li className={styles.listItem}>Menu</li>
                    <Link href="/" passHref>
                        <Image src="/img/logo.png" alt="logo" width="130px" height="104px" className={styles.home}/>
                    </Link>
                    <li className={styles.listItem}>Events</li>
                    <li className={styles.listItem}>Blog</li>
                    <li className={styles.listItem}>Contact</li>
                </ul>
            </div>

            {/* cart button */}
            <Link href="/cart" passHref>
                <div className={styles.item}>
                    <div className={styles.cart}>
                        <Image src="/img/cart.png" alt="logo" width="40px" height="40px"/>
                        <div className={styles.counter}>{quantity}</div>
                    </div>
                </div>
            </Link>

        </div>
    )
}

export default Navbar