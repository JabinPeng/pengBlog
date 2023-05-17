import React from 'react';
import styles from './index.module.scss';
import workspace from "@/assets/images/page-hero-workspace.webp";
import avatar from "@/assets/images/avatar.webp";
import Fade from 'react-reveal/Fade';
import Jello from 'react-reveal/Jello';
import Reveal from 'react-reveal/Reveal';

type Props = {}

const About = (props: Props) => {

  const next = () => {
    const $project = document.querySelector("#project");
    if ($project) {
      $project.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={styles.abort} id="about">
      <div className={styles.workspace}>
        <img src={workspace} alt="workspace" />
      </div>
      <div className={styles.info}>
        <Fade bottom>
          <div className={styles.avatar}>
            <img src={avatar} alt="个人头像" />
          </div>
        </Fade>
        <Reveal effect="fadeInUp">
          <h2>
              Jabin Li
          </h2>
          <h3>
            软件开发人员
          </h3>
          <p>👋🏽 嘿，我叫 李志鹏，我是一名前端开发人员 👨‍💻， 🏠住在武汉。 大多数情况下，我正在处理一些网站 🕸 和移动端 📱 。 目前就职于<a target="_blank" href="https://www.fs.com">FS</a>。业余爱好喜欢打游戏，也喜欢折腾一些电子产品来取乐。努力成为一个终身学习者🧠以及一个好父亲💁🏻‍♂️</p>
        </Reveal>
        <Jello>
          <div className={styles.button} onClick={next}>
            了解更多👇
          </div>
        </Jello>
      </div>

    </div>
  )
}

export default About