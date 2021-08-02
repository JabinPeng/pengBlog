module.exports = {
  "title": "饭团也有春天",
  "description": "",
  "dest": "public",
  "base": "/blog/",
  "locales": {
    '/': {
      lang: 'zh-CN'
    }
  },
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "https://www.zpzpup.com/assets/image/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ],
    ["script", { src: "/assets/js/bodyClick.js" }]
  ],
  "theme": "reco",
  "themeConfig": {
    "mode": 'dark',
    "noFoundPageByTencent": true,
    "logo": 'https://www.zpzpup.com/assets/image/avatar.png',
    "valineConfig": {
      appId: 'e6ojaBbYmQvJLNWeBouhonP6-gzGzoHsz',// your appId
      appKey: '050ScrJoJUW37QqwVwzSmKoX', // your appKey
    },
    "nav": [
      {
        "text": "随意一点的主页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "莫名其妙的时间轴",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "很厉害的文章",
        "icon": "reco-document",
        "items": [
          {
            "text": "七杂八杂",
            "link": "/docs/jottings/mobile"
          },
          {
            "text": "Vue3.0",
            "link": "/docs/vue/ref"
          },
          {
            "text": "Nuxt",
            "link": "/docs/nuxt/introduction"
          },
          {
            "text": "吃吃吃",
            "link": "/docs/delicacys/无油捞汁粉丝"
          }
        ]
      },
      {
        "text": "联系我吧",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/JabinPeng",
            "icon": "reco-github"
          }
        ]
      }
    ],
    "sidebar": {
      "/docs/jottings/": [
        "mobile",
        "Git",
        "HarmonyOS",
        "DOM",
        "BOM",
        "particles",
        // "genealogy",
        "carousel",
        "whirligig",
        "filter",
        "scrollTemp",
        "reset",
        "Nginx",
        "accordion",
        "loading",
        "shadow",
        "flexbox"
      ],
      "/docs/Vue/": [
        {
          "title": "Vue3.0",
          "collapsable": false,
          "children": [
              'ref',
              'asyncComponent',
              'attribute',
              'directive',
              'v-is',
              'Data',
              'event',
              'filters',
              'template',
              'funComponent',
              'API',
              'renderFun',
              'slot',
              'animationClass',
              'v-model',
              'v-if&v-for',
              'v-bind'
          ]
        }
      ],
      "/docs/Nuxt/": [
        {
          "title": "Nuxt",
          "collapsable": false,
          "children": [
              'introduction',
              'asyncData',
              'context'
          ]
        }
      ]
    },
    "type": "blog",
    "blogConfig": {
      "tag": {
        "location": 3,
        "text": "无关紧要的小标签"
      }
    },
    "friendLink": [
      // {
      //   "title": "饭团也有春天",
      //   "desc": "没有梦想，也能远方",
      //   "email": "690996726@qq.com",
      //   "link": "https://www.zpzpup.com/blog"
      // },
      {
        "title": "Lucifer",
        "desc": "Everything can be expected in the future.",
        "email": "2050180797@qq.com",
        "logo": "https://nightliuguoxing-github-io.vercel.app/img/avatar.jpg",
        "link": "https://love.liuguoxing.top"
      },
      {
        "title": "午后南杂",
        "desc": "一款简洁而优雅的 vuepress 博客 & 文档 主题。",
        "email": "无",
        "link": "https://vuepress-theme-reco.recoluan.com/"
      }
    ],
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "Jabin",
    "authorAvatar": "https://www.zpzpup.com/assets/image/avatar.png",
    "record": "鄂ICP备18004957号-2",
    "startYear": "2018"
  },
  "configureWebpack": {
    "resolve": {
      "alias": {
        '@assets': '/assets'
      }
    }
  },
  "markdown": {
    "lineNumbers": true
  },
  "plugins": [
    ["sakura", {
      num: 30,  // 默认数量
      show: true,
      zIndex: 2,
      img: {
        replace: false,  // false 默认图 true 换图 需要填写httpUrl地址
        httpUrl: 'http://www.zpzpup.com/assets/image/sakura.png'     // 绝对路径
      }
    }],
    ["ribbon-animation", {
      size: 90,   // 默认数据
      opacity: 0.3,  //  透明度
      zIndex: 1,   //  层级
      opt: {
        // 色带HSL饱和度
        colorSaturation: "80%",
        // 色带HSL亮度量
        colorBrightness: "60%",
        // 带状颜色不透明度
        colorAlpha: 0.65,
        // 在HSL颜色空间中循环显示颜色的速度有多快
        colorCycleSpeed: 6,
        // 从哪一侧开始Y轴 (top|min, middle|center, bottom|max, random)
        verticalPosition: "center",
        // 到达屏幕另一侧的速度有多快
        horizontalSpeed: 200,
        // 在任何给定时间，屏幕上会保留多少条带
        ribbonCount: 2,
        // 添加笔划以及色带填充颜色
        strokeSize: 0,
        // 通过页面滚动上的因子垂直移动色带
        parallaxAmount: -0.5,
        // 随着时间的推移，为每个功能区添加动画效果
        animateSections: true
      },
      ribbonShow: false, //  点击彩带  true显示  false为不显示
      ribbonAnimationShow: true  // 滑动彩带
    }],
    ['go-top'],
    [
      "dynamic-title",
      {
        showIcon: "https://www.zpzpup.com/assets/image/favicon.ico",
        showText: "欢迎回来 O(∩_∩)O~",
        hideIcon: "https://www.zpzpup.com/assets/image/favicon.ico",
        hideText: "失联中。。。快回来~",
        recoverTime: 2000
      }
    ],
    [
      'vuepress-plugin-helper-live2d', {
        // 是否开启控制台日志打印(default: false)
        log: false,
        live2d: {
          // 是否启用(关闭请设置为false)(default: true)
          enable: true,
          // 模型名称(default: hibiki)
          model: 'koharu',
          display: {
            position: "right", // 显示位置：left/right(default: 'right')
            width: 135, // 模型的长度(default: 135)
            height: 300, // 模型的高度(default: 300)
            hOffset: 65, //  水平偏移(default: 65)
            vOffset: 0, //  垂直偏移(default: 0)
          },
          mobile: {
            show: false // 是否在移动设备上显示(default: false)
          },
          react: {
            opacity: 1 // 模型透明度(default: 0.8)
          }
        }
      }
    ]
  ]
}
