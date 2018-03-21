##兼容ie8
>0. 初始化
```
npm install --save webpack npm install --save-dev webpack-cli
```
>1. 安装
```
npm install --save-dev babel-core babel-loader babel-plugin-transform-es2015-modules-simple-commonjs babel-plugin-transform-es3-member-expression-literals babel-plugin-transform-es3-property-literals babel-preset-es2015 es3ify-webpack-plugin
```
>2. 安装
```
npm install --save babel-polyfill es3ify-loader es5-shim
```
>3. 创建.babelrc
```
{
    "presets": [["es2015",{"loose":true}]],
    "plugins": [
        "transform-es3-property-literals",
        "transform-es3-member-expression-literals",
        "transform-es2015-modules-simple-commonjs"
    ]
}
```
>4. 在html头引入
```
<!--[if lt IE 9]>
    <script src="js/es5-shim.js"></script>
<![endif]-->
```
>5. 
```var es3ifyPlugin = require('es3ify-webpack-plugin');
module.exports = {
    mode: 'development',
    entry: {
        index: ['babel-polyfill','./src/js/index.js'],
        module: './src/js/module.js'
    },
    output: {
        //chunhash 长缓存优化 这样在chunk没有改变的时候 缓存依然有效
        filename: 'js/[name].[chunkhash].js',
        chunkFilename: 'js/[name].[chunkhash].js'
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './src'
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader', //编译后用什么来提取单独的文件
                use: 'css-loader' //用css-loader来编译
            })
        }, {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new ExtractTextPlugin('css/[name].css'),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new es3ifyPlugin()
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                vender: {
                    chunks: 'initial',
                    test: /jquery|loadsh/,
                    name: 'vender',
                }
            }
        }
    }
}
```