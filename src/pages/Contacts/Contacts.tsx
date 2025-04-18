import contactsImg from "../../assets/backgrounds/anastase-maragos-DHsdSeCpjRU-unsplash.jpg";
import styles from "./Contacts.module.scss";

export const Contacts = () => {
  return (
    <div className={styles.contactsContainer}>
      <div className={styles.leftContent}>
        <h1 className={styles.title}>CONTACT US</h1>
        <p className={styles.subtitle}>
          For any inquiries, collaborations, or just to say hello, we’d love to
          hear from you!
          <br />
          Reach out, and let’s connect.
        </p>

        <div className={styles.block}>
          <h3 className={styles.blockTitle}>PRESS</h3>
          <p className={styles.text}>SAMSUNG C&T CORPORATION (MILAN OFFICE)</p>
          <p className={styles.text}>
            Centro Direzionale Milanofiori, Strada 2,
          </p>
          <p className={styles.text}>PALAZZO C1, 20057 Assago Milano, Italy</p>
          <p className={styles.text}>JUUN.J PR</p>
          <p className={styles.text}>JUUNJ.PR@samsung.com</p>
        </div>

        <div className={styles.block}>
          <h3 className={styles.blockTitle}>SALES</h3>
          <p className={styles.text}>JUUN.J SHOWROOM</p>
          <p className={styles.text}>showroom.it@samsung.com</p>
        </div>

        <div className={styles.block}>
          <h3 className={styles.blockTitle}>HEAD OFFICE</h3>
          <p className={styles.text}>JUUN.J SAMSUNG C&T CORPORATION</p>
          <p className={styles.text}>
            286, Nambusunhwang-Ro, Gangnam-Gu, Seoul,
          </p>
          <p className={styles.text}>Republic of Korea</p>
        </div>
      </div>

      <div className={styles.rightImage}>
        <img src={contactsImg} alt="Contact Visual" />
      </div>
    </div>
  );
};
