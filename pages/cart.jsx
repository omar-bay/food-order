import Image from 'next/image'
import styles from '../styles/Cart.module.css'

const Cart = () => {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <table className={styles.table}>
                    <tr className={styles.tr}>
                        <th>Product</th>
                        <th>Name</th>
                        <th>Extras</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>
                    <tr>
                        <td>
                            <div className={styles.imgContainer}>
                                <Image
                                src="/img/pizza.png"
                                layout="fill"
                                objectFit="cover"
                                alt=""
                                />
                            </div>
                        </td>
                        <td>
                            <span className={styles.name}>CORALZO</span>
                        </td>
                        <td>
                            <span className={styles.extras}>
                                Double ingredient, spicy sauce
                            </span>
                        </td>
                        <td>
                            <span className={styles.price}>$19.9</span>
                        </td>
                        <td>
                            <span className={styles.quantity}>2</span>
                        </td>
                        <td>
                            <span className={styles.total}>$39.9</span>
                        </td>
                    </tr>
                    {/* row2 */}
                    <tr>
                        <td>
                            <div className={styles.imgContainer}>
                                <Image
                                src="/img/pizza.png"
                                layout="fill"
                                objectFit="cover"
                                alt=""
                                />
                            </div>
                        </td>
                        <td>
                            <span className={styles.name}>CORALZO</span>
                        </td>
                        <td>
                            <span className={styles.extras}>
                                Double ingredient, spicy sauce
                            </span>
                        </td>
                        <td>
                            <span className={styles.price}>$19.9</span>
                        </td>
                        <td>
                            <span className={styles.quantity}>2</span>
                        </td>
                        <td>
                            <span className={styles.total}>$39.9</span>
                        </td>
                    </tr>
                    {/* row3 */}
                    <tr>
                        <td>
                            <div className={styles.imgContainer}>
                                <Image
                                src="/img/pizza.png"
                                layout="fill"
                                objectFit="cover"
                                alt=""
                                />
                            </div>
                        </td>
                        <td>
                            <span className={styles.name}>CORALZO</span>
                        </td>
                        <td>
                            <span className={styles.extras}>
                                Double ingredient, spicy sauce
                            </span>
                        </td>
                        <td>
                            <span className={styles.price}>$19.9</span>
                        </td>
                        <td>
                            <span className={styles.quantity}>2</span>
                        </td>
                        <td>
                            <span className={styles.total}>$39.9</span>
                        </td>
                    </tr>
                    {/* row4 */}
                    <tr>
                        <td>
                            <div className={styles.imgContainer}>
                                <Image
                                src="/img/pizza.png"
                                layout="fill"
                                objectFit="cover"
                                alt=""
                                />
                            </div>
                        </td>
                        <td>
                            <span className={styles.name}>CORALZO</span>
                        </td>
                        <td>
                            <span className={styles.extras}>
                                Double ingredient, spicy sauce
                            </span>
                        </td>
                        <td>
                            <span className={styles.price}>$19.9</span>
                        </td>
                        <td>
                            <span className={styles.quantity}>2</span>
                        </td>
                        <td>
                            <span className={styles.total}>$39.9</span>
                        </td>
                    </tr>
                </table>
            </div>

            <div className={styles.right}>
                <div className={styles.wrapper}>
                    <h2 className={styles.title}>CART TOTAL</h2>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Subtotal:</b>$79.9
                    </div>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Discount:</b>$0.0
                    </div>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Total:</b>$79.9
                    </div>
                    <button className={styles.button}>CHECKOUT NOW</button>
                </div>
            </div>

        </div>
    )
}

export default Cart