import styles from "./Rating.module.css"
import Icon from '../../assets/starIcon.svg?react';
import PropTypes from 'prop-types'; // Import PropTypes package

export default function Rating(props) {
    return(
           <Icon className={styles.stars} style={{fill: props.fill}}  alt = "etoile"/>
    )
}

Rating.propTypes = {
    fill: PropTypes.string.isRequired
}
