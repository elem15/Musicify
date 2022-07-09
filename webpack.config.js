"use strict";
const path = require('path');
module.exports = {
    mode: 'production',
    devtool: 'inline-source-map',
    entry: './src/index.ts',
    target: 'node',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            { test: /\.ts?$/, loader: 'ts-loader' },
            {
                test: /\.node$/,
                loader: 'node-loader'
            },
        ]
    },
};
