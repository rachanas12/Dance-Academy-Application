import React from 'react'
import styles from "./home.module.css"
import kala from "../assets/kala.jpg"
import zumba from "../assets/zumba.jpg"
import hiphop from "../assets/hiphop.jpg"
import bharatanatyam from "../assets/bharatanatyam.jpg"
import free from "../assets/free.jpg"
import conte from "../assets/contemporory.jpg"
import v1 from "../assets/a1.mp4"
import v2 from "../assets/a2.mp4"
import {FiGithub} from "react-icons/fi"
import h4 from "../assets/h4.mp4"
import "./about.css"
import {AiOutlineMail} from "react-icons/ai"
import {BsTelephone} from "react-icons/bs"
import {BsInstagram} from "react-icons/bs"
import {FaLinkedinIn} from "react-icons/fa"


const About = () => {
  return (
    <>
      {/* bootsrap */}
<div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner" style={{height:"600px"}}>
    <div className="carousel-item active">
      <video src={v1} className="d-block w-100" alt="..." autoPlay muted/>
    </div>
    <div className="carousel-item">
      <video src={v2} className="d-block w-100" alt="..." autoPlay muted/>
    </div>
    <div className="carousel-item">
      <video src={h4} className="d-block w-100" alt="..." autoPlay muted/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
      {/* bootsrap */}

      <div className={styles.h2}>
      <div><h1>Our Mission</h1>
      <p>Our mission is to reach all Dance enthusiasts & provide them right platform to showcase their
         talent and provide quality training in different
         genres and helping the world move and stay healthy. 
          Hence, even in pandemic times, it didn't stop us. With our online dance and fitness classes, 
          we continued the teaching starting from Zumba, Fitness, Virtual Bharatanatyam and Freestyle 
          dance classes for kids, extending it to many other forms and styles. 
          After pandemic we continue to conduct classes offline and online as well.</p>
      </div>
      <div><h1>Dedicated Instructors</h1>
      <p>All our instructors are professional and experienced, conducting offline & online dance and 
        fitness classes regardless of age, gender or ability. We are specialized in live and virtual
         dance classes for kids & adults in all styles
         including Freestyle, Bharatanatyam, Contemporary other than Zumba and Fitness. </p>
         </div>
      </div>
      <div className={styles.h3}>
        <div><h1>Learn A Variety of Dance Styles</h1></div><br />
        <div className={styles.dives}>
        <div className={styles.hdiv}>
          
          <div className={styles.h32}>
            <h2>BHARATANATYAM</h2>
            <p>LEARN THE SOPHISTICATED DANCE STYLE USING GESTURES OF HAND, EYES, FACE EXPRESSIONS 
              COMBINED WITH SPECTACULAR FOOTWORK. HERE, YOU CAN GET TRAINED IN THE FINEST, 
              OLDEST AND TRADITIONAL FORM. 
              </p>
          </div>
          <div className={styles.h31}><img src={bharatanatyam} alt="" className={styles.image}/></div>
        </div>
        <div className={styles.hdiv}>
          <div className={styles.h32}>
            <h2>CONTEMPORARY</h2>
            <p>CONNECT YOUR MIND AND BODY THROUGH THE FLUID DANCE MOVEMENTS IN OUR EXPANSIVE 
              STUDIO SPACE. 
              THAT'S OUR CONTEMPORARY DANCE CLASSES FOR YOU.</p>
          </div>
          <div className={styles.h31}><img src={conte} alt="" className={styles.image} /></div>

        </div>
        <div className={styles.hdiv}>
          <div className={styles.h32}>
            <h2>KALARIPAYATTU</h2>
            <p>MOTHER OF ALL MARTIAL ARTS,  KALARIPAYATTU IS ORIGINATED IN KERALA, 
              POPULARLY KNOWN AS GOD'S OWN COUNTRY. JOIN OUR VIRTUAL & LIVE CLASSES 
              TO LEARN THIS ANCIENT AND OLDEST SURVIVING MARTIAL ART FORM.</p>
          </div>
          <div className={styles.h31}><img src={kala} alt="" className={styles.image} /></div>

        </div>
        <div className={styles.hdiv}>
          <div className={styles.h32}>
            <h2>ZUMBA</h2>
            <p>A TOTAL WORKOUT COMBINING CARDIO, BALANCE, FLEXIBILITY & MUSCLE CONDITIONING 
              THAT IS SUPER FUN. 
              JOIN OUR ZUMBA CLASSES ONLINE AND LIVE.</p>
          </div>
          <div className={styles.h31}><img src={zumba} alt="" className={styles.image} /></div>

        </div>
        <div className={styles.hdiv}>
          <div className={styles.h32}>
            <h2>FREESTYLE / FILMY</h2>
          <p>AGE & TALENT IS NO BARRIER FOR DANCE; IT’S ALL IN THE MIND. TRAIN YOURSELF IN FREESTYLE
             / FILMY / BOLLYWOOD AND LET’S DANCE TO YOUR FAVOURITE TRACKS.</p>
          </div>
          <div className={styles.h31}><img src={free} alt="" className={styles.image} /></div>

        </div>
        <div className={styles.hdiv}>
          <div className={styles.h32}>
            <h2>HIP HOP</h2>
            <p>LEARN THE FORM THAT HAS ITS OWN CULTURE AND FASHION - THE STREET DANCE STYLE OF
               HIP HOP.   COME LEARN THE MAGIC OF AN ENTIRE GENERATION OF CROSS CULTURE DANCE THROUGH HIP HOP.</p>
          </div>
          <div className={styles.h31}><img src={hiphop} alt="" className={styles.image} /></div>
        </div>
      </div>
      </div>

      <div className='page'>
      <nav ><h1 id='c-h1'>Contact Us</h1>
      <div id='contactdiv'>
        
        <div className='c-formdiv'>
        <p> Send us a message</p><br />
          <input type="text" placeholder='Name' />
          <input type="email" name="Email" id="" placeholder='Email' />
          <textarea name="" id="" cols="5" rows="3" placeholder='Message...'></textarea>
          <br /><button >Let's Collaborate</button>
        </div>
        <div id='ctdiv'>
        
        <p>If you have any questions or need help, feel free to contact us at</p><br />
        <a href="mailto:dance@gmail.com" target="_blank" rel="noreferrer" ><AiOutlineMail/> dance@gmail.com</a>
        <br /><a href="callto:+91-7026195781" target="_blank" ><BsTelephone/> +91-7026195781 </a><br /><br />
        <div>
        <a href="https://github.com/rachanas12" target='_blank'><FiGithub/></a> 
      <a href="https://instagram.com/rachanas92?igshid=NGExMmI2YTkyZg==" target='_blank'><BsInstagram/></a> 
      <a href="https://www.linkedin.com/in/rachana-s-34a7a7173/" target='_blank'><FaLinkedinIn/></a> 
      </div>
        </div>
      </div></nav>
    </div>
      
    </>
  )
}

export default About