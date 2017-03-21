var webpack = require('webpack');

// change to development or production
process.env.NODE_ENV = 'production';

module.exports = {
    entry: [
        'script!jquery/dist/jquery.min.js',
        'script!foundation-sites/dist/foundation.min.js',
        './app/app.js'
    ],
    externals: {
        jquery: 'jQuery'
    },
    plugins: [
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery'
        }),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            },
            sourceMap: true
        }),
        new webpack.DefinePlugin({
          'process.env':{
            'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
          }
        })
    ],
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                },
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/
            },
            { test: /\.css$/, loader: "style-loader!css-loader" },
            { test: /\.scss$/, loader: "style-loader!css-loader!sass-loader" }
        ]
    },
    devtool: process.env.NODE_ENV === 'production' ? false : 'cheap-module-eval-source-map'
};