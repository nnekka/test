const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    // Входной файл
    entry: [
        './src/js/index.js'
    ],

    // Выходной файл
    output: {
        filename: './js/bundle.js'
    },

    // Source maps для удобства отладки
    devtool: "source-map",

    module: {
        rules: [
            // Транспилируем js с babel
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src/js'),
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    }
                }
            },

            { // css
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            // {
            //     loader: 'postcss-loader',
            //     options: {
            //         plugins: [
            //             autoprefixer({
            //                 browsers: ['ie >= 8', 'last 4 version']
            //             })
            //         ],
            //         sourceMap: true
            //     }
            // },

            // Компилируем SCSS в CSS
            { // LESS
                test: /\.less$/,
                loader: ['style-loader', 'css-loader', 'less-loader'],
            },
            { // SASS
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader',],
            },

            // Подключаем шрифты из css
            {
                test: /\.(eot|ttf|woff|woff2)$/,
                use: [{
                    loader: 'file-loader?name=./fonts/[name].[ext]'
                },]
            },

            // Подключаем HTML
            {
                test: /\.html$/,
                loader: 'html-loader'
            },

            // Подключаем картинки из css
            {
                test: /\.(svg|png|jpg|jpeg|webp)$/,
                use: [{
                    loader: 'file-loader?name=./static/[name].[ext]'
                },]
            },
        ],
    },
    plugins: [
        // Подключаем файл html, стили и скрипты встроятся автоматически
        /* new HtmlWebpackPlugin({
          title: 'Webpack 4 Starter',
          template: './src/index.html',
          inject: true,
          minify: {
            removeComments: true,
            collapseWhitespace: false,
          }
        }), */

        new HtmlWebpackPlugin({
            title: '0',
            template: './src/index.html',
            filename: 'index.html',
            inject: 'body',
        }),
        new HtmlWebpackPlugin({
            title: '1',
            template: './src/index1.html',
            filename: 'index1.html',
            inject: 'body',
        }),
        new HtmlWebpackPlugin({
            title: '2',
            template: './src/index2.html',
            filename: 'index2.html',
            inject: 'body',
        }),

        // Кладем стили в отдельный файлик
        new MiniCssExtractPlugin({
            filename: 'style.css',
        }),

        new CleanWebpackPlugin(),

        // Копируем картинки
        new CopyWebpackPlugin([{
            from: './src/img',
            to: 'img',
        },])
    ],
};
