import { DiscordLogo, GithubLogo, InstagramLogo } from 'phosphor-react';
import Logo from '../assets/Logo.svg';
import styles from '../styles/header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.socialWrapper}>
          <a href="https://www.instagram.com/thiago_marqu3s/" target="_blank">
            <div className={styles.social}>
              <InstagramLogo size={20} />
            </div>
          </a>
          <a href="https://github.com/zMarques" target="_blank">
            <div className={styles.social}>
              <GithubLogo size={20} />
            </div>
          </a>
          <a href="https://discord.gg/EkYzS3Wxgv" target="_blank">
            <div className={styles.social}>
              <DiscordLogo size={20} />
            </div>
          </a>
        </div>

        <div className={styles.logo}>
          <img src={Logo} alt="logomarca em formato de foguete" />
        </div>
      </div>
    </header>
  );
}
