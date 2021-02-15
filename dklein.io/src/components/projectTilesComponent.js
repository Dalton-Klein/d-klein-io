import React, { useEffect, useState } from 'react'
import styles from '../../styles/projectTiles.module.scss'

export default function ProjectTilesComponent(props) {
  const [checked, setChecked] = useState(true);

  useEffect (() => {
    setChecked(props.checked)
    console.log('Here i am ', checked);
  }, [props.checked]);
  
  return (
    <div className={styles.projectTilesContainer}>
      <div className={styles.projectsTitle}>
        Projects
      </div>
      <div className={styles.grid}>
        <a href="https://nextjs.org/docs" className={`${styles.card}
          ${checked == false ? styles.cardlight : styles.carddark}`}
        >
          <h3>trademon.io &rarr;</h3>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a href="https://nextjs.org/learn" className={`${styles.card}
          ${checked == false ? styles.cardlight : styles.carddark}`}
        >
          <h3>Discord Gamer Bot &rarr;</h3>
          <p>Learn about Next.js in an interactive course with quizzes!</p>
        </a>

        <a
          href="https://github.com/vercel/next.js/tree/master/examples"
          className={`${styles.card}
          ${checked == false ? styles.cardlight : styles.carddark}`}
        >
          <h3>ChessLeague &rarr;</h3>
          <p>Discover and deploy boilerplate example Next.js projects.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          className={`${styles.card}
          ${checked == false ? styles.cardlight : styles.carddark}`}
        >
          <h3>Bloodland &rarr;</h3>
          <p>
            Instantly deploy your Next.js site to a public URL with Vercel.
          </p>
        </a>
      </div>

    </div>
    
  )
}
