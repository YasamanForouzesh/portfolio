import styles from '../styles/Index.module.css'

export default function About(){
    return(
        <div className={styles.about}>
            <h1 className={styles.text}>Yasaman Forouzesh</h1>
            <h3 className={styles.text}>Full Stack Developer</h3>
            <div className={styles.inner}>
                <img className={styles.myimg} src="/linkdin2.jpg"/>
                <p className={styles.pabout}>
                    I am a full stack developer who is creative and a quick problem solver. 
                    My strong communication skills were developed as a computer science tutor, 
                    and I believe in the value of teamwork to find solutions quickly and to complete 
                    projects on time. The difficulty of a challenge inspires me to find the best solutions. 
                    I love errors and obstacles because of the energy and satisfaction I feel when I solve 
                    them.
                </p>
            </div>
        </div>
    )
}