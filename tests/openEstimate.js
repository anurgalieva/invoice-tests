const testIds = require('./testIds')

const { I } = inject()
module.exports = {
   openEstimate() {
    I.amOnPage(testIds.urlEstimate);
    
  }}