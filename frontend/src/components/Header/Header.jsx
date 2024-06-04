import Logo from '../../assets/svg-2.svg?react';
import styles from "./Header.module.css";
import Navbar from '../Navbar/Navbar';

export default function Header() {

    return(
        <header className={styles.header}>
            <Logo className={styles.headerLogo} />
            <Navbar />
        </header>
    )
}