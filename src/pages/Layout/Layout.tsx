import { Link, Outlet } from "react-router";
import styles from "./Layout.module.css";
import { Footer } from "./components";

export const Root = () => (
  <div>
    <div className={styles.headerContainer}>
      <div className={styles.logo}>NUA</div>
      <nav className={styles.nav}>
        <Link className={styles.link} to="/">
          Главая
        </Link>
        <Link className={styles.link} to="/">
          Гайды
        </Link>
        <Link className={styles.link} to="/">
          Планы
        </Link>
        <Link className={styles.link} to="/">
          Конструктор
        </Link>
        <Link className={styles.link} to="/about">
          Контакты
        </Link>
        <Link className={styles.link} to="/about">
          О нас
        </Link>
      </nav>
      <div>Админ</div>
    </div>
    <Outlet />
    <Footer />
  </div>
);
