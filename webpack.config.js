const path = require('path');
module.exports = {
    entry: './src/index.js',
    output:{
        path:path.resolve(__dirname,'./dist'),
        filename: 'main.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/, use: [
                    // [style-loader](/loaders/style-loader)
                    { loader: 'style-loader' },
                    // [css-loader](/loaders/css-loader)
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    },
                    // [sass-loader](/loaders/sass-loader)
                    { loader: 'sass-loader' }
                ]
            },
            { test: /\.less$/, use: 'less-loader' }
        ]
    }
}