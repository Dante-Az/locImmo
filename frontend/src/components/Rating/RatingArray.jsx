import Rating from "./Rating"

export default function RatingArray(props) {
    //On crée un tableau de 5 éléments
    const starArray = [...Array(5).keys()].map(i => i + 1);
    const ratings = starArray.map (i => // Itérer le nombre d'étoile nécessaire (Max: 5)
        <Rating 
        key = {i}
        fill = {props.rating >= i ? "#FF6060" : "#E3E3E3"} // On affiche autant d'étoiles colorées que la note reçue, les autres seront en gris
        />
        )
    return <>{ratings}</>
}
import PropTypes from 'prop-types';

RatingArray.propTypes = {
    rating: PropTypes.number.isRequired
}
