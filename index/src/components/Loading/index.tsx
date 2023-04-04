import React, { FC } from "react";
import styles from "./styles.module.scss";

interface Props {
  title?: string;
}

const Loading: FC<Props> = (props) => {
  const { title } = props;

  return (
    <div className={styles.loading}>
      <div className={styles.boxLoading}></div>
      {title && <p>{title}</p>}
    </div>
  );
};

export default Loading;
