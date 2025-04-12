import styles from "./Description.module.scss";
import { Side } from "@/pages/Home/consts/sides";

type Props = {
  textSide: Side;
  img: string;
  title: string;
  titleAdd: string;
};

export const Description = ({ textSide, img, title, titleAdd }: Props) => {
  return textSide === "right" ? (
    <div className={styles.descriptionContainer}>
      <div className={styles.descriptionImgContainer}>
        <img className={styles.descriptionImg} src={img} />
      </div>
      <div className={styles.descriptionTextContainer}>
        <span className={styles.descriptionTextTitle}>{title}</span>
        <span className={styles.descriptionTextAdd}>{titleAdd}</span>
      </div>
    </div>
  ) : (
    <div className={styles.descriptionContainer}>
      <div className={styles.descriptionTextContainer}>
        <span className={styles.descriptionTextTitle}>{title}</span>
        <span className={styles.descriptionTextAdd}>{titleAdd}</span>
      </div>
      <div className={styles.descriptionImgContainer}>
        <img className={styles.descriptionImg} src={img} />
      </div>
    </div>
  );
};
