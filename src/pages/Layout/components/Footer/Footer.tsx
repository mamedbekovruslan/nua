import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <ul className={styles.footerList}>
        <li className={styles.footerListItem}>Новости</li>
        <li className={styles.footerListItem}>Обновления</li>
        <li className={styles.footerListItem}>Подписка</li>
        <li className={styles.footerListItem}>Связь</li>
        <li className={styles.footerListItem}>F.A.Q.</li>
      </ul>
      <div className={styles.footerLogo}>
        <span>NUA</span>
      </div>
    </div>
  );
};
