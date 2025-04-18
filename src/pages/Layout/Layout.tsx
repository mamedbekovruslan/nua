import { Link, Outlet, useLocation } from "react-router";
import styles from "./Layout.module.css";
import { Footer } from "./components";

export const Root = () => {
  const { pathname } = useLocation();

  return (
    <div>
      <div
        className={`${styles.headerContainer} ${
          pathname === "/"
            ? styles.absoluteAndTransparent
            : styles.relativeAndBlack
        }`}
      >
        <div className={styles.logo}>NUA</div>
        <nav className={styles.nav}>
          <Link className={styles.link} to="/">
            Главая
          </Link>
          <Link className={styles.link} to="/guides">
            Гайды
          </Link>
          <Link className={styles.link} to="/programs">
            Программы
          </Link>
          <Link className={styles.link} to="/constructor">
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
};
