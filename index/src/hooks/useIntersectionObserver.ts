import React from "react";

type Props = {
  target: any;
  onIntersect: (isIntersecting:any, observerElement:any) => void;
  threshold?: number;
  rootMargin?: string;
}

const useIntersectionObserver = ({
  target,
  onIntersect,
  threshold = 0.1,
  rootMargin = "0px"
}:Props) => {
  React.useEffect(() => {
    const observer = new IntersectionObserver(onIntersect, {
      rootMargin,
      threshold
    });
const current = target?.current;
observer.observe(current);
return () => {
      observer.unobserve(current);
    };
  });
};
export default useIntersectionObserver;
