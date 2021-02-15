import React, { useEffect, useState } from 'react'
import styles from '../../styles/projectTiles.module.scss'

export default function ProjectTilesComponent(props) {
  
  return (
    <div className={styles.projectTilesContainer}>
      <div className={styles.projectsTitle}>
        Project Portfolio
      </div>
      <div className={styles.grid}>
        <a href="/" className={`${styles.card}
          ${props.checked == false ? styles.cardlight : styles.carddark}`}
        >
          <div className={styles.cardflex}>
            <img src="/assets/theme/dark.png" 
              alt="facebook-link" 
              className={styles.projTileIcon}
            />
            <div className={styles.cardinfobox}>
              <h3>trademon.io &rarr;</h3>
              <p>Find in-depth information about Next.js features and API.</p>
            </div>
          </div>
        </a>

        <a href="/" className={`${styles.card}
          ${props.checked == false ? styles.cardlight : styles.carddark}`}
        > 
          <div className={styles.cardflex}>
            <img src="/assets/theme/dark.png" 
              alt="discord-gamerbot-link" 
              className={styles.projTileIcon}
            />
            <div className={styles.cardinfobox}>
              <h3>Discord Gamer Bot &rarr;</h3>
              <p>Learn about Next.js in an interactive course with quizzes!</p>
            </div>
          </div>
        </a>

        <a href="/"
          className={`${styles.card}
          ${props.checked == false ? styles.cardlight : styles.carddark}`}
        >
          <div className={styles.cardflex}>
            <img src="/assets/projectscreenshots/chessleague.png" 
              alt="chessleague-link" 
              className={styles.projTileIcon}
            />
            <div className={styles.cardinfobox}>
              <h3>ChessLeague &rarr;</h3>
              <p>Beautiful 3D chess with online matchmaking. Unreal Engine 4 frontent. NodeJS, Express, Socket.io backend.</p>
            </div>
          </div>
        </a>

        <a href="/"
          className={`${styles.card}
          ${props.checked == false ? styles.cardlight : styles.carddark}`}
        >
          <div className={styles.cardflex}>
            <img src="/assets/projectscreenshots/bloodland.png" 
              alt="bloodland-link" 
              className={styles.projTileIcon}
            />
            <div className={styles.cardinfobox}>
              <h3>Bloodland &rarr;</h3>
              <p>
                Instantly deploy your Next.js site to a public URL with Vercel.
              </p>
            </div>
          </div>
        </a>
      </div>

    </div>
    
  )
}
