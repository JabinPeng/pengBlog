import React from 'react';
import styles from './index.module.scss';
import rocket from "@/assets/images/cartoon-rocket.webp";
import { Space } from "antd"

type Props = {}

const Project = (props: Props) => {
  const projectList = [
    {
      img: 'https://andycao.me/static/images/project/cyvertex-cover.jpg',
      alt: '',
      title: 'Cyber Vertex News Portal',
      desc: 'The Cyber Vertex project integrates cybersecurity and digital forensics news data and learning resources. Provide a one-stop network security-related content provision platform. It also provides some social functions, to help learners to communicate and learn in a technical community. It may promote the development of cybersecurity and digital forensics field.',
      technical: 'web & mobile',
      href: ''
    },
    {
      img: 'https://andycao.me/static/images/project/cyvertex-cover.jpg',
      alt: '',
      title: 'Cyber Vertex News Portal',
      desc: 'The Cyber Vertex project integrates cybersecurity and digital forensics news data and learning resources. Provide a one-stop network security-related content provision platform. It also provides some social functions, to help learners to communicate and learn in a technical community. It may promote the development of cybersecurity and digital forensics field.',
      technical: 'web & mobile',
      href: ''
    }
  ]


  return (
    <div className={styles.project} id="project">
      <div className={styles.workspace}>
        <img src={rocket} alt="rocket" />
      </div>
      <div className={styles.projcetInfo}>
        <h2 className={styles.headline}>个人项目</h2>
        <p className={styles.desc}>一些好玩的项目</p>
      </div>
      <div className={styles.projectList}>
          { projectList.map((item, i) => (
              <div className={styles.projectItem} key={item.title + i}>  
                <a href={item.href} target="_blank">
                <div className={styles.projectImg}>
                  <img src={item.img} alt={item.alt} />
                </div>
                <div className={styles.projectInfo}>
                  <Space direction="vertical">
                    <h2 className={styles.title}>{item.title}</h2>
                    <span>{item.technical}</span>
                    <p className={styles.desc}>{item.desc}</p>
                  </Space>
                </div>
               </a>
              </div>
          )) }
      </div>
    </div>
  )
}

export default Project