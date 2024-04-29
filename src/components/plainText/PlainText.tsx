import style from './PlainText.module.scss'
import plains from "../../utils/plains"
import { trimmerText } from '../../utils/trimmerText'
import { useEffect, useState } from 'react'
import Swal from 'sweetalert2'

const PlainText = ({title} : {title: string}) => {
    
    const [vpWidth, setVpWidth] = useState(window.innerWidth)
    const data = plains.find(elem => elem.section === title)
    
    useEffect(() => {
        window.addEventListener('resize', handleResize)
    },[])

    const handleResize = () => {
        setVpWidth(window.innerWidth)
    }

    const showData = trimmerText(data?.description, vpWidth)

    const showModal = () => {
        Swal.fire({
            title: 'Información',
            text: data?.description,
            icon: 'info',
            confirmButtonText: 'Volver',
        })
    }
    return(
        <div className={style.content}>
            <h2>{data?.section}</h2>
            <span>{showData?.[0]}</span>
            <h6 className={style.showModal} onClick={showModal}>{showData?.[1]}</h6>
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