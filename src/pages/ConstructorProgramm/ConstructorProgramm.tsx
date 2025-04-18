// ConstructorProgramm.tsx
import { useParams } from "react-router";
import styles from "./ConstructorProgramm.module.scss";

export const ConstructorProgramm = () => {
  const { programmId } = useParams();

  return (
    <div className={styles.container}>
      {/* Левая колонка с днями */}
      <aside className={styles.daysSidebar}>
        <div className={styles.daysTitle}>Дни</div>
        <ul className={styles.dayList}>
          {Array.from({ length: 5 }, (_, i) => (
            <li
              key={i}
              className={`${styles.dayItem} ${i === 0 ? styles.active : ""}`}
            >
              День {i + 1}
            </li>
          ))}
          <li className={styles.ellipsis}>...</li>
        </ul>
      </aside>

      {/* Центр: Заголовок и список упражнений */}
      <main className={styles.mainContent}>
        <div className={styles.programHeader}>
          <div className={styles.programName}>Массонабор</div>
          <div className={styles.programDates}>С 10.04.2025 - 15.08.2025</div>
          <div className={styles.programLevel}>Уровень: Средний</div>
        </div>

        <div className={styles.exerciseList}>
          <div className={styles.exerciseCard}>
            <div className={styles.exerciseImage}>[img]</div>
            <div>
              <div className={styles.exerciseTitle}>
                Приседания <span className={styles.click}>CLICK</span>
              </div>
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

      {/* Правая панель: детальное представление упражнения */}
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
            1. Встать прямо, выровняв спину. Свести лопатки, поставить ступни
            чуть шире таза (бидер).
          </div>
          <div>
            2. Сделать вдох, напрячь мышцы живота и спины и начать опускаться.
            При этом бёдра нужно отвести назад.
          </div>
        </div>
      </section>
    </div>
  );
};
