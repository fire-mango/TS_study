// 引入包
const path = require('path');
// 引入html插件
const HTMLWebpackPlugin = require('html-webpack-plugin')
// 引入clean插件
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

// webpack中的所有配置信息都应该写在module.exports中
module.exports = {
    mode: 'production',
    // 指定入口文件
    entry: "./src/index.ts",
    // 指定打包文件所在的目录
    output: {
        // 指定打包文件的目录
        path: path.resolve(__dirname, 'dist'),
        // 打包后的文件名字
        filename: 'bundle.js',
        // 配置webpack不使用箭头函数
        environment: {
            arrowFunction: false
        }
    },
    // 指定webpack打包时要使用的模块
    module: {
        // 指定要加载的规则
        rules: [
            {
                // test 指定规则生效的文件
                test: /\.ts$/,
                // 要使用的loader
                use: [
                    // 配置babel
                    {
                        // 指定加载器
                        loader: 'babel-loader',
                        // 设置babel
                        options: {
                            // 设置预定义的环境
                            presets: [
                                [
                                    // 指定环境插件
                                    "@babel/preset-env",
                                    // 配置信息
                                    {
                                        // 要兼容的浏览器
                                        targets: {
                                            "chrome": "88",
                                            "ie": "11"
                                        },
                                        // 指定的corejs版本
                                        "corejs": "3",
                                        // 使用corejs的方式 usage:按需加载
                                        "useBuiltIns": "usage"
                                    }
                                ]
                            ]
                        }
                    },
                    'ts-loader'
                ],
                // 要排除的文件
                exclude: /node_modules/
            },
        ]
    },

    // 配置webpack插件
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            // title:'mango',  //自定义姓名
            template: "./src/index.html",
        }),
    ],

    // 用来设置引用模块
    resolve: {
        extensions: ['.ts', '.js']
    }
};