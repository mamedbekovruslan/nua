import styles from "./Guides.module.scss";

export const Guides = () => {
  return (
    <div className={styles.container}>
      <aside className={styles.sidebar}>
        <div className={styles.categoriesBlock}>
          <h3 className={styles.blockTitle}>Категории</h3>
          <ul className={styles.categoryList}>
            <li>Питание</li>
            <li>Тренировки</li>
            <li>Массонабор</li>
            <li>Сушка</li>
            <li>Рекомпозиция</li>
          </ul>
        </div>
        <div className={styles.guidesBlock}>
          <h3 className={styles.blockTitle}>Гайды</h3>
          <ul className={styles.guideList}>
            <li>Как рассчитать калории</li>
            <li>Фазы питания</li>
            <li>Программа тренировок для новичка</li>
          </ul>
        </div>
      </aside>

      {/* Правая часть с контентом гайда */}
      <section className={styles.guideContent}>
        <h2 className={styles.guideTitle}>Питание: Основы</h2>
        <p className={styles.paragraph}>
          Питание — это основа здоровья и прогресса. Оно строится на соотношении
          белков, жиров, углеводов, калорийности, достаточном водном балансе и
          режиме.
        </p>
        <img
          className={styles.guideImage}
          src="/images/nutrition-structure.jpg"
          alt="структура питания"
        />
        <p className={styles.paragraph}>
          Белки нужны для восстановления мышц, жиры — для гормонов, углеводы —
          для энергии.
        </p>
        <p className={styles.paragraph}>
          Существуют различные фазы: сушка, массонабор, рекомпозиция. Важно
          учитывать цели и адаптировать питание под них.
        </p>
        <img
          className={styles.guideImage}
          src="/images/phase-comparison.jpg"
          alt="фазы питания"
        />
      </section>
    </div>
  );
};
