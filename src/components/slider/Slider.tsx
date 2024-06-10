import { useState, useEffect, ReactElement } from "react";
import styles from './Slider.module.scss'
import About from "../about/About";
import HardSkill from "../hardSkills/HardSkills";

const Slider = ({ autoplay} : {autoplay : boolean}) => {
    const [indexProjects, setProjectIndex] = useState(0);
    const slideComp : ReactElement[] = [<About />, <HardSkill />];
    
    useEffect(() => {
        if(autoplay){
        const interval = setInterval(() => {
            changeProject('next')
        }, 15000)
        return () => clearInterval(interval);
    }})
    
    const changeProject = (direct : string) => {
        if(direct === 'prev'){
            return indexProjects > 0 
                ? setProjectIndex(indexProjects-1) 
                : setProjectIndex(slideComp.length-1);
        }
        else{
            return indexProjects < slideComp.length-1 
                ? setProjectIndex(indexProjects+1)
                : setProjectIndex(0);
        }
    }

    return (
        <div className={styles.slider}>
            <div className={styles.pagination}>
                <span className={styles.directLeft} onClick={() => changeProject('prev')}>&#10092;</span>
                <span className={styles.directRight} onClick={() => changeProject('prev')}>&#10093;</span>
            </div>
            <div className={styles.sliderItem}>
                {slideComp[indexProjects]}
            </div>
            {/* <div>
                {
                    slideComp.map((_, index) => (
                        index === indexProjects ? <div className={styles.circleSelected}></div> : <div className={styles.circle}></div>
                    ))
                }
            </div> */}
        </div>
    )
}

export default Slider;