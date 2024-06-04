import Banner from '../../components/Banner/Banner'
import Dropdown from '../../components/Dropdown/Dropdown'
import styles from './About.module.css'
import image from '../../assets/IMG2.jpg'
import data from './AboutData'
export default function About() {
    const dropdownMenu = data.map(card => {
        return <Dropdown 
        key={card.id}
        content={card.description}
        {...card}
        />
    })
    return(
        <div>
            <Banner 
            image = {image}
            imageAlt ="vue sur des montagnes"
            text=""
            />
            <div className={styles.dropdown}>
                {dropdownMenu}
            </div>
        </div>
    )
}