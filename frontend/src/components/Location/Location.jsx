import PropTypes from 'prop-types'; // Import PropTypes

import styles from './Location.module.css'

export default function Location(props) {
    return (
        <div>
            <h1 className={styles.title}>{props.title}</h1>
            <h3 className={styles.location}>{props.location}</h3>
        </div>
    )
}

// Add PropTypes validation
Location.propTypes = {
    title: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired
}