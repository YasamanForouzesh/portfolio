import styles from '../styles/Index.module.css'

export default function Skill(){
    return(
        <div className={styles.gridcontainer} >
            <div ><img className={styles.sql} src="/sql.png"></img></div>
            <div ><img className={styles.react} src="/react.png"></img></div>
            <div ><img className={styles.python} src="/python.png"></img></div>
            <div ><img className={styles.node} src="/node.png"></img></div>
            <div ><img className={styles.mongodb} src="/mongodb.png"></img></div>
            <div ><img className={styles.javascript} src="/javascript.png"></img></div>
            <div ><img className={styles.html} src="/html.png"></img></div>
            <div ><img className={styles.css} src="/css.png"></img></div>
        </div>
    )
}