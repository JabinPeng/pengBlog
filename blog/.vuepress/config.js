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
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ],
    ["script", { src: "/assets/js/jquery-1.11.3.min.js" }],
    ["script", { src: "/assets/js/sakura.js" }],
    ["script", { src: "/assets/js/bodyClick.js" }],
    ["script", {}, `var _hmt = _hmt || [];
    (function() {
      var hm = document.createElement("script");
      hm.src = "https://hm.baidu.com/hm.js?1dd6a922ba031e44241e70062c507bda";
      var s = document.getElementsByTagName("script")[0]; 
      s.parentNode.insertBefore(hm, s);
    })();`]
  ],
  "theme": "reco",
  "themeConfig": {
    "mode": 'dark',
    "valineConfig": {
      appId: 'e6ojaBbYmQvJLNWeBouhonP6-gzGzoHsz',// your appId
      appKey: '050ScrJoJUW37QqwVwzSmKoX', // your appKey
    },
    "nav": [
      {
        "text": "随意一点的主页",
        "link": "/",
        "icon": "",
      },
      {
        "text": "莫名其妙的时间轴",
        "link": '/timeline/',
        "icon": "http://zpzpup.com/assets/image/home.svg",
        "href": "http://zpzpup.com/assets/image/home.svg"
      },
      {
        "text": "很厉害的文章",
        "icon": "",
        "href": "http://zpzpup.com/assets/image/home.svg",
        "items": [
          {
            "text": "七杂八杂",
            "link": "/docs/jottings/HarmonyOS"
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
      "/docs/jottings/": [
        "HarmonyOS",
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
    require("./packages/copy/index"),
    [
      "ribbon",
      {
         size: 90, // 彩带的宽度，默认为 90
         opacity: 0.4, // 彩带的不透明度，默认为 0.3
         zIndex: -1 // 彩带的 z-index 属性，默认值为 -1
      }
    ],
    [
      'meting', {
        meting: {
          server: 'netease',
          type: 'playlist',
          auto: 'https://music.163.com/#/my/m/music/playlist?id=507859509',
          mid: '507859509'
        },
        // aplayer: {
        //   lrcType: 3, // 显示歌词
        //   // autoplay: true
        // }
      }
    ],
    ['go-top'],
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
