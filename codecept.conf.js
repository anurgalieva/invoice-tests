const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './tests/**/*.test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://tofu.com',
      show: true,
      browser: 'chromium'
    },
    
      ResembleHelper : {
        require: 'codeceptjs-resemblehelper',
        screenshotFolder : './output/',
        baseFolder: './tests/screenshots/base/',
        diffFolder: './tests/screenshots/diff/'
      }
    
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    }
 },
  include: {
    I: './steps_file.js'
  },
  name: 'invoice'
}