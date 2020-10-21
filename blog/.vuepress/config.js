module.exports = {
  "title": "饭团也有春天",
  "description": "",
  "dest": "public",
  "base": "/peng/blog/",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    "nav": [
      {
        "text": "随意一点的主页",
        "link": "/",
        "icon": "",
        "href": "http://lijiaw.com/assets/image/home.svg"
      },
      {
        "text": "莫名其妙的时间轴",
        "link": '/timeline/',
        "icon": "",
        "href": "http://lijiaw.com/assets/image/home.svg"
      },
      {
        "text": "很厉害的文章",
        "icon": "",
        "href": "http://lijiaw.com/assets/image/home.svg",
        "items": [
          {
            "text": "七杂八杂",
            "link": "/docs/theme-reco/"
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
            "icon": "",
            "href": "http://lijiaw.com/assets/image/home.svg"
          }
        ]
      }
    ],
    "sidebar": {
      "/docs/theme-reco/": [
        "",
        "theme",
        "plugin",
        "Nginx"
      ]
    },
    "type": "blog",
    "blogConfig": {
      // "category": {
      //   "location": 2,
      //   "text": "Category"
      // },
      "tag": {
        "location": 3,
        "text": "无关紧要的小标签"
      }
    },
    "friendLink": [
      {
        "title": "饭团也有春天",
        "desc": "前端小学鸡",
        "email": "690996726@qq.com",
        "link": "/peng/blog"
      }
    ],
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "Jabin",
    "authorAvatar": "/avatar.png",
    "record": "社会你鹏哥",
    "startYear": "2017"
  },
  "markdown": {
    "lineNumbers": true
  },
  "plugins": [
    'vuepress-plugin-helper-live2d', {
      // 是否开启控制台日志打印(default: false)
      log: false,
      live2d: {
        // 是否启用(关闭请设置为false)(default: true)
        enable: true,
        // 模型名称(default: hibiki)>>>取值请参考：
        // https://github.com/JoeyBling/hexo-theme-yilia-plus/wiki/live2d%E6%A8%A1%E5%9E%8B%E5%8C%85%E5%B1%95%E7%A4%BA
        model: 'miku',
        display: {
          position: "left", // 显示位置：left/right(default: 'right')
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
  ],
}
