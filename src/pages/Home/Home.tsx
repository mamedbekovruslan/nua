import backgroundImg from "../../assets/backgrounds/luke-witter-k47w6BeapCs-unsplash.jpg";
import styles from "./Home.module.css";

export const Home = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.bannerInfo}>
        <div className={styles.descriptionContainer}>
          <div className={styles.title}>Сделай себя сам</div>
          <div className={styles.description}>
            Наш проект нацелен на ваши достижения
          </div>
          <div className={styles.buttonContainer}>
            <button className={styles.button} id={styles.newbie}>
              Я новичок
            </button>
            <button className={styles.button} id={styles.skilled}>
              Я опытный
            </button>
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.chevron}></div>
          <div className={styles.chevron}></div>
          <div className={styles.chevron}></div>
          <span className={styles.text}>Подробнее ниже</span>
        </div>
      </div>
      <img className={styles.img} src={backgroundImg} alt="Background" />
    </div>
  );
};
