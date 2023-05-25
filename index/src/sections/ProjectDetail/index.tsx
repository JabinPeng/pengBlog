import React from 'react';
import styles from './styles.module.scss';
import ImageContainer from "@/components/ImageContainer";

type Props = {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProjectDetail = (props: Props) => {
  const { visible, setVisible } = props;

  const handleClose = () => {
    setVisible(false)
  }

  return (
    <section className={styles.ProjectDetail} style={{ display: visible ? 'block' : 'none' }}>
      <div className={styles.centerWidth}>
         <div className={styles.close}>
          <div className={styles.closeButton} onClick={handleClose}></div>
         </div>
      </div>
      <div className={styles.container} >
        <div className={styles.centerWidth}>
          <h2>FS.com</h2>
          <span>web & mobile</span>
        </div>
        <div className={styles.banner}> 
            <img src="https://andycao.me/static/images/project/quduoduo-cover.jpg" alt="" />
        </div>
        <div className={styles.centerWidth} style={{ margin: '28px auto 32px auto'}}>
          <h3>Technology stacks:</h3>
          <ul>
            <li>Javascript</li>
            <li>Wechat</li>
            <li>Ts</li>
          </ul>
        </div>
        <div className={styles.centerWidth}>
          <p className={styles.paragraph}>
              Multi-player real-time online competitive games, users can layout football players and start a competition. You can exchange points by battles and get corresponding prizes.
          </p>
          <div className={styles.image}>
            <ImageContainer
              src="https://andycao.me/static/images/project/quduoduo-01.jpg"
              thumb="https://dummyimage.com/416x270/000000/fff.png&text=^_^"
              alt="alt"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectDetail