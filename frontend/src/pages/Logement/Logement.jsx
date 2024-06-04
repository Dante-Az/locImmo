import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import Dropdown from '../../components/Dropdown/Dropdown';
import Location from '../../components/Location/Location';
import Slideshow from '../../components/Slideshow/Slideshow';
import Host from '../../components/Host/Host';
import TagsMap from '../../components/Tags/TagsMap';
import RatingArray from '../../components/Rating/RatingArray';
import styles from './Logement.module.css';
export default function Logement() {

    // On appelle le hook useParams qu'on va utiliser pour récupérer l'id
    const params = useParams();

    // On déclare plusieurs nouvelles variables d'état pour tous les éléments qu'on veut afficher sur la page
    const [logements, setLogements] = useState(null);
    const [logement, setLogement] = useState({});
    const [tags, setTags] = useState([]);
    const [rating, setRating] = useState ("");
    const [host, setHost] = useState ({});
    const [pictures, setPictures] = useState([]);
    const [description, setDescription] = useState("");
    const [equipments, setEquipments] = useState("");

    // On appelle le hook useNavigate pour rediriger l'user
    let navigate = useNavigate();

    // On utilise useEffect pour fetch les donnés du json
    // useEffect indique à React que notre composant doit exécuter quelque chose après chaque affichage. Elle s'exécute après le 1er affichage et à chaque maj du DOM
    useEffect(() => {
        fetch("../logement.json")
        .then(res => res.json())
        .then(body => setLogements(body));
    }, []);


    // Gestion des données dans les states et gestion des erreurs
    useEffect(() => {
        // Si logements est null on break
        if (logements === null){
        return;
        }
        // Sinon on continue l'execution du code pour récupérer les données
        const logement = logements.find((element) => element.id === params.id);
        if(logement){
        setLogement(logement);
        setTags(logement.tags);
        setRating(logement.rating)
        setHost(logement.host);
        setPictures(logement.pictures);
        setDescription(logement.description);
        setEquipments(logement.equipments);

        // Si logement est false, alors on redirige vers la page Erreur    
        } else {
        navigate('*', { replace: true });
        }
    }, [logements, params.id, navigate]);
    

    return(
        <div>
            <div className={styles.container}>
                <Slideshow pictures={pictures} />
            </div>
            <div className={styles.mainBlock}>
                <div className={styles.locationTagContainer}>
                    <Location 
                    title = {logement.title}
                    location = {logement.location}
                    />
                    <div className={styles.tagsContainer}>
                        <TagsMap tag = {tags}/>
                    </div>
                </div>
                <div className={styles.hostRatingBlock}>
                    <Host
                        name = {host.name}
                        picture = {host.picture} 
                        />
                        <div className={styles.starBlock}>
                        <RatingArray
                        rating = {rating}
                        />
                        </div>
                </div>
            </div>    
            <div className={styles.dropdownBlock}>
                <Dropdown 
                id = {params.id}
                title = "Description"
                content = {description}
                />
                <Dropdown 
                id = {params.id}
                title = "Equipements"
                array = {equipments}
                />
            </div>    
        </div>
    )
}