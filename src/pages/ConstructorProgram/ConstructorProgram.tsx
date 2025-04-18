// ConstructorProgramm.tsx
import { useParams } from "react-router";
import { useState } from "react";
import styles from "./ConstructorProgram.module.scss";
import {
  DaysSidebar,
  MainExerciseList,
  ExerciseDetails,
  ProgramModal,
} from "./components";

export const ConstructorProgramm = () => {
  const { programmId } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={styles.container}>
      <DaysSidebar onInfoClick={() => setIsModalOpen(true)} />
      <MainExerciseList />
      <ExerciseDetails />
      {isModalOpen && <ProgramModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};
