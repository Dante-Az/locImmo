import { useEffect, useState } from 'react';
import image from '../../assets/IMG2.jpg'
import Banner from '../../components/Banner/Banner'
import Cards from '../../components/Cards/Cards'
import styles from './Home.module.css'
export default function Home() {
    // On déclare une nouvelle variable d'état, data qui est au départ []
    const [data, setData] = useState([]);
    
    // On utilise useEffect pour fetch les donnés du json
    // useEffect indique à React que notre composant doit exécuter quelque chose après chaque affichage. Elle s'exécute après le 1er affichage et à chaque maj du DOM
    useEffect(() => {
        fetch("../../logement.json")
        .then(res => res.json())
        .then(body => setData(body));
      }, []);

    // On crée un tableau avec la méthode map qu'on va retourner dans le composant Cards
    const cardsElements = data.map(card => {
        console.log(card.id)
        return <Cards 
        key={card.id}
        id={card.id}
        title={card.title}
        cover={card.cover}
        />
      })
    return(
        <div className={styles.home}>
                <Banner
                image = {image}
                imageAlt ="vue sur des falaises au bord de la mer"
                text="Chez vous, partout et ailleurs"
                />
            <div className={styles.cardsContainer}>
                {cardsElements}
            </div>
        </div>
    )
}