import PropTypes from 'prop-types'; // Import PropTypes

import styles from './Host.module.css'

export default function Host(props) {
    return (
        <div className={styles.hostContainer}>
            <div className={styles.name}>{props.name}</div>
            <div className={styles.profile} style={{ backgroundImage: `url(${props.picture})`}}></div>
        </div>
    )
}

// Add PropTypes validation
Host.propTypes = {
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired
}