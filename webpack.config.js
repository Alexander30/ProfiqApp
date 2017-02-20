"use strict";
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports={
    devtool:'eval',
    devServer:{hot:true},
    entry:['./src/index.js', './src/style.css'],
    output:{
        path: __dirname + '/dist',
        filename:'./bundle.js'
    },
    module:{
        loaders:[
            {
                test:/\.css$/,
                loader:ExtractTextPlugin.extract({fallback:'style-loader',use:'css-loader'})
            },{
                test:/\.jsx$/,
                loader:'babel-loader'
            }
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
        new webpack.HotModuleReplacementPlugin()
    ]
};