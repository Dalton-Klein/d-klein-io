import React, { useEffect, useState } from 'react'
import styles from '../../styles/projectTiles.module.scss'

export default function ProjectTilesComponent(props) {
  
  return (
    <div className={styles.projectTilesContainer}>
      <div className={styles.projectsTitle}>
        Project Portfolio
      </div>
      <div className={styles.grid}>
        <a href="https://github.com/gsjuradog/trademon" 
          className={`${styles.card}
          ${props.checked == false ? styles.cardlight : styles.carddark}`}
        >
          <div className={styles.cardflex}>
            <img src="/assets/projectscreenshots/trademon.png" 
              alt="facebook-link" 
              className={styles.projTileIcon}
            />
            <div className={styles.cardinfobox}>
              <h3>trademon.io &rarr;</h3>
              <p>Online collectible item trading platform and marketplace. React, TS frontend. Postgres, sequelize & socket.io backend.
              </p>
            </div>
          </div>
        </a>
        <a href="https://github.com/Dalton-Klein/discord-gamer-bot" className={`${styles.card}
          ${props.checked == false ? styles.cardlight : styles.carddark}`}
        > 
          <div className={styles.cardflex}>
            <img src="/assets/projectscreenshots/discordbot.png" 
              alt="discord-gamerbot-link" 
              className={styles.projTileIcon}
            />
            <div className={styles.cardinfobox}>
              <h3>Discord Gamer Bot &rarr;</h3>
              <p>Bot that auto fetches and formats gaming stats from a few of the most popular titles. Ranks users in SQL tables and can formulate leaderboards on the fly.</p>
            </div>
          </div>
        </a>
        <a href="https://github.com/Dalton-Klein/chess-league"
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
              <p>Beautiful 3D chess with online matchmaking. Unreal Engine 4 frontend. 
                NodeJS, Express, Socket.io backend.
              </p>
            </div>
          </div>
        </a>
        <a href="https://store.steampowered.com/app/1427420/Bloodland/"
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
                Real time multiplayer game based around magical combat. Unreal Engine 4 frontend. PHP based backend. 
                Available on iOS Appstore & Steam.
              </p>
            </div>
          </div>
        </a>
        <a href="https://github.com/Dalton-Klein/d-klein-io"
        className={`${styles.card}
        ${props.checked == false ? styles.cardlight : styles.carddark}`}
      >
        <div className={styles.cardflex}>
          <img src="/assets/projectscreenshots/mntile.jpg" 
            alt="dklein.io-github-link" 
            className={styles.projTileIcon}
          />
          <div className={styles.cardinfobox}>
            <h3>dklein.io &rarr;</h3>
            <p>
              NextJS based personal portfolio website. You are looking at it! Click to visit open source repo.
            </p>
          </div>
        </div>
      </a>

      </div>

    </div>
    
  )
}