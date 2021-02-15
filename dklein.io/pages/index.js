import Head from 'next/head';
import styles from '../styles/home.module.scss';
import HeadingComponent from '../src/components/headingComponent';
import ProjectTilesComponent from '../src/components/projectTilesComponent';
import { useState } from 'react';
import Switch from "react-switch";



export default function Home() {
  const [checked, setChecked] = useState(true);
  const handleChange = nextChecked => {
    setChecked(nextChecked);
  };

  return (
    <div className={`${styles.container}
      ${checked == false ? styles.containerlight : styles.containerdark}`}
    >
      <Head>
        <title>dklein.io</title>
        <link rel="icon" href="/assets/favicon.png" />
      </Head>

      <HeadingComponent checked={checked}/>
      <div className={styles.themebox}>
        <label htmlFor="small-radius-switch">
          <Switch
            checked={checked} onChange={handleChange}
            handleDiameter={28} offColor="#ffd400"
            onColor="#35A7FF" offHandleColor="#35A7FF"
            onHandleColor="#ffd400" height={40}
            width={70} borderRadius={6}
            uncheckedIcon={
              <div className={styles.switchbox}>
                <img src="/assets/theme/dark.png" 
                  alt="facebook-link" 
                  className={styles.themeIcon}
                />
              </div>
            }
            checkedIcon={
              <div className={styles.switchbox}>
                <img src="/assets/theme/sun.png" 
                  alt="facebook-link" 
                  className={styles.themeIcon}
                />
              </div>
            }
          />
        </label>
      </div>
      <ProjectTilesComponent checked={checked}/>
      <footer className={`${styles.footer}
        ${checked == false ? styles.footerlight : styles.footerdark}`}
      >
        <img src={`/assets/socials/fb-${checked}.png`}
          alt="facebook-link" 
          className={styles.socialIcon}
        />
      </footer>
    </div>
  )
}
