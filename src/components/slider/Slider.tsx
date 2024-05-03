import { useState, useEffect } from "react";
import DataProjects from "../dataProjects/DataProjects";
import style from './Slider.module.scss'

interface Link {
    name: string,
    url: string
}

interface project {
    name: string,
    video:string,
    techs:string[],
    description: string,
    link: Link[]
}

const Slider = ({projects, autoplay} : {projects : project[], autoplay : number}) => {
    const [indexProjects, setProjectIndex] = useState(0);
    const [arrProjects, setArrProjects] = useState(projects);
    
    useEffect(() => {
        setArrProjects(arrProjects)
    }, [arrProjects]);
    
    useEffect(() => {
        if(autoplay !== 0){
        const interval = setInterval(() => {
            changeProject('next')
        }, 1000*autoplay)
        return () => clearInterval(interval);
    }})
    
    const changeProject = (direct : string) => {
        if(direct === 'prev'){
            return indexProjects > 0 
                ? setProjectIndex(indexProjects-1) 
                : setProjectIndex(arrProjects.length-1);
        }
        else{
            return indexProjects < arrProjects.length-1 
                ? setProjectIndex(indexProjects+1)
                : setProjectIndex(0);
        }
    }

    return (
        <>  
            <DataProjects project={arrProjects[indexProjects]}/>
            <div className={style.pagination}>
                <span className={style.directions} onClick={() => changeProject('prev')}>&#10092;</span>
                {
                    arrProjects.map((elem, index) => (
                        index === indexProjects ? <div className={style.circleSelected}></div> : <div className={style.circle}></div>
                    ))
                }
                <span className={style.directions} onClick={() => changeProject('next')}>&#10093;</span>
            </div>
            
        </>
    )
}

export default Slider;