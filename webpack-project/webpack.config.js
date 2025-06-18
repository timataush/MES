const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './app/main.js',

    output: {
        filename: 'js/main.js',
        path: path.resolve(__dirname, 'public'),
        publicPath: '/',
        clean: true,
    },

    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
            publicPath: '/',
            watch: true
        },
        hot: true,
        open: true,
        port: 8080,
        client: {
            overlay: {
                errors: true,
                warnings: false,
            },
        }
    },

    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(png|jpe?g|gif|svg|ico)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/[name][ext]',
                },
            },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './app/index.html',
            filename: 'index.html',
            favicon: './app/assets/favicon.ico',
            inject: 'body'
        })
    ],
};