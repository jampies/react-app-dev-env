import UglifyJsPlugin from 'uglifyjs-webpack-plugin';
import webpack from 'webpack';

export default {
  mode: 'production',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('prod')
    }),
    new UglifyJsPlugin()
  ]
};
