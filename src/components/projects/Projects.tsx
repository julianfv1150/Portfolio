import plains from "../../utils/plains";
import Slider from "../slider/Slider";

const Projects = ({title} : {title : string}) => {
    const data = plains.find(elem => elem.section === title);
    const projects = data?.projects
    return (
        <>
            {
                typeof(projects) !== 'undefined' ? <Slider projects={projects} autoplay={0} /> : null   
            }
        </>
    )
} 

export default Projects;