import React from 'react'
import styles from '../../styles/aboutme.module.scss'

export default function AboutmeComponent(props) {
  return (
    <div className={styles.aboutmebox}>
      <div className={`${styles.aboutmetitle}
      ${props.checked == false ? styles.textlight : styles.textdark}`}
      > 
        Hi, I'm Dalton.
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
        I studied very hard and got accepted into the best and most advanced coding program
        that I could find, Codeworks. Even when their US cohort was cancelled due to the virus, I did not
        let that stop me, and I joined the EU remote cohort studying from 2AM - 2PM daily. 
      </div>
    </div>
  )
}
