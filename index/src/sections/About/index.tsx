import React from 'react';
import styles from './index.module.scss';
import workspace from "@/assets/images/page-hero-workspace.webp";
import avatar from "@/assets/images/avatar.webp";
import Fade from 'react-reveal/Fade';

type Props = {}

const About = (props: Props) => {
  return (
    <div className={styles.abort} id="about">
      <div className={styles.workspace}>
        <img src={workspace} alt="workspace" />
      </div>
      <div className={styles.info}>
       <Fade bottom>
          <div className={styles.avatar}>
            <img src={avatar} alt="" />
          </div>
          <h2>
              Jabin Li
          </h2>
          <h3>
            软件开发人员
          </h3>
          <p>👋🏽 嘿，我叫 Jabin，我是一名前端开发人员 👨‍💻， 🏠住在武汉。 大多数情况下，我正在处理一些网站 🕸 和移动端 📱 。 目前就职于<a target="_blank" href="https://www.fs.com">FS</a>。</p>
        </Fade>
      </div>

    </div>
  )
}

export default About