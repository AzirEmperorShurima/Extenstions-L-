const path = require('path');

module.exports = {
    mode: 'development',
    entry: './popup.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    }, devtool: false,
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },
};
