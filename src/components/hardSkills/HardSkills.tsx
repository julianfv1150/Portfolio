import plains from "../../utils/plains"
import styles from './HardSkills.module.scss'

const HardSkill = () => {

    const data = plains.find(elem => elem.section === 'hardSkills')

    return (
        <div className={styles.hSkills}>
            <div className={styles.contText}>
                <h2>TECNOLOGÍAS</h2>
                <p>🧐 Siempre busco estar al pendiente de las últimas actualizaciones en tecnología.</p>
            </div>
            <div className={styles.contIcon}>
            {data?.techs?.map(elem => 
                (<img src={elem.icon} key={elem.name}alt={elem.name} width='50px' />))
            }</div>
        </div>
    )
}

export default HardSkill;