import React, { FC, useState, ReactNode } from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";
import { navItems } from "./constants";


export interface NavItem {
  text: string;
  toEl: string;
  left: number;
}

const Nav: FC = () => {
  const [activeItem, setActiveItem] = useState<string>("#home");
  const [verticalVisible, setVerticalVisible] = useState<boolean>(false);
  const [left, setLeft] = useState<number>(0);

  const scroll = (toEl: string, left: number) => {
    console.log(toEl);
    
    const $toEl = document.querySelector(toEl);
  
    if ($toEl) {
      $toEl.scrollIntoView({ behavior: "smooth" });
      setActiveItem(toEl);
      setLeft(left)
    }
  };

  const menuIcon:ReactNode = <div className={styles.menu}><svg width="100%" height="100%" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z" fill="currentColor"></path></svg></div>

  return (
    <nav className={styles.nav}>
        <div className={styles.title}>
          <span className={styles.round}>
            <span className={styles.smallRound}></span>
          </span>
          <span className={styles.name}>Jabin <span className={styles.namegrey}>Peng</span> </span>
        </div>
      {/* 横版 nav */}
        <ul className={styles.horizontal}>
          {navItems.map((nav, i:number) => (
            <li
              key={nav.toEl}
              className={classNames({ [styles.active]: nav.toEl === activeItem })}
              onClick={() => scroll(nav.toEl, nav.left)}
            >
              {nav.text}
            </li>
          ))}
          <div className={styles.slider} style={{ left }}></div>
          {/* 缩小版菜单栏 */}
          <li
            className={styles.navBtn}
            onClick={() => setVerticalVisible(!verticalVisible)}
          >
            {verticalVisible ? <div className={styles.closeButton}></div> : menuIcon }
          </li>
        </ul>

      {/* 竖版 nav */}
      {verticalVisible && (
        <ul className={styles.vertical}>
          {navItems.map((nav) => (
            <li
              key={nav.toEl}
              className={classNames({
                [styles.active]: nav.toEl === activeItem,
              })}
              onClick={() => {
                setVerticalVisible(false);
                scroll(nav.toEl, nav.left);
              }}
            >
              {nav.text}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Nav;
