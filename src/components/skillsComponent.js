import styles from '../../styles/skills.module.scss'

import React from 'react'

export default function SkillsComponent(props) {
  return (
    <div className={styles.skillscontainer}>
      <div className={`${styles.skillsTitle}
        ${props.checked == false ? styles.textlight : styles.textdark}`}
      > 
        Skills
      </div>
      <div className={styles.skillsbox}>
        <div className={`${styles.skillcard}
        ${props.checked == false ? styles.skillcardlight : styles.skillcarddark}`}
        >
          <img src="/assets/skills/Javascript.png" 
          alt="javascript-img" 
          className={styles.skillIcon}
          />
          <text className={`${props.checked == false ? 
            styles.textlight : styles.textdark}`}
          >JavaScript</text>
        </div>
        <div className={`${styles.skillcard}
        ${props.checked == false ? styles.skillcardlight : styles.skillcarddark}`}
        >
          <img src="/assets/skills/html5.png" 
          alt="html-img" 
          className={styles.skillIcon}
          />
          <text className={`${props.checked == false ? 
            styles.textlight : styles.textdark}`}
          >HTML</text>
        </div>
        <div className={`${styles.skillcard}
        ${props.checked == false ? styles.skillcardlight : styles.skillcarddark}`}
        >
          <img src="/assets/skills/css3.png" 
          alt="css-img" 
          className={styles.skillIcon}
          />
          <text className={`${props.checked == false ? 
            styles.textlight : styles.textdark}`}
          >CSS</text>
        </div>
        <div className={`${styles.skillcard}
        ${props.checked == false ? styles.skillcardlight : styles.skillcarddark}`}
        >
          <img src="/assets/skills/Express.png" 
          alt="Express-img" 
          className={styles.skillIcon}
          />
          <text className={`${props.checked == false ? 
            styles.textlight : styles.textdark}`}
          >Express</text>
        </div>
        <div className={`${styles.skillcard}
        ${props.checked == false ? styles.skillcardlight : styles.skillcarddark}`}
        >
          <img src="/assets/skills/koa.jpg" 
          alt="koa-img" 
          className={styles.skillIcon}
          />
          <text className={`${props.checked == false ? 
            styles.textlight : styles.textdark}`}
          >koa</text>
        </div>
        <div className={`${styles.skillcard}
        ${props.checked == false ? styles.skillcardlight : styles.skillcarddark}`}
        >
          <img src="/assets/skills/typescript.png" 
          alt="typescript-img" 
          className={styles.skillIcon}
          />
          <text className={`${props.checked == false ? 
            styles.textlight : styles.textdark}`}
          >Typescript</text>
        </div>
        <div className={`${styles.skillcard}
        ${props.checked == false ? styles.skillcardlight : styles.skillcarddark}`}
        >
          <img src="/assets/skills/react.png" 
          alt="react-img" 
          className={styles.skillIcon}
          />
          <text className={`${props.checked == false ? 
            styles.textlight : styles.textdark}`}
          >React</text>
        </div>

      </div>
    </div>
  )
}
