import React, { useRef } from 'react'
import styles from "./styles.module.scss";


type Props = {
  children: String;
}

const MagicButton = (props:Props) => {

  const { children } = props;

  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const handleMove = (event:any) => {
    const target: EventTarget | null | any  = event.target;
    const rect= target?.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    console.log(x, y);
    buttonRef?.current?.style.setProperty("--x", `${x}px`);
    buttonRef?.current?.style.setProperty("--y", `${y}px`);
    // buttonRef?.current?.style.setProperty("--height", `${rect.height}px`);
    // buttonRef?.current?.style.setProperty("--width", `${rect.width}px`);
  };

  return (
    <div className={styles.magicButton}> 
      <div className={styles.inner}>
        <button type="button" onMouseMove={handleMove} ref={buttonRef}>{children}</button>
        <div className={styles.blob}></div>
      </div>
    </div>
  )
}


export default MagicButton