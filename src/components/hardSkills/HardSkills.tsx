import style from './HardSkills.module.scss'
import plains from "../../utils/plains"

const HardSkill = ({title} : {title : string}) => {

    const data = plains.find(elem => elem.section === title)

    return (
        <>
            <h2>{title}</h2>
            {data?.techs?.map(elem => 
                (<span key={elem.name} className={style.techs}><img src={elem.icon} alt={elem.name} width='50px' /></span>))
            }
        </>
    )
}

export default HardSkill;