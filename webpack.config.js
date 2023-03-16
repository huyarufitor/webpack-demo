const path = require('path');
const HtmlwebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const myPlugin = require('./src/plugins/myplugin.js');
const webpack = require('webpack');
// const webpackPartial = require('webpack-partial');

// var OpenBrowserPlugin = require('open-browser-webpack-plugin');
module.exports = {
    // entry: {
    //     index: "./src/index.js",
    //     test: "./src/test.js",
    // }, // 打包入口
    entry: './src/index.js',
    output: {
        // filename:'bundle.js',
        path: path.resolve(__dirname, 'dist'), // 打包出口
        filename: 'bundle.js', // 打包完的静态资源文件名[name]
        // publicPath: "dist/",
        // auxiliaryComment: ''
    },
    resolve: {
        extensions: ['.vue', '.js'], //允许用户在引入模块时不带扩展名即文件后缀。根据文档，如果有多个文件有相同的名字，但后缀名不同，webpack 会解析列在数组首位的后缀的文件 并跳过其余的后缀。
    },
    mode: 'development', // 环境模式
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/, // 排除文件
                use: ['babel-loader'],
            },
            {
                test: /\.(sa|c)ss$/, //同时匹配sass和css
                use: [
                    //顺序先使用css-loader，再使用style-loader
                    'style-loader',
                    'css-loader',
                    //   'sass-loader'//新增sass-loader
                ],
            },
            {
                test: /\.vue$/,
                //'./src/plugins/deleteConlog.js'
                use: ['vue-loader', './src/plugins/deleteConlog.js'],
            },
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            // 小于 10kB(10240字节）的内联文件
                            limit: 5 * 1024,
                        },
                    },
                ],
            },
            // {
            //     test: /\.(jpe?g|png|gif|svg)$/i,
            //     use: [
            //         {
            //             loader: 'file-loader',
            //             options: {
            //                 name: '[name].[ext]',
            //                 outputPath: 'images/'
            //             }
            //         },
            //         {
            //             loader: 'image-webpack-loader',
            //             options: {
            //                 mozjpeg: {
            //                     progressive: true,
            //                     quality: 65
            //                 },
            //                 optipng: {
            //                     enabled: false,
            //                 },
            //                 pngquant: {
            //                     quality: '65-90',
            //                     speed: 4
            //                 },
            //                 gifsicle: {
            //                     interlaced: false,
            //                 },
            //                 webp: {
            //                     quality: 75
            //                 }
            //             }
            //         }
            //     ],
            //     exclude: /node_modules/
            // }
        ],
    },
    plugins: [
        new HtmlwebpackPlugin({
            title: 'webpack-demos',
            filename: 'index.html',
            template: path.resolve(__dirname, './src/index.html'), //引入路径
        }), //自动创建并更新HTML文件
        new VueLoaderPlugin(),
        new webpack.HotModuleReplacementPlugin(), //
        new CleanWebpackPlugin(), //清理之前打包文件中遗留的dist旧代码
        new myPlugin('plugin 生效'),
        // webpackPartial(
        //     {
        //         // 指定哪些文件夹下的文件不会被打包
        //         excludePaths: [
        //             './src/assets/images/not-in-use/'
        //         ],
        //         // 指定哪些文件夹下的文件会被打包
        //         includePaths: [
        //             './src/assets/images/in-use/'
        //         ]
        //     }
        // )
    ],
    devtool: 'eval-cheap-module-source-map',
    devServer: {
        // quiet: true,
        // open: true, //自动打开浏览器,也可以直接在CLI里设置
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
        hot: true, // 启动热更新
        // contentBase: join(__dirname, "../dist/assets"),
    },
    optimization: {
        usedExports: true, //模块只导出被使用的成员
        minimize: true, //压缩输出结果，自动注入UglifyJSPlugin
        concatenateModules: true, // 尽可能合并每一个模块到一个函数中
        sideEffects: true,
    },
};
