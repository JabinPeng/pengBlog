/**
 * 完整配置请参考：https://l2dwidget.js.org/docs/class/src/index.js~L2Dwidget.html#instance-method-init
 */
var Live2D = {
  init: function (modelName) {
    var pluginModelPath = "assets/", // 模型的文件路径，无需更改
      pluginRootPath = "./live2d_models/"; // 插件的路径，无需更改
    //特定的模型json文件名称
    var modelPathJson = {
      "epsilon2_1": "Epsilon2.1",
      "gf": "Gantzert_Felixander",
      "haru/01": "haru01",
      "haru/02": "haru02",
      "nietzsche": "nietzche"
    }

    var modelJsonPath = "";
    if (modelPathJson[modelName]) {
      modelJsonPath = pluginRootPath + modelName + "/" + pluginModelPath + modelPathJson[modelName] +
        ".model.json";
    } else {
      modelJsonPath = pluginRootPath + modelName + "/" + pluginModelPath + modelName + ".model.json";
    }
    L2Dwidget.init({
      model: {
        jsonPath: modelJsonPath
      },
      display: {
        position: Math.floor(Math.random() * 10 + 1) > 5 ? "right" : "left" //取值(left | right)
      },
      mobile: {
        show: true,
        scale: 0.5
      },
      react: {
        opacity: 0.8
      }
    })
  }
}
