import { useEffect, useState } from "react";
import { RouterProvider } from "react-router";
import { router } from "./router";
import styles from "./styles/Loader.module.scss";

export const App = () => {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setFadeOut(true);
        setTimeout(() => {
          setLoading(false);
        }, 500);
      }, 2000);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  return (
    <>
      {loading && (
        <div
          className={`${styles.spinnerContainer} ${
            fadeOut ? styles.fadeOut : ""
          }`}
        >
          <span className={styles.spinnerText}>Загрузка...</span>
          <div className={styles.spinner} />
        </div>
      )}
      <RouterProvider router={router} />
    </>
  );
};
