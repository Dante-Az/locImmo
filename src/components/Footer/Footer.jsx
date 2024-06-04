import Logo from '../../assets/svg-2.svg?react';
import styles from "./Footer.module.css"
export default function Footer() {
    return(
        <footer className={styles.footer}>
            <Logo className={styles.footerLogo}/>
            <div className={styles.footerText}>
            © 2024 Jérémy Projet Greta Final. All rights reserved
            </div>
        </footer>
    )
}