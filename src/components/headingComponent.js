import styles from '../../styles/banner.module.scss'

import React, { useEffect, useState } from 'react'

export default function HeadingComponent(props) {
  const [bannerSrc, setBannerSrc] = useState('/assets/darkwinter.jpg');

  useEffect (() => {
    toggleTheme(props.checked)
  }, [props.checked]);

  const toggleTheme = (isDark) => {
    if (isDark) setBannerSrc('/assets/darkwinter.jpg')
    else setBannerSrc('/assets/palisade.png')
  }

  return (
    <div className={styles.banner}>
      <img src={bannerSrc} className={styles.bannerimg} alt='website-banner-nature'/>
      <div className={styles.bannertext}>
        <h1 className={styles.title}>
          Dalton Klein
        </h1>
        <h2 className={styles.subTitle}>
          Full Stack Developer
        </h2>
      </div>
    </div>
  )
}
