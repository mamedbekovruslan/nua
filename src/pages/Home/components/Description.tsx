import aboutProjectImg from "../../../assets/backgrounds/dane-wetton-t1NEMSm1rgI-unsplash.jpg";
import styles from "../Home.module.css";

export const Description = () => {
  return (
    <div className={styles.descriptionContainer}>
      <div className={styles.descriptionImgContainer}>
        <img className={styles.descriptionImg} src={aboutProjectImg} />
      </div>
      <div className={styles.descriptionTextContainer}>
        <span className={styles.descriptionTextTitle}>
          Наш проект нацелен на ваши достижения
        </span>
        <span className={styles.descriptionTextAdd}>
          Вы можете начать свой путь с помощью гайдов. Или же найти что-то новое
          для себя даже если вы опытный атлет.
        </span>
      </div>
    </div>
  );
};
