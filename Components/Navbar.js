import styles from '../styles/Index.module.css'
import Link from 'next/link'
export default function Navbar(){
    return(
        <div className={styles.topnav}>
            <Link href="#about" scroll={false}>
            <a  className={styles.active} >About</a>
            </Link>
            <Link href="#Projects" scroll={false}>
            
            <a >Projects</a>
            </Link>
            <Link href="#skill" scroll={false}>

            <a >Skills</a>
            </Link>
            <a href="#contact">Contact</a>

        </div>

    )
}