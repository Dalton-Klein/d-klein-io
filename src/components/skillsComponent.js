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
          <img src="/assets/skills/aws.png" 
          alt="awsEC2-img" 
          className={styles.skillIcon}
          />
          <text className={`${props.checked == false ? 
            styles.textlight : styles.textdark}`}
          >AWS EC2</text>
        </div>
        <div className={`${styles.skillcard}
        ${props.checked == false ? styles.skillcardlight : styles.skillcarddark}`}
        >
          <img src="/assets/skills/ue4.png" 
          alt="ue4-img" 
          className={styles.skillIcon}
          />
          <text className={`${props.checked == false ? 
            styles.textlight : styles.textdark}`}
          >Unreal Engine</text>
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
          <img src="/assets/skills/nextjs.png" 
          alt="nextjs-img" 
          className={styles.skillIcon}
          />
          <text className={`${props.checked == false ? 
            styles.textlight : styles.textdark}`}
          >Next.js</text>
        </div>
        <div className={`${styles.skillcard}
        ${props.checked == false ? styles.skillcardlight : styles.skillcarddark}`}
        >
          <img src="/assets/skills/postgres.png" 
          alt="postgres-img" 
          className={styles.skillIcon}
          />
          <text className={`${props.checked == false ? 
            styles.textlight : styles.textdark}`}
          >PostgresSQL</text>
        </div>
        <div className={`${styles.skillcard}
        ${props.checked == false ? styles.skillcardlight : styles.skillcarddark}`}
        >
          <img src="/assets/skills/ps.png" 
          alt="phtoshop-img" 
          className={styles.skillIcon}
          />
          <text className={`${props.checked == false ? 
            styles.textlight : styles.textdark}`}
          >Adobe Ps</text>
        </div>
        <div className={`${styles.skillcard}
        ${props.checked == false ? styles.skillcardlight : styles.skillcarddark}`}
        >
          <img src="/assets/skills/mongodb.png" 
          alt="mongodb-img" 
          className={styles.skillIcon}
          />
          <text className={`${props.checked == false ? 
            styles.textlight : styles.textdark}`}
          >MongoDB</text>
        </div>
        <div className={`${styles.skillcard}
        ${props.checked == false ? styles.skillcardlight : styles.skillcarddark}`}
        >
          <img src="/assets/skills/git.png" 
          alt="git-img" 
          className={styles.skillIcon}
          />
          <text className={`${props.checked == false ? 
            styles.textlight : styles.textdark}`}
          >git</text>
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
          <img src="/assets/skills/mocha.png" 
          alt="mocha-img" 
          className={styles.skillIcon}
          />
          <text className={`${props.checked == false ? 
            styles.textlight : styles.textdark}`}
          >Mocha</text>
        </div>
        <div className={`${styles.skillcard}
          ${props.checked == false ? styles.skillcardlight : styles.skillcarddark}`}
        >
          <img src="/assets/skills/angular.svg" 
          alt="angular-img" 
          className={styles.skillIcon}
          />
          <text className={`${props.checked == false ? 
            styles.textlight : styles.textdark}`}
          >Angular</text>
        </div>
        <div className={`${styles.skillcard}
          ${props.checked == false ? styles.skillcardlight : styles.skillcarddark}`}
        >
          <img src="/assets/skills/sass.png" 
          alt="sass-img" 
          className={styles.skillIcon}
          />
          <text className={`${props.checked == false ? 
            styles.textlight : styles.textdark}`}
          >Sass</text>
        </div>
        <div className={`${styles.skillcard}
          ${props.checked == false ? styles.skillcardlight : styles.skillcarddark}`}
        >
          <img src="/assets/skills/php.png" 
          alt="php-img" 
          className={styles.skillIcon}
          />
          <text className={`${props.checked == false ? 
            styles.textlight : styles.textdark}`}
          >php</text>
        </div>
        <div className={`${styles.skillcard}
          ${props.checked == false ? styles.skillcardlight : styles.skillcarddark}`}
        >
          <img src="/assets/skills/heroku.png" 
          alt="heroku-img" 
          className={styles.skillIcon}
          />
          <text className={`${props.checked == false ? 
            styles.textlight : styles.textdark}`}
          >Heroku</text>
        </div>
      
      </div>
    </div>
  )
}
