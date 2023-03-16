const path = require("path");
const HtmlwebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require('vue-loader')
// var OpenBrowserPlugin = require('open-browser-webpack-plugin');
module.exports = {
    // entry: {
    //     index: "./src/index.js",
    //     test: "./src/test.js",
    // }, // 打包入口
    entry:'./src/index.js',
    output: {
        // filename:'bundle.js',
        path: path.resolve(__dirname, "dist"), // 打包出口
        filename: "bundle.js", // 打包完的静态资源文件名[name]
        // publicPath: "dist/",
    },
    resolve:{
        extensions:['.vue','.js'] //允许用户在引入模块时不带扩展名即文件后缀。根据文档，如果有多个文件有相同的名字，但后缀名不同，webpack 会解析列在数组首位的后缀的文件 并跳过其余的后缀。
      },
    mode: "development", // 环境模式
    module: {
        rules: [
            {
                test: /\.js$/,
                // exclude: /(node_modules|bower_components)/, // 排除文件
                use: [
                    "babel-loader",
                ],
            },
            {
                test:/\.(sa|c)ss$/, //同时匹配sass和css
                use:[
                //顺序先使用css-loader，再使用style-loader
                  'style-loader',
                  'css-loader',
                //   'sass-loader'//新增sass-loader
                ]
            },
            {
                test: /\.vue$/,
                use: ["vue-loader"],
            },
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            // 小于 10kB(10240字节）的内联文件
                            limit: 5 * 1024,
                        },
                    },
                ],
            },

        ],
    },
    plugins: [
        new HtmlwebpackPlugin({
            title: "webpack-demos",
            filename: "index.html",
            template:path.resolve(__dirname,'./src/index.html')//引入路径
        }),
        new VueLoaderPlugin()
    ],
    devtool: "source-map", //防止干扰源文件,
    devServer: {
        // quiet: true,
        // open: true,
        // historyApiFallback: true,
        proxy: {
            '/api/': {
                target: 'https://api.zego.im/', // beta环境
                changeOrigin: true, // 如果接口跨域，需要进行这个参数配置为true
                pathRewrite: {
                    '^/api': '', // rewrite path
                },
            },
        },
        hot: true,
        // contentBase: join(__dirname, "../dist/assets"),
    },
    optimization: {
        usedExports: true, //模块只导出被使用的成员
        minimize: true, //压缩输出结果
        concatenateModules: true,// 尽可能合并每一个模块到一个函数中 
        sideEffects: true,
    }
};
