const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/index.js', // Your main entry point
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/, // Handles JS and JSX files
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader', // Transpiles JS using Babel
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    },
                },
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/i, // Handles font files
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[hash].[ext]',
                            outputPath: 'fonts/',
                        },
                    },
                ],
            },
            {
                test: /\.css$/i, // Handles CSS files, including those in node_modules
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.scss$/i, // Handles SCSS files
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(png|jpg|gif|svg)$/i, // Handles image files
                type: 'asset/resource',
            }
        ],
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
};

// "build": "webpack --config webpack.config.js && react-scripts build",
