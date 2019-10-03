import express from 'express';
import path from 'path';
import open from 'open';
import chalk from 'chalk';
import webpack from 'webpack';
import webpackConfig from '../webpack.config.babel';
import webpackMiddleware from 'webpack-dev-middleware';

/* eslint-disable no-console */

const PORT = process.env.port || 8080;
const app = express();
const compiler = webpack(webpackConfig);

app.use(webpackMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath,
  logLevel: 'warn'
}));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});


app.listen(PORT, (err) => {
  if (err) {
    console.log('ERROR: ', err);
  } else {
    console.log(chalk.green(`Server listening on port ${PORT}...`));
    open(`http://localhost:${PORT}`);
  }
});
