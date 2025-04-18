import styles from "./ExerciseDetail.module.scss";

export const ExerciseDetails = () => {
  return (
    <section className={styles.exerciseDetails}>
      <div className={styles.exercisePreview}>Анимация выполнения</div>
      <div className={styles.exerciseName}>Приседания</div>
      <div className={styles.exerciseSets}>3 подхода</div>
      <div className={styles.weightsRow}>
        <div className={styles.weightBox}>
          x12
          <br />
          90кг
        </div>
        <div className={styles.weightBox}>
          x12
          <br />
          90кг
        </div>
        <div className={styles.weightBox}>
          x12
          <br />
          90кг
        </div>
      </div>
      <div className={styles.exerciseSteps}>
        <div>
          1. Встать прямо, выровняв спину. Свести лопатки, поставить ступни чуть
          шире таза (бидер).
        </div>
        <div>
          2. Сделать вдох, напрячь мышцы живота и спины и начать опускаться. При
          этом бёдра нужно отвести назад.
        </div>
      </div>
    </section>
  );
};
