import styles from '../../styles/banner.module.scss'

import React, { useEffect, useState } from 'react'

export default function BannerComponent(props) {
  const [bannerSrc, setBannerSrc] = useState('/assets/background/darkwinter.jpg');
  const [offsetY, setOffsetY] = useState(0);

  useEffect (() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect (() => {
    toggleTheme(props.checked)
  }, [props.checked]);
  
  const handleScroll = () => setOffsetY(window.pageYOffset)

  const toggleTheme = (isDark) => {
    if (isDark) setBannerSrc('/assets/background/darkwinter.jpg')
    else setBannerSrc('/assets/background/superior.jpg')
  }

  return (
    <div className={styles.banner}>
      <img src={bannerSrc} className={styles.bannerimg} 
        alt='website-banner-nature-img'
      />
      <div className={styles.bannertext}>
        <h1 className={styles.title} style={{ transform: `translateY(${-offsetY * .5}px)` }}>
          Dalton Klein
        </h1>
        <h2 className={styles.subTitle} style={{ transform: `translateY(${-offsetY * .5}px)` }}>
          Full Stack Developer
        </h2>
      </div>
      <div className={styles.scrollimgbox} style={{ transform: `translateY(${-offsetY * .7}px)` }}>
        <img src={'/assets/scrollicon.png'} className={styles.scrollimg}/>
      </div>
    </div>
  )
}
