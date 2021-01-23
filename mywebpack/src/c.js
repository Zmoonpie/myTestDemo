// 定义一个立即执行函数,传入生成的依赖关系图
; (function (graph) {
    // 重写require函数
    function require(moduleId) {
        ; (function (code) {
            console.log(code) // "use strict";\n\nvar _hello = require("./hello.js");\n\ndocument.write((0, _hello.say)("webpack"));
            eval(code) // Uncaught TypeError: Cannot read property 'code' of undefined
        })(graph[moduleId].code)
    }
    // 从入口文件开始执行
    require('./src/index.js')
})({
    './src/index.js': {
        dependecies: { './hello.js': './src/hello.js' },
        code: '"use strict";\n\nvar _hello = require("./hello.js");\n\ndocument.write((0, _hello.say)("webpack"));'
    },
    './src/hello.js': {
        dependecies: {},
        code:
            '"use strict";\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports.say = say;\n\nfunction say(name) {\n  return "hello ".concat(name);\n}'
    }
})