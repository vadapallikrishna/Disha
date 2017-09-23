module.exports = {
  entry: [
    './lib/index.ts',
    './lib/react/index.ts'
  ],
  output: {
    filename: 'dist/index.js',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'ts-loader' }
    ]
  }
}
