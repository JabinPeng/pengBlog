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
  }
}
