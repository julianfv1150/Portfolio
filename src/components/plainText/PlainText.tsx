import style from './PlainText.module.scss'
import plains from "../../utils/plains"
import { trimmerText } from '../../utils/trimmerText'
import { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'
//import writeClipboard from '../../utils/writeClipboard'

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

    const handleClick = (text: string | undefined) => {
        if(typeof(text) === 'string'){
            navigator.clipboard.writeText(text)
        }
    }

    return(
        <div className={style.content}>
            <h2>{data?.section}</h2>
            <span>{showData?.[0]}</span>
            <h6 className={style.showModal} onClick={showModal}>{showData?.[1]}</h6>
            {data?.country ? <h4>🌎: {data?.country}</h4> : null}
            {data?.UTC ? <h4>🕘: {data?.UTC}</h4> : null}
            {data?.mobile ? <h4>📱: {data?.mobile}</h4> : null}
            {data?.mail ? <h4>📩: {data?.mail}</h4> : null}
            <button onClick={()=>handleClick(data?.mail)}></button>
            {data?.cv ? <h4>📎: <Link to={data?.cv}>Descarga mi CV</Link></h4> : null}
            <div className='showIcons'>
                {data?.social?.map((elem) =>
                    (<Link to={`${elem.link}`} key={elem.name} target='_blank'><img src={elem.icon} alt={elem.name} width='50px' /></Link>))
                }
            </div>
        </div>
    )
}

export default PlainText;