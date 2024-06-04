import {Link} from "react-router-dom"
import styles from './Erreur.module.css'

export default function Erreur() {
    return(
        <div className={styles.errorBlock}>
            <h1 className={styles.errorNumber}>404</h1>
            <div className={styles.errorTextBlock}>
                <h2 className={styles.errorText}>Oups! La page que&nbsp;</h2>
                <span className={styles.errorText}>vous demandez n&apos;existe pas.</span>
            </div>
            <p className={styles.errorLinks}>
                <Link to="/" className={styles.errorLink}>Retourner sur la page d’accueil</Link>
            </p>
        </div>
    )
}