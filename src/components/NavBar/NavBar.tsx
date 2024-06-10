
import styles from './NavBar.module.scss'
import { Link } from "react-router-dom"

export const NavBar = () => {
    return (
        <div className={styles.navBar}>
            <span><Link to='#about'>About</Link><Link to='#projects'>Proyectos</Link><Link to='#exp'>Exp</Link><Link to='#contact'>Contacto</Link></span>
        </div>
    )
}
