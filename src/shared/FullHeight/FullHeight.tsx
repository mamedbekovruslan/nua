import { JSX, ReactNode } from "react";
import styles from "./FullHeight.module.scss";

type FullHeightProps = {
  children: ReactNode;
};

export const FullHeight = ({ children }: FullHeightProps): JSX.Element => {
  return <div className={styles.fullHeight}>{children}</div>;
};
