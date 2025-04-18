import styles from "./Profile.module.scss";

export const Profile = () => {
  return (
    <div className={styles.profileWrapper}>
      <div className={styles.profileCard}>
        <div className={styles.cover} />
        <div className={styles.infoBlock}>
          <img
            className={styles.avatar}
            src="/images/avatar.jpg"
            alt="Avatar"
          />
          <div className={styles.mainInfo}>
            <h2 className={styles.name}>Amanda Smith</h2>
            <p className={styles.location}>🇺🇸 Los Angeles, United States</p>
            <p className={styles.username}>@amanda21</p>
            <p className={styles.position}>
              Lead product designer at Google • Full-time
            </p>
            <div className={styles.buttons}>
              <button className={styles.message}>Message</button>
              <button className={styles.share}>Share profile</button>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.skillsBlock}>
        <h3>Skills</h3>
        <div className={styles.skillsList}>
          {[
            "Product Design",
            "UX Design",
            "Google Analytics",
            "SEO Content",
            "Customer Service",
            "UI Design",
            "Design Strategy",
            "Web-Development",
            "Integrated Design",
            "Front End",
          ].map((skill) => (
            <span key={skill} className={styles.skillTag}>
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
