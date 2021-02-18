import Link from 'next/link'
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
        <br/> <br/> Please feel free to reach to me through 
        <Link href="https://www.linkedin.com/in/dalton-klein/"> 
          <div className={styles.linkText}> LinkedIn </div>
        </Link> 
        or one of the socials at the bottom of the page. 
      </div>
      <div className={`${styles.storytitle}
      ${props.checked == false ? styles.textlight : styles.textdark}`}
      > 
      My Story
      </div>
      <div className={`${styles.aboutmetext}
      ${props.checked == false ? styles.textlight : styles.textdark}`}
      >
        I am a full stack developer living in Minneapolis, MN. I have always been a gamer, and fascinated 
        with technology. This curiosity started to become a passion early on when my uncle got me started
        on his Nintendo 64. It was solidified when I used FrostWire to pirate songs for friends in middle school.
      <div className={`${styles.aboutmetext}
      ${props.checked == false ? styles.textlight : styles.textdark}`}
      >
        Around the age of 20, I got banned from a game called Runescape for botting my account stats. This led me to
        uninstall Runescape but to install Unreal Engine. I started to learn Blueprint programming and C++ heavily
        during the next few years. Eventually, I needed to expand my horizons to accomplish full scale multiplayer games.
        I worked with a more experienced friend to get started in PHP and SQL to start building out backend and authentication systems. 
        Not long after, I met a friend that swore by the power of JavaScript, so I started learning a third language. 
      </div>
        While I was learning and exploring the programming world, I also obtained a finance degree from the U of M Duluth 
        and began working in corporate accounting. This was going great until covid-19 struck, and I knew it was time to take my 
        passion for coding to the next level. So, I decided to devote my full attention to learning as many new tools and frameworks 
        as possible in the JavaScript environment. Although I started out in finance and accounting, I think it is more important to 
        follow my true interests and passions and transition my career into software engineering. 
      </div>
      <div className={`${styles.aboutmetext}
      ${props.checked == false ? styles.textlight : styles.textdark}`}
      >
        I studied hard and got accepted into the most immersive coding program that I could find, 
        <Link href="https://codeworks.me/"> 
          <div className={styles.aboutmetextLink}> Codeworks</div>
        </Link>. Even when the Codeworks US cohort was cancelled due to the virus, I did not
        let that stop me, and I joined the EU remote cohort studying from 2AM - 2PM daily. 
      </div>
      <div className={`${styles.aboutmetext}
      ${props.checked == false ? styles.textlight : styles.textdark}`}
      >
        The experience, knowledge, and network that I have gained from leaving my accounting job and joining Codeworks
        has been invaluable. Having spent each day the last 5 months out of my comfort zone, I am now convinced that 
        no new technology can scare me away. 
      </div>
    </div>
  )
}
