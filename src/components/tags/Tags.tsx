import style from './Tags.module.scss'

const Tags = ({ title } : { title : string }) => {

    return (
        <label className={style.tags}>{title}</label>
    )
}

export default Tags;