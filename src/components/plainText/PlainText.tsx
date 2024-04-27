import style from './PlainText.module.scss'
import plains from "../../utils/plains"

const PlainText = ({title} : {title: string}) => {

    const data = plains.find(elem => elem.section === title)
    
    return(
        <div className={style.content}>
            <h2>{data?.section}</h2>
            <p>{data?.description}</p>
            {data?.country ? <h4>🌎: {data?.country}</h4> : null}
            {data?.UTC ? <h4>🕘: {data?.UTC}</h4> : null}
            {data?.mobile ? <h4>📱: {data?.mobile}</h4> : null}
            {data?.portfolio ? <a href={data?.portfolio}>💼</a> : null}
            {data?.whatsapp ? <a href={data?.whatsapp}>WSP</a> : null}
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