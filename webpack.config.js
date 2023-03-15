const path = require("path");
const HtmlwebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require('vue-loader')
// var OpenBrowserPlugin = require('open-browser-webpack-plugin');
module.exports = {
    entry: {
        index: "./src/index.js",
        test: "./src/test.js",
    }, // 打包入口
    output: {
        // filename:'bundle.js',
        path: path.resolve(__dirname, "dist"), // 打包出口
        filename: "[name].js", // 打包完的静态资源文件名
        // publicPath: "dist/",
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
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
                //顺序先使用css-loader，再使用style-loader
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
