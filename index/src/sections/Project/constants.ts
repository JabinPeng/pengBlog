import { projectListProps } from './index';
import Fs from '@/assets/images/FS-com-Data-Center-Enterprise-Telecom.png';
import Fs1 from '@/assets/images/AP-N505-Cloud-Managed-Wi-Fi-6-1.png';
import Fs2 from '@/assets/images/AP-N505-Cloud-Managed-Wi-Fi-6-2.png';
import Fs3 from '@/assets/images/AP-N505-Cloud-Managed-Wi-Fi-6-3.png';
import Fs4 from '@/assets/images/AP-N505-Cloud-Managed-Wi-Fi-6-4.png';
import Fs5 from '@/assets/images/AP-N505-Cloud-Managed-Wi-Fi-6-5.png';
import Community from '@/assets/images/FS-Community.png';
import Community1 from '@/assets/images/FS-Community-List.png';
import Community2 from '@/assets/images/FS-Community-Blog.png';
import Community3 from '@/assets/images/FS-Community-Story.png';
import CommunityLogin from '@/assets/images/FS-Community-Login.png';
import RemapCity from '@/assets/images/RemapCity.png';
import PISX from '@/assets/images/PISX.png';
import CMS from '@/assets/images/FS-CMS.png';
import CMSLogin from '@/assets/images/CMS-Login.png';
import CommunityCMS from '@/assets/images/FS-Community-backstage.png';

const thumb = 'https://dummyimage.com/832x540/000/fff.png&text=loading';

export const projectList:projectListProps[] = [
  {
    projectId: 1,
    img: RemapCity,
    alt: '腾云慧城 RemapCity',
    title: '腾云慧城云平台',
    desc: '致力于为平衡城市发展需求和行业应用提供解决方案和服务，持续为客户创造价值，以填补城市不动产资产管理空白领域为核心使命，打造智慧城市的资产运营管理平台。',
    tech: 'web & mobile',
    href: 'https://www.remapcity.com/',
    technical: ['Vue', 'ElementUI', 'Scss', 'Webpack', 'Npm', 'Vant'],
    imagesArr: [{ thumb, url: RemapCity, alt: 'RemapCity'}]
  },
  {
    projectId: 2,
    img: PISX,
    alt: 'PISX',
    title: 'PISX',
    desc: '面向工业厂区管理部门，支持融合工业大数据、物联网、人工智能等各类技术，整合厂区现有信息系统的数据资源，实现数字孪生工厂、设备运维监测、智能管网监测、综合安防监测、便捷通行监测、能效管理监测、生产管理监测、仓储物流监测等多种功能。',
    tech: 'web & mobile',
    href: 'https://www.pisx.com/',
    technical: ['Vue', 'Antd', 'Scss', 'Webpack', 'IView', 'ThreeJS', 'Echarts', 'Npm'],
    imagesArr: [{ thumb, url: PISX, alt: 'PISX'}]
  },
  {
    projectId: 3,
    img: Fs,
    alt: 'FS-com-Data-Center-Enterprise-Telecom',
    title: 'FS.com - 全球领先的通信与高速互联解决方案设备商',
    desc: '飞速（FS）是一家数据中心、企业网、电信运营商网络解决方案提供商，我们帮助客户轻松部署和升级网络，助力其业务增长。',
    tech: 'web & mobile',
    href: 'https://www.fs.com/',
    technical: ['Vue', 'Nuxt', 'Npm', 'Webpack', 'Less', 'JavaScript'],
    imagesArr: [
      { thumb, url: Fs1, alt: 'FS-com'},
      { thumb, url: Fs2, alt: 'FS-com'},
      { thumb, url: Fs3, alt: 'FS-com'},
      { thumb, url: Fs4, alt: 'FS-com'},
      { thumb, url: Fs5, alt: 'FS-com'}
    ],
  },
  {
    projectId: 4,
    img: Community,
    alt: 'FS-Community',
    title: 'FS-Community',
    desc: '探索FS社区，了解FS创新、行业见解、客户成功和独特故事。',
    tech: 'web & mobile',
    href: 'https://community.fs.com/',
    technical: ['Vue', 'Nuxt', 'Npm', 'Webpack', 'Less', 'JavaScript'],
    imagesArr: [
      { thumb, url: Community, alt: 'FS-Community'},
      { thumb, url: Community1, alt: 'FS-Community'},
      { thumb, url: Community2, alt: 'FS-Community'},
      { thumb, url: Community3, alt: 'FS-Community'},
    ]
  },
  {
    projectId: 5,
    img: CMSLogin,
    alt: 'FS-CMS',
    title: 'FS-CMS',
    desc: '商城后台内容管理系统',
    tech: 'web',
    href: 'https://cms.fs.com/',
    technical: ['React', 'Arco', 'Yarn', 'Webpack', 'Scss', 'TypeScript'],
    imagesArr: [{ thumb, url: CMS, alt: 'FS-CMS'}]
  },
  {
    projectId: 6,
    img: CommunityLogin,
    alt: 'FS-Community-CMS',
    title: 'FS-Community-CMS',
    desc: '社区后台内容管理系统',
    tech: 'web',
    href: 'https://cms.fs.com/',
    technical: ['React', 'Antd', 'Yarn', 'Webpack', 'Sass', 'TypeScript'],
    imagesArr: [{ thumb, url: CommunityCMS, alt: 'FS-Community-CMS'}]
  }
]