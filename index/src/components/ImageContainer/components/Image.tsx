import React , { ReactNode } from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";

type Props = {
  alt: string;
  thumb: string;
  src: string;
}

const Image = (props:Props) => {
  const {alt, thumb, src} = props;
  const [isLoaded, setIsLoaded] = React.useState(false);
  return (
    <div>
      <img
        className={classNames(styles.image, styles.thumb)}
        alt={alt}
        src={thumb}
        style={{ visibility: isLoaded ? "hidden" : "visible" }}
      />
      <img
        onLoad={() => {
          setIsLoaded(true);
        }}
        className={classNames(styles.image, styles.full)}
        style={{ opacity: isLoaded ? 1 : 0 }}
        alt={alt}
        src={src}
      />
    </div>
  );
};

export default Image;