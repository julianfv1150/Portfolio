import PlainText from '../plainText/PlainText'
import Tags from '../tags/Tags'
import style from './DataProjects.module.scss'
import { Link } from 'react-router-dom'

interface Link {
    name: string,
    url: string
}
interface project {
    name: string,
    video:string,
    techs:string[],
    description: string,
    link: Link[],
}

const DataProjects = ({project} : {project : project}) => {
    
    return (
        <div className='noRow'>
            <PlainText title='Mis proyectos' />
            <div className={style.info}> 
                <iframe 
                    src={project.video}
                    title={project.name}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen>
                </iframe> 
                <h1>{project.name}</h1>
                <div className={style.tagContainer} >
                {
                    project.techs?.map(elem => <Tags title={elem} key={elem} />)
                }
                </div>
                <p>{project.description}</p>
                <div className={style.tagContainer} >
                {
                    project.link?.map((elem, index) => <Link to={elem.url} target='_blank'><Tags title={elem.name} key={index} /></Link>
                        
                    )
                }
                </div>
            </div>
        </div>
    )
}

export default DataProjects;

/**
 * 
 * 
<Link to={elem} target='_blank'><Tags title={elem} key={index} /></Link>

 */