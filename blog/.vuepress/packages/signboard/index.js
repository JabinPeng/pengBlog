// 函数式导出:
module.exports = (options, context) => ({
    define() {
        const { title, width, body, footer } = options || {}
      return {
        WIDTH: width || '260px',
        TITLE: title || '公告',
        BODY: body || [],
        FOOTER: footer || []
      };
    },
    name: 'vuepress-plugin-singboard',
    singnboardMixin: path.resolve(__dirname, "singnboardMixin.js")
  });