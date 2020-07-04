const path = require('path');

module.exports = {
    entry: path.join(__dirname, 'src', 'client', 'index.js'),
    output: {
        path: path.join(__dirname, 'src', 'client', 'build'),
        publicPath: '/',
        filename: '[name].js'
    }, 
    module: {
        rules:[
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /.(jpg|jpeg|png|gif)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]'
                    }
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '*']
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /node_modules/,
                    name: 'vendor',
                    chunks: 'initial',
                    enforce: true
                }
            }
        }
    },
    devServer: {
        contentBase: path.join(__dirname, 'src', 'client', 'build')
    }
};