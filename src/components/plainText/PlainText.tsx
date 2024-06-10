import styles from './PlainText.module.scss'
import plains from "../../utils/plains"
import { showToast } from "../../utils/showModal"
import { Link } from 'react-router-dom'
import * as icons from '../../assets/index';

const PlainText = ({title} : {title: string}) => {
    
    const data = plains.find(elem => elem.section === title)

    const handleClick = (text: string | undefined) => {
        if(typeof(text) === 'string'){
            navigator.clipboard.writeText(text)
            showToast('Copiado!');
            let imgFill;
            text.includes('@') 
                ? imgFill = document.getElementById('mail') 
                : imgFill = document.getElementById('mobile')
            imgFill ? imgFill.className += styles.imgClicked : null;
            setTimeout(() => {
                imgFill ? imgFill.className = '' : null;                    
            }, 1000);
        }
    }

    return(
        <div className={styles.content}>
            {data?.country 
                ? <h4>🌎: {data?.country}</h4> 
                : null}
            {data?.mobile 
                ? <h4>📱: {data?.mobile}<img id='mobile' src={icons.clipboard} onClick={()=>handleClick(data?.mobile)} alt='clipboard' /></h4> 
                : null}
            {data?.mail 
                ? <h4>📩: {data?.mail}<img id='mail' src={icons.clipboard} onClick={()=>handleClick(data?.mail)} alt='clipboard' /></h4> 
                : null}
            {data?.cv 
                ? <h4>📎: <Link to={data?.cv}>Descarga mi CV</Link></h4> 
                : null}
            <div className={styles.contIcon}>
                {data?.social?.map((elem) =>
                    (<Link to={`${elem.link}`} key={elem.name} target='_blank'><img src={elem.icon} alt={elem.name} width='50px' /></Link>))
                }
            </div>
        </div>
    )
}

export default PlainText;