import Head from 'next/head'
import styles from '../styles/Index.module.css'
import Image from 'next/image'
export default function Home() {
  return (
  <body className={styles.body}>
      <h1 className={styles.text}>Portfolio</h1>
      <h1 className={styles.text}>FUll Stack Developer</h1>
      <h3 className={styles.text}>Yasaman Forouzesh</h3>
      <div className={styles.flex}>
          <div className={styles.inner}>
              <div className={styles.first}>
                <img className={styles.myimg} src="/linkdin2.jpg"/>
              </div>
              <div className={styles.second}>
                <p>
                  I am a full stack developer who is creative and a quick problem solver. 
                  My strong communication skills were developed as a computer science tutor, 
                  and I believe in the value of teamwork to find solutions quickly and to complete 
                  projects on time. The difficulty of a challenge inspires me to find the best solutions. 
                  I love errors and obstacles because of the energy and satisfaction I feel when I solve 
                    them.
                </p>
              </div>
          </div>
          <h1 className={styles.text}>Projects</h1>

          <div className={styles.inner2}>
              <div className={styles.list}>
                <h>
                  Technologies:
                </h>
                <ul>
                  <li>
                    CSS
                  </li>
                  <li>
                    HTML
                  </li>
                  <li>
                    JavaScript
                  </li>
                </ul>
              </div>
              <div className={styles.second}>
                <p>
                    This is a pong game that allows the user to move the board to catch the ball. 
                    The game shows the score and it will show the winner and loser.  
                    The was designed on Canvas. It was used as a flex box and grade to design the whole game. Click on image to see live.
                </p>
              </div>
              <div className={styles.pongdiv}>
                <a href="https://yasamanforouzesh.github.io/project1-pong/" target="_blank"> <img className={styles.pongimg} src="/pong2.JPG"/></a>
                <i class="fa fa-github" aria-hidden="true" src="/GitHub_Logo.png"></i>
              </div>
          </div>
          <div className={styles.inner}>
              <div className={styles.first1}>
                <a href="https://finaldeploymentmovie.herokuapp.com/" target="_blank"> <img className={styles.pongimg} src="/movie1.JPG" /></a>
              </div>
              <div className={styles.second}>
                <p>
                  A website where users have a personal account and profile to keep their favorite movies 
                  and see the comments or write the comments. 
                  Everyone has to login to access their account so It was used as a passport and hook.
                  This website uses OMDB Api which needs API-KEY.
                </p>
              </div>
              <div className={styles.list2}>
                <h>
                  Technologies:
                </h>
                <ul>
                  <li>
                    CSS
                  </li>
                  <li>
                    HTML
                  </li>
                  <li>
                    Express
                  </li>
                  <li>
                    Squelize
                  </li>
                  <li>
                    Bootstrap
                  </li>
                </ul>
              </div>
          </div>
            <div className={styles.inner2}>
              <div className={styles.list}>
                <h>
                  Technologies:
                </h>
                <ul>
                  <li>
                    CSS
                  </li>
                  <li>
                    HTML
                  </li>
                  <li>
                    Bootstrap
                  </li>
                  <li>
                    React
                  </li>
                  <li>
                    Mongoose
                  </li>
                  <li>
                    Node
                  </li>
                  <li>
                    Axios
                  </li>
                  <li>
                    Express
                  </li>
                </ul>
              </div>
              <div className={styles.second}>
                <p>
                  Welcome to Sun Voyage! Visit planets and dwarf planets in the Solar System to learn more about each, 
                  and to see what your age and weight would be in a different world. Interact with other galactic travelers 
                  by sharing your experiences and sight-seeing recommendations in the comments of each planet!Click on page to see live website!
                </p>
              </div>
              <div className={styles.pongdiv}>
                <a href="http://sunvoyage.herokuapp.com/" target="_blank"> <img className={styles.pongimg} src="/Sunvoyage.JPG"/></a>
                <i class="fa fa-github" aria-hidden="true" src="/GitHub_Logo.png"></i>
              </div>
          </div>          
      </div>



      <h1 className={styles.text}>skills</h1> 



      <div className={styles.counter}>
        <div className={styles.grid}>
          <div className={styles.column1}>
            <h3 className={styles.topic}>
              Langueges
            </h3>
            <p>
              JavaScript
            </p>
            <p>
              HTML
            </p>
            <p>
              CSS
            </p>
            <p>
              Python
            </p>
          </div>
          <div className={styles.column2}>
            <h3 className={styles.topic}>
              Framework
            </h3>
            <p>
              React
            </p>
            <p>
              Next.js
            </p>
            <p>
              Typestrip
            </p>
            <p>
              postgres
            </p>
          </div>
          <div className={styles.column3}>
            <h3 className={styles.topic}>
              DataBase
            </h3>
            <p>
              SQL
            </p>
            <p>
              Mongodb
            </p>
            <p>
              SQLAlchemy
            </p>
            <p>
              Squelize
            </p>
          </div>
        </div>
        <h1 className={styles.text}> Contacts</h1>
        <div className={styles.grid}>
          <div>
              <a href="https://github.com/YasamanForouzesh" target="_blank"><img className={styles.logoimg} src="/Octocat.png" /></a>
          </div>
          <div>
              <a href="https://www.linkedin.com/in/yasaman-forouzesh/" target="_blank"><img className={styles.linkimg} src="/Linkedin.png" /></a>
          </div>
        </div>
      </div>       
  </body>
  )

}
