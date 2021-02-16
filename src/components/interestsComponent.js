import styles from '../../styles/skills.module.scss'

import React from 'react'

export default function InterestsComponent(props) {
  return (
    <div className={styles.skillscontainer}>
      <div className={`${styles.skillsTitle}
        ${props.checked == false ? styles.textlight : styles.textdark}`}
      > 
        Interests
      </div>
      <div className={styles.skillsbox}>
      
        <div className={`${styles.skillcard}
          ${props.checked == false ? styles.skillcardlight : styles.skillcarddark}`}
        >
          <img src="/assets/interests/gaming.png" 
          alt="gaming-img" 
          className={styles.skillIcon}
          />
          <text className={`${props.checked == false ? 
            styles.textlight : styles.textdark}`}
          >PC Gaming</text>
        </div>
        <div className={`${styles.skillcard}
        ${props.checked == false ? styles.skillcardlight : styles.skillcarddark}`}
        >
          <img src="/assets/interests/coffee.png" 
          alt="coffee-img" 
          className={styles.skillIcon}
          />
          <text className={`${props.checked == false ? 
            styles.textlight : styles.textdark}`}
          >Coffee</text>
        </div>
        <div className={`${styles.skillcard}
        ${props.checked == false ? styles.skillcardlight : styles.skillcarddark}`}
        >
          <img src="/assets/interests/skiing.png" 
          alt="skiing-img" 
          className={styles.skillIcon}
          />
          <text className={`${props.checked == false ? 
            styles.textlight : styles.textdark}`}
          >Skiing</text>
        </div>
        <div className={`${styles.skillcard}
        ${props.checked == false ? styles.skillcardlight : styles.skillcarddark}`}
        >
          <img src="/assets/interests/weight.png" 
          alt="weight-img" 
          className={styles.skillIcon}
          />
          <text className={`${props.checked == false ? 
            styles.textlight : styles.textdark}`}
          >Weights</text>
        </div>
        <div className={`${styles.skillcard}
        ${props.checked == false ? styles.skillcardlight : styles.skillcarddark}`}
        >
          <img src="/assets/interests/football.png" 
          alt="football-img" 
          className={styles.skillIcon}
          />
          <text className={`${props.checked == false ? 
            styles.textlight : styles.textdark}`}
          >Football</text>
        </div>
        <div className={`${styles.skillcard}
        ${props.checked == false ? styles.skillcardlight : styles.skillcarddark}`}
        >
          <img src="/assets/interests/traveling.png" 
          alt="traveling-img" 
          className={styles.skillIcon}
          />
          <text className={`${props.checked == false ? 
            styles.textlight : styles.textdark}`}
          >Traveling</text>
        </div>
        
      </div>
      </div>
    )
  }
  