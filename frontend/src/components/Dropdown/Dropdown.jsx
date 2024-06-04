import {useState} from 'react';
import { useLocation } from 'react-router-dom';
import Icon from '../../assets/arrow.svg?react';
import styles from './Dropdown.module.css'
import PropTypes from 'prop-types';
export default function Dropdown(props) {
    // On déclare une nouvelle variable d'état, isActive qui est au départ false
    const [isActive, setIsActive] = useState(false);
    // On utilise useLocation pour check sur quelle route on se trouve
    const {pathname} = useLocation();
    let logementPath = `/logement/${props.id}`;
    console.log(pathname);
    console.log(props);
    // Fonction qui gère le click sur l'élément Dropdown qui va inverser son état
    const handleClick = () => {
            
            setIsActive(!isActive);
        };
    return(
        // On change l'affichage de l'element si on se trouve sur une page de logement
         <div className={`${styles.dropdownCard} ${pathname === logementPath ? styles.dropdownCardRow : ''}`}>
            <div className={`${styles.dropdownBtn} ${pathname === logementPath ? styles.dropdownRowRadius : ''}`} onClick={handleClick}>
                <h2 className={`${styles.dropdownTitle} ${pathname === logementPath ? styles.dropdownTitleRow : ''}`}>{props.title}</h2>
                {/* On gère la direction des flèches en fonction de si l'élément est actif ou non */}
                <Icon className={`${styles.dropdownArrow} ${isActive ? styles.dropdownArrowRot : ''}`}/>
            </div>
            {/* Si l'élement est actif */}
            {isActive && ( 
                 <div className={`${styles.dropdownContent} ${pathname === logementPath ? styles.dropdownRowRadius : ''}`}>
                 {/* On check le titre de l'élément pour savoir s'il faut l'afficher normalement ou sous forme de liste */}
                 {props.title === "Equipements" ? <ul className={styles.list}>{Array.isArray(props.array) ? props.array.map(item => 
                    (<li className={`${styles.dropdownArray} ${styles.dropdownTextRow}`} key={item}>{item}</li>)) : []}</ul> : <p className={`${styles.dropdownText} ${styles.dropdownTextRow}`}>{props.content}</p>}
             </div>
            )}
        </div>
    )
}



Dropdown.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  array: PropTypes.arrayOf(PropTypes.string),
  content: PropTypes.string,
};