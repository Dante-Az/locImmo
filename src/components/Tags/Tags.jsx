import PropTypes from 'prop-types';
import styles from './Tags.module.css';

export default function Tags(props) {
    return(
        <div className={styles.tagsBackground}>
            <p className={styles.tagsText}>{props.tag}</p>
        </div> 
    )
}

Tags.propTypes = {
    tag: PropTypes.string.isRequired
};
