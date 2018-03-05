var webpack = require('webpack');

var env = process.env.NODE_ENV

module.exports = {  
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(env)
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        screw_ie8: true,
        warnings: false
      }
    })
  ],
  resolve: {
    extensions: ['', '.js'],
    alias: { 'react/lib/ReactMount': 'react-dom/lib/ReactMount' }
  },
  module: {
    loaders: [
      { 
        test: /\.js$/, 
        loader: 'babel', 
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loaders: [
          'style', 'css',
        ],
     }
    ]
  },
  node: {
    console: true,
    net: 'empty',
    dns: 'empty'
  }
}
