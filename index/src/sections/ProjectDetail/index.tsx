import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import ImageContainer from "@/components/ImageContainer";
import { projectList } from '../Project/constants';
import { projectListProps } from '../Project';

type Props = {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  projectId: number | undefined;
}

const ProjectDetail = (props: Props) => {
  const { visible, setVisible, projectId } = props;
  const $toEl = document.getElementById('ProjectContainer');

  const [data, setData] = useState<projectListProps>()
  const handleClose = () => {
    setVisible(false)
  }
  useEffect(() => {
    visible && setData(projectList.find(v => v.projectId === projectId))
    return () => {
      if ($toEl) {
        $toEl.scrollTop = 0
        setData(undefined)
      }
    }
  }, [visible])
  

  return (
    <section className={styles.mark}  style={{ display: visible && projectId ? 'block' : 'none' }}>
      <div className={styles.ProjectDetail}>
      <div className={styles.centerWidth}>
         <div className={styles.close}>
          <div className={styles.closeButton} onClick={handleClose}></div>
         </div>
      </div>
      <div className={styles.container} id="ProjectContainer">
        <div className={styles.centerWidth}>
          <h2>{data?.title}</h2>
          <span>{data?.tech}</span>
        </div>
        <div className={styles.banner}> 
            <img src={data?.img} alt="" />
        </div>
        <div className={styles.centerWidth} style={{ margin: '28px auto 32px auto'}}>
          <h3>Technology stacks:</h3>
          <ul>
            {data?.technical && data?.technical.map(t => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
        <div className={styles.centerWidth}>
          <p className={styles.paragraph}>
             {data?.desc}
          </p>
          { data?.imagesArr && data?.imagesArr.map(v => (
            <div className={styles.image} key={v.url}>
            <ImageContainer
              src={v.url}
              thumb={v.thumb}
              alt={v.alt}
            />
          </div>
          )) }
        </div>
      </div>
      </div>
    </section>
  )
}

export default ProjectDetail