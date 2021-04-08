import styles from '../styles/Index.module.css'
import projects from '../Data/projects'
import About from '../Components/About'
import Navbar from '../Components/Navbar'
import Project from '../Components/Project'
import Skill from '../Components/Skill'
import Contact from '../Components/Contact'
export default function Home() {
  return (
  <>
      <Navbar/>
      <a id="about">
        <About/>
      </a>
      <a id="Projects">
      <div className={styles.projectdiv}>
        <h1 className={styles.ptext} id="Projects">Projects</h1>
        <div className={styles.pinner}>
          {projects.map((project)=>{
            return <Project info={project}/>
          })}
        </div>
      </div>
      </a>
      <a id="skill">

      <div className={styles.skill}> 
        <h1 className={styles.ptext}>Skills</h1>
        <Skill/>
      </div>
      </a>
      <a id="contact">
          <Contact/>
      </a>
          
      
  </>
  )

}
