import { Link } from "react-router-dom";
import plains from "../../utils/plains";
import styles from "./Projects.module.scss";

const Projects = () => {
    const data = plains.find(elem => elem.section === 'Mis proyectos')    
    return (<>
            <h2 className={styles.title}>Proyectos</h2>
            <div className={styles.projects}>
                {
                    data?.projects?.map((elem, i) => (
                        <div key={i} className={styles.cards}>
                            <h2>{elem.name}</h2>
                            {
                                elem.techs.map((elem, i) => <span key={i} className={styles.highlight}>{elem} </span>)
                            }
                            <p>{elem.description}</p>
                            <ul>
                                {
                                    elem.functions.map((elem, index) => <li key={index}>{elem}</li>)
                                }
                            </ul>
                            {
                                elem.link.map((elem, i) => (
                                    <Link key={i} to={elem.url} target='_blank'>{elem.url.slice(8)}</Link>
                            ))}
                            {elem.video !== null 
                                ? <iframe
                                    src={elem.video}
                                    title={elem.name}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                    referrerPolicy="strict-origin-when-cross-origin" 
                                    allowFullScreen></iframe>
                                : null}
                        </div>
                ))}
            </div>
        </>)
} 

export default Projects;