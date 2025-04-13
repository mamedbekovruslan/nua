import { Icon } from "@/shared/Icon/Icon";
import styles from "./Constructor.module.scss";

export const Constructor = () => {
  return (
    <div className={styles.constructorPageContainer}>
      <div>
        <span className={styles.constructorTitle}>Ваши программы</span>
      </div>
      <div className={styles.programmList}>
        <div className={styles.programmCard}>
          <Icon name="add" size={22} />
          <span className={styles.cardTitle}>Создать</span>
        </div>
        <div className={styles.programmCard}>Массонабор</div>
      </div>
    </div>
  );
};
