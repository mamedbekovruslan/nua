import styles from "./About.module.scss";
import teamImage from "@/assets/backgrounds/cherrydeck-rMILC1PIwM0-unsplash.jpg";

export const About = () => {
  return (
    <div className={styles.aboutContainer}>
      {/* Первый блок: заголовок + текст */}
      <section className={styles.heroSection}>
        <div className={styles.textBlock}>
          <h1 className={styles.title}>
            We build bridges <br />
            <span>between companies</span> and customers
          </h1>
          <p className={styles.subtitle}>
            To build software that gives customer-facing teams at small- and
            medium-sized businesses the ability to create fruitful and enduring
            relationships with customers.
          </p>
        </div>
        <div className={styles.imageBlock}>
          <img src={teamImage} alt="Team" />
        </div>
      </section>

      {/* Второй блок: доп инфо */}
      <section className={styles.infoSection}>
        <div className={styles.infoTextBlock}>
          <h2 className={styles.infoTitle}>Together we are strong</h2>
          <p className={styles.infoParagraph}>
            Our crew is always getting bigger, but we all work toward one goal:
            to make sales success not only possible but inevitable for teams
            everywhere.
          </p>
          <p className={styles.infoNote}>
            In 2022, at vero eos et accusamus et iusto odio dignissimos ducimus
            qui blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias.
          </p>
        </div>
      </section>
    </div>
  );
};
