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
        "api"
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
        "desc": "Enjoy when you can, and endure when you must.",
        "email": "690996726@qq.com",
        "link": "/"
      },
      {
        "title": "vuepress-theme-reco",
        "desc": "A simple and beautiful vuepress Blog & Doc theme.",
        "avatar": "/",
        "link": "/"
      }
    ],
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "Jabin",
    // "authorAvatar": "",
    "record": "xxxx",
    "startYear": "2017"
  },
  "markdown": {
    "lineNumbers": true
  }
}