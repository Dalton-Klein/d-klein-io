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
      🌈Welcome to my personal website🌈 where I host my latest development endeavors 😊
      </div>
      <div className={`${styles.aboutmetext}
      ${props.checked == false ? styles.textlight : styles.textdark}`}
      >
        I am a full stack developer living in Minneapolis, MN. In a past life, I obtained a finance 
        degree from the U of M Duluth and worked in corporate accounting. When Covid-19 struck, I knew 
        it was time to take my passion for coding more seriously and turn it into a career.  
      </div>
    </div>
  )
}
