var es3ifyPlugin = require('es3ify-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development', 
    entry: {
        index: ['babel-polyfill','./src/js/index.js']
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
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    },
    plugins: [
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