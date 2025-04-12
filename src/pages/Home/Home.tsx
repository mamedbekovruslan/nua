import { Description } from "@/shared/Description/Description";
import { Banner } from "./components";
import styles from "./Home.module.scss";
import aboutProjectImg from "@/assets/backgrounds/dane-wetton-t1NEMSm1rgI-unsplash.jpg";
import guideImg from "@/assets/backgrounds/jonathan-borba-R0y_bEUjiOM-unsplash.jpg";
import readyPlanImg from "@/assets/backgrounds/anastase-maragos-aclkvEMIfL8-unsplash.jpg";
import workoutPlanningImg from "@/assets/backgrounds/jason-leung-S8lwbelOwYc-unsplash.jpg";

export const Home = () => {
  return (
    <div className={styles.homePageContainer}>
      <Banner />
      <Description
        textSide={"right"}
        img={aboutProjectImg}
        title={"Наш проект нацелен на ваши достижения"}
        titleAdd={`Вы можете начать свой путь с помощью гайдов. Или же найти что-то новое
          для себя даже если вы опытный атлет`}
      />
      <Description
        textSide={"left"}
        img={guideImg}
        title={"Начните с любого уровня"}
        titleAdd={`Воспользуйтесь гайдами с подробными шагами для достижения ваших целей`}
      />
      <Description
        textSide={"right"}
        img={readyPlanImg}
        title={"Опытным тоже есть чему поучиться"}
        titleAdd={`Даже если вы опытный атлет, вы можете найти для себя новые готовые программы тренировок по уровню сложности`}
      />
      <Description
        textSide={"left"}
        img={workoutPlanningImg}
        title={"Разрабатывайте свои планы тренировок"}
        titleAdd={`Вы можете разрабатывать ваши собственные программы тренировок, сохранять, редактировать и делиться ими с помощью нашего конструктора`}
      />
    </div>
  );
};
