import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faContactBook,
    faEnvelope,
    faGlobe,
    faIcons,
    faLocationDot,
    faMobileAndroid,
    faPhone,
    faStar,
  } from "@fortawesome/free-solid-svg-icons";
  import styles from '../styles/Home.module.css'


  function rate({ Component, pageProps }) {
    return (
        <div>
                <FontAwesomeIcon icon={faStar} className={styles.lIcons1}/>
                <FontAwesomeIcon icon={faStar} className={styles.lIcons1}/>
                <FontAwesomeIcon icon={faStar} className={styles.lIcons1}/>
                <FontAwesomeIcon icon={faStar} className={styles.lIcons1}/>
                <FontAwesomeIcon icon={faStar} className={styles.lIcons1}/>
              </div>
    )
    
  }
  
  export default MyApp