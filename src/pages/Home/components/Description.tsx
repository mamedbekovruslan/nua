import aboutProjectImg from "../../../assets/backgrounds/dane-wetton-t1NEMSm1rgI-unsplash.jpg";
import styles from "../Home.module.css";

export const Description = () => {
  return (
    <div className={styles.descriptionContainer}>
      <div className={styles.descriptionImgContainer}>
        <img className={styles.descriptionImg} src={aboutProjectImg} />
      </div>
      <div className={styles.descriptionTextContainer}>
        <span>Наш проект нацелен на ваши достижения</span>
      </div>
    </div>
  );
};
