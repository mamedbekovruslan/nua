import styles from "./DaysSidebar.module.scss";

type Props = {
  onInfoClick: () => void;
};

export const DaysSidebar = ({ onInfoClick }: Props) => {
  return (
    <aside className={styles.daysSidebar}>
      <div className={styles.daysTitleRow}>
        <div className={styles.daysTitle}>Дни</div>
        <button className={styles.infoButton} onClick={onInfoClick}>
          i
        </button>
      </div>
      <ul className={styles.dayList}>
        {Array.from({ length: 5 }, (_, i) => (
          <li
            key={i}
            className={`${styles.dayItem} ${i === 0 ? styles.active : ""}`}
          >
            День {i + 1}
          </li>
        ))}
      </ul>
    </aside>
  );
};
