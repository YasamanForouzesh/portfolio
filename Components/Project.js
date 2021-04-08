import styles from '../styles/Index.module.css'

export default function Projrct(props){
    return(
        <div className={styles.project}>
            <a href={props.info.Github} target="_blank"><h3 className={styles.pitext}>{props.info.Name}</h3></a> 
            <a href={props.info.Live} target="_blank"><img src={props.info.img} className={styles.pimg}></img></a> 
            <p className={styles.pdescription}>{props.info.description}</p>
        </div>
    )
}