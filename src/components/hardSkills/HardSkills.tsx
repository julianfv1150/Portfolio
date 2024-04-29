import plains from "../../utils/plains"

const HardSkill = ({title} : {title : string}) => {

    const data = plains.find(elem => elem.section === title)

    return (
        <>
            <h2>{title}</h2>
            <div className='showIcons'>
            {data?.techs?.map(elem => 
                (<img src={elem.icon} key={elem.name}alt={elem.name} width='50px' />))
            }</div>
        </>
    )
}

export default HardSkill;