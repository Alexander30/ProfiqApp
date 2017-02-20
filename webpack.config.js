"use strict";
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
//const ExtJSReactWebpackPlugin = require('@extjs/reactor-webpack-plugin');

module.exports={
    devtool:'eval',
    devServer:{
        contentBase:'./public',
        hot:true},
    entry:[
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        './src/index.js',
        './src/style.css'],
    output:{
        path: __dirname + '/dist',
        filename:'./bundle.js'
    },
    resolve:{
        extensions:['*','.js','.jsx']
    },
    module:{
        loaders:[
            {
                test:/\.css$/,
                loader:ExtractTextPlugin.extract({fallback:'style-loader',use:'css-loader'})
            },
            { test: /\.js$/, loaders: ['react-hot-loader', 'babel-loader'], exclude: /node_modules/ },
            { test: /\.jsx$/, loaders:['react-hot-loader','babel-loader'], exclude: /node_modules/ }

        ]
        /*loaders: [
            {
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader']
            }
        ]*/
    },
    plugins:[
        new ExtractTextPlugin('style.css'),
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        }),
        new webpack.HotModuleReplacementPlugin(),
        /*new ExtJSReactWebpackPlugin({
            sdk:'c:\\Users\\ToolsTeam\\Documents\\Architect\\frameworks\\ext62\\6.2.1.167\\commercial',
            theme:'theme-material',
            packages:['ux']
        })*/

    ]
};