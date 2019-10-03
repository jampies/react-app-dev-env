import webpack from 'webpack';

export default {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('dev')
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        noInfo: true
      }
    })
  ]
};
