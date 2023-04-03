import React from 'react'
import styles from "./styles.module.scss"
import { Col, Row } from "antd"
import Fade from "react-reveal/Fade"
import useTyped from '@/hooks/useTyped'
import useLottie from "@/hooks/useLottie"
import {arrowDownLottie, fireLottie} from './constants'

type Props = {}

const strings = ["聊聊技术。", "吹吹水。", "打打游戏。"];

const Home = (props: Props) => {
  const el = useTyped(strings, { loop: true });
  const arrowDownLottieRef = useLottie(arrowDownLottie);
  const fireRef = useLottie(fireLottie);

  const next = () => {
    const $about = document.querySelector("#about");
    if ($about) {
      $about.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className={styles.home}>
      <Row className={styles.content}>
        <Col span={24} md={15} className={styles.intro}>
          <p>我是Jabin，</p>
          <p>
            一个 前端工程师，写{" "}
            <span className={styles.react}>React/Vue</span> 的。
          </p>
          <p>喜欢简约设计 🛀，</p>
          <p>
            偶尔
            <span className={styles.sometime} ref={el} />
          </p>
        </Col>
        <Col span={24} md={9} className={styles.bannerBox}>
          <Fade bottom>
           <div className={styles.banner}></div>
           <div className={styles.fire} ref={fireRef}></div>
           {/* <div className={styles.fire2} ref={fireRef}></div> */}
          </Fade>
        </Col>

        <Col className={styles.next} span={24}>
          <Fade top>
            <div className={styles.handDown}>
              <div ref={arrowDownLottieRef} onClick={next} />
            </div>
          </Fade>
        </Col>
      </Row>
    </section>
  )
}

export default Home