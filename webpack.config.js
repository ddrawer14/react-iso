const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const CLIENT_DIR = path.resolve(__dirname, 'client');
const SERVER_DIR = path.resolve(__dirname, 'server/generated');
const DIST_DIR = path.resolve(__dirname, 'dist');

const loaders = [{
  test: /\.jsx?$/,
  include: CLIENT_DIR,
  loader: 'babel',
  query: {
    presets:['es2015','react']
  }
},
{
 test: /\.less$/,
 loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader')
}];

const aliases = {
  components: path.resolve(CLIENT_DIR, 'components'),
  //reducers: path.resolve(CLIENT_DIR, 'reducers'),
  actions: path.resolve(CLIENT_DIR, 'actions')
};

module.exports = [{
  name: 'client',
  target: 'web',
  context: CLIENT_DIR,
  entry: './index.js',
  output: {
    path: DIST_DIR,
    filename: 'bundle.js'
  },
  module: {
    loaders: loaders
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: aliases
  },
  plugins: [
      new ExtractTextPlugin('bundle.css', {allChunks: true})
    ]
},
{
  name: 'server',
  target: 'node',
  context: CLIENT_DIR,
  entry: {
    app: 'components/App.jsx'
  },
  output: {
    path: SERVER_DIR,
    filename: '[name].js',
    libraryTarget: 'commonjs2'
  },
  externals: /^[a-z\-0-9]+$/,
  module: {
    loaders: loaders
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: aliases
  },
  plugins: [
    new ExtractTextPlugin('[name].css')
  ]
}];
