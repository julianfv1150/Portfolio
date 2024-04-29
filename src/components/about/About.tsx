import PlainText from "../plainText/PlainText";
import imgPerfil from '../../assets/social/redes-perfil.png'

const About = () => {
    return (
        <>
            <img src={imgPerfil} alt='imgPerfil' width='250px'/>
            <PlainText  title="Sobre mí" />
        </>
    )
}

export default About;