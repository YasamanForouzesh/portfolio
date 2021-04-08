import styles from '../styles/Index.module.css'

export default function Contact(){
    return(
        <div id="contact" className={styles.contactdiv}>
            <h1 className={styles.ctext}>
                Contact me by:
            </h1>
            <div className={styles.cinner}>
            <h3  className={styles.ctext}>
                yasiforouzesh72@gmail.com
            </h3>
            <a href="https://github.com/YasamanForouzesh" target="blank">
                <img className={styles.mcontact} src="/GitHub.png"></img>
            </a>
            <a href="https://www.linkedin.com/in/yasaman-forouzesh/" target="blank">
                <img className={styles.mcontact} src="/Linkedin.png"></img>
            </a>
            </div>
            <div id="resume">
                <a href='/resume.pdf' target='_blank' aria-label='Resume'><button className={styles.rbutton}>
                    Download My Resume
                </button></a>
                
            </div>
        </div>
    )
}