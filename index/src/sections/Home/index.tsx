import React from 'react'
import styles from "./styles.module.scss"
import { Col, Row } from "antd"
import useTyped from '@/hooks/useTyped'

type Props = {}

const strings = ["聊聊技术。", "吹吹水。", "打打游戏。"];

const Home = (props: Props) => {
  const el = useTyped(strings, { loop: true });
  return (
    <section id="home" className={styles.home}>
      <Row className={styles.content}>
        <Col span={24} md={15} className={styles.intro}>
          <p>我是Jabin，</p>
          <p>
            一条 前端开发，写{" "}
            <span className={styles.react}>React/Vue</span> 的。
          </p>
          <p>喜欢简约设计 🛀，</p>
          <p>
            偶尔
            <span className={styles.sometime} ref={el} />
          </p>
        </Col>
        <Col span={24} md={9} className={styles.banner}>

        </Col>
      </Row>
    </section>
  )
}

export default Home