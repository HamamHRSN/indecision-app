// entry -> output
const path = require('path');

// console.log(__dirname);
// console.log(path.join(__dirname, 'public'));


module.exports = {
   
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename:"bundle.js"
    },
    performance: {
        hints: process.env.NODE_ENV === 'production' ? "warning" : false
      },
    mode: 'production',
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        },{
            test: /\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
      },
      devtool: 'cheap-module-eval-source-map',
      devServer: {
            contentBase: path.join(__dirname, 'public')
      }
};