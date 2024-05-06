import plains from "../../utils/plains";
import Slider from "../slider/Slider";

const Projects = ({title} : {title : string}) => {

    const data = plains.find(elem => elem.section === title);
    const listProjects = data?.projects;
    return (
        <>
            {
                listProjects ? <Slider projects={listProjects} autoplay={0} /> : null   
            }
        </>
    )
} 

export default Projects;