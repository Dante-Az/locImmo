import PropTypes from 'prop-types'; // Add import statement

import styles from './Cards.module.css'
import {Link} from 'react-router-dom'

export default function Cards(props) {
    return(
        // On dirige l'user sur la page du logement en fonction de l'id de ce dernier
        <Link to={`/logement/${props.id}`} className={styles.cardsBox}>
        <div className={styles.cards}>
            <img src={props.cover} alt="photos d'appartement" className={styles.cardsImage} />
            <span className={styles.cardsText}>{props.title}</span>
            <div className={styles.cardsFilter}></div>
        </div>
        </Link>
    )
}

Cards.propTypes = {
    id: PropTypes.string.isRequired, // Add prop type validation for 'id'
    cover: PropTypes.string.isRequired, // Add prop type validation for 'cover'
    title: PropTypes.string.isRequired // Add prop type validation for 'title'
}