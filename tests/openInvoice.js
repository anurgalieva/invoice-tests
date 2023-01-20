const testIds = require('./testIds')

const { I } = inject()
module.exports = {
   openInvoice() {
    I.amOnPage(testIds.urlInvoice);
    
  }}