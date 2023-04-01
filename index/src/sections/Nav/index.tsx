import React, { FC, useState } from "react";
import classNames from "classnames";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
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
    setActiveItem(toEl);
    setLeft(left)
    if ($toEl) {
      $toEl.scrollIntoView({ behavior: "smooth" });
    }
  };

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
          {verticalVisible ? <CloseOutlined /> : <MenuOutlined />}
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
                scroll(nav.toEl);
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
