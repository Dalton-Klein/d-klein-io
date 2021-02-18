import Head from 'next/head';
import styles from '../styles/home.module.scss';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Switch from "react-switch";
import BannerComponent from '../src/components/bannerComponent';
import ProjectTilesComponent from '../src/components/projectTilesComponent';
import AboutmeComponent from '../src/components/aboutmeComponent'
import SkillsComponent from '../src/components/skillsComponent';
import InterestsComponent from '../src/components/interestsComponent';
import ReactGA from 'react-ga';
ReactGA.initialize('G-D56DZPQDQB');

export default function Home() {
  const [checked, setChecked] = useState(false);

  useEffect (() => {
    ReactGA.pageview('/app');
  }, []);

  const handleChange = nextChecked => {
    setChecked(nextChecked);
  };

  return (
    <div className={`${styles.container}
      ${checked == false ? styles.containerlight : styles.containerdark}`}
    >
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content="Software portfolio page for Dalton Klein" />
        <meta property="og:title" content="dklein.io" key="ogtitle" />
        <meta property="og:image" content="/assets/dkleinioEMBEDImage.png" key="ogimage" />
        <meta property="og:description" content="Software portfolio page for Dalton Klein" key="ogdesc" />
        <title>dklein.io</title>
        <link rel="icon" href="/assets/favicon.png" />
      </Head>

      <div className={styles.themebox}>
        <label htmlFor="small-radius-switch">
          <Switch
            checked={checked} onChange={handleChange}
            handleDiameter={20} offColor="#ffd400"
            onColor="#35A7FF" offHandleColor="#35A7FF"
            onHandleColor="#ffd400" height={30}
            width={60} borderRadius={6}
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
      
      <div className={styles.scrollableContent}>
        <BannerComponent checked={checked} className={styles.bannercomp}/>
        <AboutmeComponent checked={checked} className={styles.aboutmecomp}/>
        <ProjectTilesComponent checked={checked}/>
        <SkillsComponent checked={checked} className={styles.skillscomp}/>
        <InterestsComponent checked={checked}/>
      </div>
      <footer className={`${styles.footer}
        ${checked == false ? styles.footerlight : styles.footerdark}`}
      >
        <Link href="mailto:klein853@d.umn.edu">
          <img src={`/assets/socials/em-${checked}.png`}
            alt="email-link" 
            className={styles.socialIcon}
          />
        </Link>
        <Link href="https://github.com/Dalton-Klein">
          <img src={`/assets/socials/li-${checked}.png`}
            alt="linkedin-link" 
            className={styles.socialIcon}
          />
        </Link>
        <Link href="https://www.linkedin.com/in/dalton-klein/">
          <img src={`/assets/socials/gh-${checked}.png`}
            alt="github-link" 
            className={styles.socialIcon}
          />
        </Link>
        <Link href="https://www.youtube.com/channel/UCSDzClh9I1FqlCxA_5IH0_g">
          <img src={`/assets/socials/yt-${checked}.png`}
            alt="youtube-link" 
            className={styles.socialIcon}
          />
        </Link>
        <Link href="https://discord.gg/haUk6pD">
          <img src={`/assets/socials/dc-${checked}.png`}
            alt="discord-link" 
            className={styles.socialIcon}
          />
        </Link>
      </footer>
    </div>
  )
}
