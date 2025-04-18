import styles from "./ProgramModal.module.scss";

type Props = {
  onClose: () => void;
};

export const ProgramModal = ({ onClose }: Props) => {
  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          ×
        </button>
        <div className={styles.programHeader}>
          <div className={styles.programName}>Массонабор</div>
          <div className={styles.programDates}>С 10.04.2025 - 15.08.2025</div>
          <div className={styles.programLevel}>Уровень: Средний</div>
        </div>
      </div>
    </div>
  );
};
