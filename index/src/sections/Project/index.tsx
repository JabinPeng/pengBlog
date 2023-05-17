import React from 'react';
import styles from './index.module.scss';
import rocket from "@/assets/images/cartoon-rocket.webp";
import MButton from "@/components/MagicButton"

type Props = {}

const Project = (props: Props) => {
  return (
    <div className={styles.project} id="project">
      <div className={styles.workspace}>
        <img src={rocket} alt="rocket" />
      </div>
      <div className={styles.projcetInfo}>
        <h2 className={styles.headline}>个人项目</h2>
        <p className={styles.desc}>一些好玩的项目</p>
      </div>

      <MButton >了解更多</MButton>
    </div>
  )
}

export default Project