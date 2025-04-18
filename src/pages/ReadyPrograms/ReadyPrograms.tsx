import styles from "./ReadyPrograms.module.scss";

export const ReadyPrograms = () => {
  return (
    <div className={styles.container}>
      {/* Боковая колонка с категориями */}
      <aside className={styles.sidebar}>
        <h3 className={styles.blockTitle}>Категории</h3>
        <ul className={styles.categoryList}>
          <li>Сила</li>
          <li>Выносливость</li>
          <li>Кардио</li>
        </ul>
      </aside>

      {/* Правая колонка со списком программ */}
      <section className={styles.programsContent}>
        <h2 className={styles.programsTitle}>Программы тренировок</h2>
        <ul className={styles.programList}>
          <li className={styles.programCard}>5x5</li>
          <li className={styles.programCard}>Дропсет</li>
          <li className={styles.programCard}>Full Body</li>
          <li className={styles.programCard}>5x5</li>
          <li className={styles.programCard}>Дропсет</li>
          <li className={styles.programCard}>Full Body</li>
          <li className={styles.programCard}>Full Body</li>
          <li className={styles.programCard}>5x5</li>
          <li className={styles.programCard}>Дропсет</li>
          <li className={styles.programCard}>Full Body</li>
        </ul>
      </section>
    </div>
  );
};
