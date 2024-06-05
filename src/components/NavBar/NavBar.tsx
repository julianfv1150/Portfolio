
import styles from './NavBar.module.scss'
import { Link } from "react-router-dom"

export const NavBar = () => {
    return (
        <>
            <div className={styles.navBar}>
                <span><Link to='#about'>Sobre mí</Link><Link to='#project'>Mis proyectos</Link><Link to='#exp'>Exp</Link><Link to='#contact'>Contacto</Link></span>
            </div>
        </>
    )
}
