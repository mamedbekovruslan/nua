import backgroundImg from "../../assets/backgrounds/joe-mcferrin-s6znUip3Mro-unsplash.jpg";
import styles from "./Home.module.css";

export const Home = () => (
  <div>
    <span className={styles.title}>NUA</span>
    <img src={backgroundImg} />
  </div>
);
