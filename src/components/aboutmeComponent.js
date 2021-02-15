import React from 'react'
import styles from '../../styles/aboutme.module.scss'

export default function AboutmeComponent(props) {
  return (
    <div className={styles.aboutmebox}>
      <div className={styles.profileHeading}>
      <div className={`${styles.aboutmetitle}
      ${props.checked == false ? styles.textlight : styles.textdark}`}
      > 
      Hi, I'm Dalton
      </div>
      <img src="/assets/Dalton.png" 
        alt="profile-photo" 
        className={styles.profilePhoto}
      />
      </div>
      <div className={`${styles.aboutmeheading}
      ${props.checked == false ? styles.textlight : styles.textdark}`}
      >
      😊Welcome to my personal website, where I host my latest development endeavors😊
      </div>
      <div className={`${styles.aboutmetext}
      ${props.checked == false ? styles.textlight : styles.textdark}`}
      >
        I am a full stack developer living in Minneapolis, MN. In a past life, I obtained a finance 
        degree from the U of M Duluth and worked in corporate accounting. When Covid-19 struck, I knew 
        it was time to take my passion for coding to the next level. So, I decided to devote my 
        full attention to learning as many new tools and frameworks as possible in the JavaScript 
        environment. 
      </div>
      <div className={`${styles.aboutmetext}
      ${props.checked == false ? styles.textlight : styles.textdark}`}
      >
        I studied hard and got accepted into the most immersive coding program that I could find, Codeworks. Even when the Codeworks US cohort was cancelled due to the virus, I did not
        let that stop me, and I joined the EU remote cohort studying from 2AM - 2PM daily. 
      </div>
      <div className={`${styles.aboutmetext}
      ${props.checked == false ? styles.textlight : styles.textdark}`}
      >
        The experience, knowledge and network that I have gained from leaving my accounting job and joining Codeworks
        has been invaluable. Having spent each day the last 5 months out of my comfort zone, I am now convinced that 
        no new technology can scare me away. 
      </div>
    </div>
  )
}
