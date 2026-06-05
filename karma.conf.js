const path = require('path');

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-junit-reporter'),
      require('karma-webpack'),
    ],
    files: [
      { pattern: 'src/**/*.spec.ts', watched: false },
    ],
    preprocessors: {
      'src/**/*.spec.ts': ['webpack'],
    },
    webpack: {
      mode: 'development',
      devtool: 'inline-source-map',
      resolve: {
        extensions: ['.ts', '.js'],
      },
      module: {
        rules: [
          {
            test: /\.ts$/,
            use: [
              {
                loader: 'ts-loader',
                options: {
                  configFile: path.resolve(__dirname, 'tsconfig.spec.json'),
                  transpileOnly: true,
                },
              },
            ],
            exclude: /node_modules/,
          },
        ],
      },
    },
    reporters: ['progress', 'junit'],
    junitReporter: {
      outputDir: 'test-results',
      outputFile: 'test-results.xml',
      suite: 'my-drawer-ng',
      useBrowserName: false,
      nameFormatter: undefined,
      classNameFormatter: undefined,
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['ChromeHeadless'],
    singleRun: true,
    restartOnFileChange: false,
  });
};
