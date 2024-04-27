import plains from "../../utils/plains"

const HardSkill = ({title} : {title : string}) => {

    const data = plains.find(elem => elem.section === title)

    return [
        <>
            <h2>{title}</h2>
            {data?.techs?.map((elem, index) => (<span key={index}><img src={elem} alt={elem} width='50px' /></span>))}
        </>
    ]

}

export default HardSkill;