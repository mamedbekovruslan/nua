import { Banner, Description } from "./components";
import styles from "./Home.module.css";

export const Home = () => {
  return (
    <div className={styles.homePageContainer}>
      <Banner />
      <Description />
    </div>
  );
};
