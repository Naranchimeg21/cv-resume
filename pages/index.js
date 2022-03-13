import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import  DateComp  from '../components/Date'

// import the icons you need
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
export default function Home() {
  return (

    <div className={styles.container}>
      <Head>
        <title>CV-resume</title>
      </Head>

      <main className={styles.main}>
        <DateComp />

        <div className={styles.personal}>
          <div className={styles.photo}>
            
            <img src='https://i.pinimg.com/originals/3e/5b/a9/3e5ba9cf12565cbf201e2447753b9401.png' className={styles.img}/>
          </div>
          <div className={styles.text}>
            <p>Hello, I am</p>
            <p>naranchimeg.n</p>
            <p>МУИС-ХШУИС Програм хангамж</p>
          </div>
          <div className={styles.contact}>
            <div className={styles.title}>   
              <FontAwesomeIcon icon={faContactBook} className={styles.tIcons}/>
              Contact</div>
            <div className={styles.info}>
            <div><FontAwesomeIcon icon={faPhone} className={styles.iIcons}/>
              +976 86755899</div>
            <div><FontAwesomeIcon icon={faEnvelope} className={styles.iIcons}/>
            naranchimeg2132@gmail.com</div>
            <div><FontAwesomeIcon icon={faLocationDot} className={styles.iIcons}/>
            УБ БГД 2-р хороо 60-41</div>
            </div>
             
          </div>
          <div className={styles.language}>
          <div className={styles.title}>   
              <FontAwesomeIcon icon={faGlobe} className={styles.tIcons}/>
              Language</div>
            <div className={styles.info}>
              <div className={styles.lang}>
              <div>Монгол хэл</div>
              <div>
                <FontAwesomeIcon icon={faStar} className={styles.lIcons1}/>
                <FontAwesomeIcon icon={faStar} className={styles.lIcons1}/>
                <FontAwesomeIcon icon={faStar} className={styles.lIcons1}/>
                <FontAwesomeIcon icon={faStar} className={styles.lIcons1}/>
                <FontAwesomeIcon icon={faStar} className={styles.lIcons1}/>
              </div>
              </div>
              <div className={styles.lang}>
              <div>Япон хэл</div>
              <div><FontAwesomeIcon icon={faStar} className={styles.lIcons1}/>
                <FontAwesomeIcon icon={faStar} className={styles.lIcons1}/>
                <FontAwesomeIcon icon={faStar} className={styles.lIcons1}/>
                <FontAwesomeIcon icon={faStar} className={styles.lIcons}/>
                <FontAwesomeIcon icon={faStar} className={styles.lIcons}/>
              </div>
              </div>
              <div className={styles.lang}>
              <div>Англи хэл</div><div>
                <FontAwesomeIcon icon={faStar} className={styles.lIcons1}/>
                <FontAwesomeIcon icon={faStar} className={styles.lIcons1}/>
              <FontAwesomeIcon icon={faStar} className={styles.lIcons}/>
              <FontAwesomeIcon icon={faStar} className={styles.lIcons}/>
              <FontAwesomeIcon icon={faStar} className={styles.lIcons}/>
              </div>
              </div>
              
            </div>
            <div className={styles.info}></div>
          </div>
          <div className={styles.hobby}>
          <div className={styles.title}>   
              <FontAwesomeIcon icon={faIcons} className={styles.tIcons}/>
              Hobby</div>
            <div className={styles.info}>
            <div><FontAwesomeIcon icon={faEnvelope} className={styles.iIcons}/>
            naranchimeg2132@gmail.com</div>
            <div><FontAwesomeIcon icon={faEnvelope} className={styles.iIcons}/>
            naranchimeg2132@gmail.com</div>
            <div><FontAwesomeIcon icon={faEnvelope} className={styles.iIcons}/>
            naranchimeg2132@gmail.com</div>
            <div><FontAwesomeIcon icon={faEnvelope} className={styles.iIcons}/>
            naranchimeg2132@gmail.com</div>
            </div>
          </div>
        </div>
        <div className={styles.details}>gg</div>

      
      </main>

    </div>
  )
}
