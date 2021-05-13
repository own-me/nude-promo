const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './App.tsx',
    devtool: "eval-source-map",
    devServer: {
        contentBase: path.join(__dirname, 'dev'),
        compress: true,
        port: 9000,
        open: true
    },
    output: {
        path: path.join(__dirname, 'dev'),
        filename: 'own-me-promo.bundle.dev.js',
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env",
                            "@babel/preset-react",
                            "@babel/preset-typescript",
                        ],
                    },
                },
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            }
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js", ".css"],
    },
    plugins: [new HtmlWebpackPlugin({
        inject: true,
        template: './index.html',
    })]
};