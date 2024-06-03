import Banner from '../../components/Banner/Banner'
import Dropdown from '../../components/Dropdown/Dropdown'
import styles from './About.module.css'
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
            image = "https://source.unsplash.com/Bkci_8qcdvQ"
            imageAlt ="vue sur des montagnes"
            text=""
            />
            <div className={styles.dropdown}>
                {dropdownMenu}
            </div>
        </div>
    )
}