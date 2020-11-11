const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const sass = require('sass');

module.exports = {
    entry: './src/index.jsx',
    output: {
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: sass
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        modules: [path.resolve(__dirname, 'src/app'), path.resolve(__dirname, 'node_modules')],
        extensions: ['*', '.js', '.jsx']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
};
