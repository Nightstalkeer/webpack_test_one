
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const HtmlWebpackPlugin = require('html-webpack-plugin')

const { dirname } = require('path')
const path = require('path')

module.exports = {
    entry: './src/scripts/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    mode: 'development',

    devServer: {
        port: 2222,
        open: true,
        compress: true 
    },

    module: {
        rules: [
            {
                // Babel Loader
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-proposal-class-properties']
                    }
                }
            },
            {
            	// CSS Loader
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader',
                    'sass-loader'
                ]
            },
            {
            	// HTML Loader
                test: /\.html$/,
                use: 'html-loader'
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}

// Consider Index.js as Entry file
