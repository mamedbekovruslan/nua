import { Link, Outlet, useLocation } from "react-router";
import styles from "./Layout.module.css";
import { Footer } from "./components";
import { useEffect, useRef, useState } from "react";

export const Root = () => {
  const { pathname } = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleItemClick = () => {
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
          <Link className={styles.link} to="/contacts">
            Контакты
          </Link>
          <Link className={styles.link} to="/about">
            О нас
          </Link>
          <Link className={styles.link} to="/admin">
            Админка
          </Link>
        </nav>
        <div className={styles.adminWrapper} ref={dropdownRef}>
          <button
            className={styles.adminButton}
            onClick={() => setIsDropdownOpen((prev) => !prev)}
          >
            Админ
          </button>

          {isDropdownOpen && (
            <div className={styles.dropdownMenu}>
              <Link
                to="/profile"
                className={styles.dropdownItem}
                onClick={handleItemClick}
              >
                Профиль
              </Link>
              <button className={styles.dropdownItem} onClick={handleItemClick}>
                Выйти
              </button>
            </div>
          )}
        </div>
      </div>
      <Outlet />
      <Footer />
    </div>
  );
};
