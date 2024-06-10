import imgPerfil from '../../assets/social/redes-perfil.png'
import styles from './About.module.scss'

const About = () => {
    return (
        <div className={styles.about}>
            <div className={styles.img}>
                <img src={imgPerfil} alt='imgPerfil' width='85%'/>
            </div>
            <div className={styles.contText}>
                <h2>👋 ¡Hola! Soy Julián </h2><p>un apasionado FullStack.</p>
                <p>🚀 Mi objetivo es crear soluciones de software innovadoras y eficientes.</p>
                <p>Me entusiasma contribuir al avance tecnológico y la integración continua de la 
                    sociedad con el mundo digital.</p>
            </div>
        </div>
    )
}

export default About;