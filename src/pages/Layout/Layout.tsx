import { Link, Outlet } from "react-router";
import styles from "./Layout.module.css";

export const Root = () => (
  <div>
    <nav className={styles.nav}>
      <Link to="/">Главая</Link>
      <Link to="/about">О нас</Link>
    </nav>
    <Outlet />
  </div>
);
