import styles from "./MainExerciseList.module.scss";

export const MainExerciseList = () => {
  return (
    <main className={styles.mainContent}>
      <div className={styles.exerciseList}>
        <div className={styles.exerciseCard}>
          <div className={styles.exerciseImage}>[img]</div>
          <div>
            <div className={styles.exerciseTitle}>Подтягивания</div>
            <div>5 подходов</div>
            <div>25 повторений</div>
            <div>Отдых 2-3 минуты</div>
          </div>
        </div>
        <div className={styles.exerciseCard}>
          <div className={styles.exerciseImage}>[img]</div>
          <div>
            <div className={styles.exerciseTitle}>Отжимания</div>
            <div>5 подходов</div>
            <div>25 повторений</div>
            <div>Отдых 2-3 минуты</div>
          </div>
        </div>
      </div>
    </main>
  );
};
