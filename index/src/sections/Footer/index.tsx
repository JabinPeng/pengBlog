import React from 'react'
import styles from './index.module.scss'
import { Tooltip, Row, Col } from "antd";
import Paragraph from "@/components/Paragraph";
import { techs, share, toysLottie } from "./constants";
import Fade from "react-reveal/Fade";
import useLottie from "@/hooks/useLottie";




const Footer = () => {

  const fireRef = useLottie(toysLottie);

  const goLink = (url: string) => {
    window.location.href = url
  }
  return (
    <footer className={styles.footer} id="contact">
      <Row className={styles.content}>
        <Col span={24} md={12} className={styles.left}>
          <Fade left>
            <div className={styles.dog}>
                <div ref={fireRef}></div>
            </div>
            <div className={styles.techList}>
              <Paragraph>个人主页使用了：</Paragraph>
              {techs.map((tech) => (
                <Tooltip
                  key={tech.content}
                  placement="top"
                  title={tech.content}
                  color="black"
                >
                  <img src={tech.image} alt="tech" />
                </Tooltip>
              ))}
            </div>
            <p className={styles.record}>
              <a rel="noreferrer" target="_blank" href="https://beian.miit.gov.cn/">
                鄂ICP备18004957号
              </a>
            </p>
          </Fade>
        </Col>
        <Col span={24} md={12} className={styles.right}>
          <Fade right>
            <div className={styles.shareList}>
              {share.map((s) => (
                <img key={s.url} src={s.image} onClick={() => goLink(s.url)} alt="share" />
              ))}
            </div>
            <p className={styles.record}>
              <a rel="noreferrer" target="_blank" href="https://beian.miit.gov.cn/">
                鄂ICP备18004957号
              </a>
            </p>
          </Fade>
        </Col>
      </Row>
    </footer>
  )
}

export default Footer