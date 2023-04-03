import { useEffect, useRef } from "react";
import lottie, { AnimationConfigWithData } from "lottie-web";

const useLottie = (path: string, extra?: AnimationConfigWithData) => {
  let lottieRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (lottieRef.current) {
      lottie.loadAnimation({
        container: lottieRef.current,
        path,
        renderer: "svg",
        loop: true,
        autoplay: true,
        ...extra,
      });
    }
    return () => {
      lottieRef.current = null
    }
  }, []);

  return lottieRef;
};

export default useLottie;
