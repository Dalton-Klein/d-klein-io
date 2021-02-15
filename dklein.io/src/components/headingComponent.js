import styles from '../../styles/banner.module.scss'

import React, { useEffect, useState } from 'react'

export default function HeadingComponent(props) {
  const [bannerSrc, setBannerSrc] = useState('/assets/darkwinter.jpg');

  useEffect (() => {
    toggleTheme(props.checked)
  }, [props.checked]);

  const toggleTheme = (isDark) => {
    if (isDark) setBannerSrc('/assets/darkwinter.jpg')
    else setBannerSrc('/assets/palisade2.png')
  }

  return (
    <div className={styles.banner}>
      <img src={bannerSrc} className={styles.bannerimg}/>
      <div className={styles.bannertext}>
        <div className={styles.title}>
          Dalton Klein
        </div>
        <div className={styles.subTitle}>
          Full Stack Devloper
        </div>
      </div>
    </div>
  )
}