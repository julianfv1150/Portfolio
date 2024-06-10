import { Link } from 'react-scroll'
import styles from './NavBar.module.scss'

export const NavBar = () => {
    return (
        <div className={styles.navBar}>
            <span>
                <Link to='about' smooth={true}>About</Link>
                <Link to='projects' smooth={true}>Proyectos</Link>
                <Link to='exp' smooth={true}>Exp</Link>
                <Link to='contact' smooth={true}>Contacto</Link>
            </span>
        </div>
    )
}
