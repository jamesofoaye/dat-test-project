import Link from 'next/link';
import { Logo, Cart } from '../Icons';
import styles from './navbar.module.scss'

const Navbar = () =>  {
  return (
    <nav className={styles.container}>
        <Logo />

        <ul className={styles.links}>
            <li>
                <Link href="/">
                    <a>Home</a>
                </Link>
            </li>

            <li>
                <Link href="/#form">
                    <a>Form</a>
                </Link>
            </li>

            <li>
                <Link href="/#menu">
                    <a>Menu</a>
                </Link>
            </li>
        </ul>

        <div className={styles.cartSection}>
            <div className={styles.cart}>
                <Cart />
                <p className={styles.cartTotal}>2</p>
            </div>

            <button className={styles.button}>
                Log In
            </button>
        </div>
    </nav>
  );
}

export default Navbar;