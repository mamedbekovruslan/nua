import backgroundImg from "../../assets/backgrounds/joe-mcferrin-s6znUip3Mro-unsplash.jpg";
import styles from "./Home.module.css";

export const Home = () => (
  <div className={styles.mainContainer}>
    <div className={styles.bannerInfo}>
      <div className={styles.title}>Сделай себя сам</div>
      <div className={styles.description}>
        Наш проект нацелен на ваши достижения
      </div>
    </div>
    <img src={backgroundImg} style={{ filter: "brightness(0.3)" }} />
  </div>
);
