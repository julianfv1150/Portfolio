import style from './PlainText.module.scss'
import plains from "../../utils/plains"

const PlainText = ({title} : {title: string}) => {

    const data = plains.find(elem => elem.section === title)
    
    return(
        <div className={style.content}>
            <h2>{data?.section}</h2>
            <p>{data?.description}</p>
            <p>{data?.country}</p>
            <p>{data?.UTC}</p>
            {data?.mobile ? <p>Mobile: {data?.mobile}</p> : null}
            {data?.whatsapp ? <a href={data?.whatsapp}>WhatsApp</a> : null}
            {data?.whatsapp ? <a href={data?.whatsapp}>Portfolio</a> : null}
            <div>{data?.social?.map((elem, index) =>
                    (<ul key={index}>
                        <li>{elem.name}:{elem.link}</li>
                    </ul>)    
                )}
            </div>

        </div>
    )
}

export default PlainText;