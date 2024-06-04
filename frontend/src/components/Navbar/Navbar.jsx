import {Link, useLocation} from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
    // On utilise useLocation pour check sur quelle route on se trouve
    const {pathname} = useLocation();
    console.log(pathname)
    return(

        <nav>
            <ul className="navList">
                <li className="navItems">
                    {/* Si on se trouve sur la page /Home le lien Accueil sera surligné */}
                    <Link to="/" className={pathname === "/" ? "navLinkActive" : "navLink"}>Accueil</Link>
                </li>
                <li className="navItems navItemsPadding">
                    {/* Si on se trouve sur la page /About le lien A propos sera surligné */}
                    <Link to="/About" className={pathname === "/About" ? "navLinkActive" : "navLink"}>A propos</Link>
                </li>
            </ul>    
        </nav>
    )
}
