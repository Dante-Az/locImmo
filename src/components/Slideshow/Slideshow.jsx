import styles from './Slideshow.module.css'
import Icon from '../../assets/sliderArrow.svg?react';
import { useState } from "react";
import PropTypes from 'prop-types';

const ImageSlider = ({pictures}) => {
    // On déclare une nouvelle variable d'état, currentIndex qui est au départ 0
    const [currentIndex, setCurrentIndex] = useState(0);
    console.log(pictures)
    // Fonctions qui gèrent le changement des images en fonction du currentIndex

    //Pour aller à l'image précédente
    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? pictures.length -1 : currentIndex -1;
        setCurrentIndex(newIndex);
    };
    //Pour aller à l'image suivante
    const goToNext = () => {
        const isLastSlide = currentIndex === pictures.length -1;
        const newIndex = isLastSlide ? 0 : currentIndex +1;
        setCurrentIndex(newIndex);
    };
    // Nombre de l'image qui est actuellement affichée
    const indexNumber = currentIndex + 1;

    return (
        <div className={styles.container}>
            {/* On affiche les flèches s'il y a plus d'une image sinon rien */}
            {pictures.length > 1 ? (
                <>
                    <Icon className={`${styles.sliderArrow} ${styles.leftArrow}`} onClick={goToPrevious}/>
                    <Icon className={`${styles.sliderArrow} ${styles.rightArrow}`} onClick={goToNext}/>
                </>
            ) : ""}
            
            <div className={styles.slider}
            // On affiche les images sous forme de background en fonction de leur index

                style={{ backgroundImage: `url(${pictures[currentIndex]})`}}> 
            </div>
            {/* Affichage du N° de l'image sur le nombre d'images total */}
            <p className={styles.slideNumber}>{[indexNumber]}/{[pictures.length]}</p>
        </div>
    
    );
};

ImageSlider.propTypes = {
    pictures: PropTypes.array.isRequired,
};

export default ImageSlider;