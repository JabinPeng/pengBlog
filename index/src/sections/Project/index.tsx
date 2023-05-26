import React, { useState } from 'react';
import styles from './index.module.scss';
import rocket from "@/assets/images/cartoon-rocket.webp";
import { Space } from "antd"
import { projectList } from "./constants";
import ImageContainer from "@/components/ImageContainer";
import ProjectDetail from "../ProjectDetail";

type Props = {}

type imagesArrProps = {
  alt: string;
  url: string;
  thumb: string;
}

export type projectListProps = {
  img: string;
  alt: string;
  title: string;
  desc: string;
  href: string;
  projectId: number;
  tech: string;
  technical?: string[];
  imagesArr?: imagesArrProps[];
  content?: string;
}

const Project = (props: Props) => {
  const [visible, setVisible] = useState<boolean>(false);
  const [projectId, setProjectId] = useState<number | undefined>();
  
  const openDetail = (item:projectListProps) => {
    setProjectId(item.projectId)
    setVisible(true)
  } 

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
          { projectList.map((item:projectListProps, i:number) => (
              <div className={styles.projectItem} key={item.projectId}>  
                <a onClick={() => openDetail(item)} rel="noreferrer">
                <div className={styles.projectImg}>
                  <ImageContainer
                      src={item.img}
                      thumb="https://dummyimage.com/832x540/000/fff.png&text=loading"
                      alt={item.alt}
                    />
                </div>
                <div className={styles.projectInfo}>
                  <Space direction="vertical">
                    <h2 className={styles.title}>{item.title}</h2>
                    <span>{item.tech}</span>
                    <p className={styles.desc}>{item.desc}</p>
                  </Space>
                </div>
               </a>
              </div>
          )) }
      </div>
      <ProjectDetail visible={visible} setVisible={setVisible} projectId={projectId}/>
    </div>
  )
}

export default Project