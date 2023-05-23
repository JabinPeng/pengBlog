import React, {useRef, useState} from "react";
import Image from "./components/Image";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import styles from './styles.module.scss'

type Props = {
  height?: number;
  width?: number;
  src: string;
  thumb: string;
  alt: string;
}

const ImageContainer = (props:Props) => {
  const {height, width, src, thumb, alt} = props;
  const divRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useIntersectionObserver({
    target: divRef,
    onIntersect: ([{ isIntersecting }], observerElement) => {
      if (isIntersecting) {
        if (!isVisible) {
          setIsVisible(true);
        }
        observerElement.unobserve(divRef.current);
      }
    }
  });

  // const aspectRatio = (height / width) * 100;

  return (
    <div
      className={styles.imageContainer}
      // style={{ paddingBottom: `${aspectRatio}%` }}
      ref={divRef}
    >
      {isVisible && (
        <Image src={src} thumb={thumb} alt={alt} />
      )}
    </div>
  );
};

export default ImageContainer;