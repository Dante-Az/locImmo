import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types'; // Import PropTypes
import styles from './Banner.module.css'

export default function Banner(props) {
    const {pathname} = useLocation();
    return(
        // On affiche conditionnellement la bannière en fonction de la page sur laquelle on se trouve avec useLocation
            <div className={`${pathname === '/' ? styles.bannerHome : ""} ${styles.banner}`}>
                <img src={props.image} alt= {props.imageAlt} className={`${pathname === '/' ? styles.bannerHomeImg : ""} ${styles.bannerImg}`} />
                <span className={styles.bannerText}>{props.text}</span>
            </div>     
    )
}

Banner.propTypes = {
    image: PropTypes.string.isRequired, // Add 'image' prop to props validation
    imageAlt: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}