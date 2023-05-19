import React, { useRef, ReactNode } from 'react'
import styles from "./styles.module.scss";


type Props = {
  children: ReactNode;
}

const MagicButton = (props:Props) => {

  const { children } = props;

  const buttonRef = useRef<HTMLDivElement | null>(null);

  const handleMove = (event:any) => {
    const target: EventTarget | null | any  = event.target;
    const rect= target?.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    buttonRef?.current?.style.setProperty("--x", `${x}px`);
    buttonRef?.current?.style.setProperty("--y", `${y}px`);
  };

  return (
    <div className={styles.magicButton}> 
      <div className={styles.inner} ref={buttonRef}>
        <button type="button" onMouseMove={handleMove}>{children}</button>
        <div className={styles.blob}></div>
      </div>
    </div>
  )
}


export default MagicButton