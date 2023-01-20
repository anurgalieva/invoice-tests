const testIds = require('./testIds')
const { openInvoice } = require('./openInvoice')

Feature('Invoice web link')

Before(() => {
    openInvoice()
  })

Scenario('Открытие веб-линка в браузере', ({ I }) => {
  // IM-250
  I.see('Invoice from')
})

Scenario('Отображение Due date (On Receipt)', ({ I }) => {
    // IM-251
    I.see('Due Upon Receipt', testIds.dueDate)
  })

Scenario('Состояние Partial payment', ({ I }) => {
    // IM-170
    I.see('Received payments')
    I.see('$7.58')
    I.see('Balance Due')
    I.see('$410.21')
  })

Scenario('Nontaxable позиции', ({ I }) => {
    // IM-171
    I.see('(nontaxable)')
  })

Scenario('Discount для одной позиции', ({ I }) => {
    // IM-172
    I.see('Discount 10%')
    I.see('Discount')
  })

Scenario('Discount общий', ({ I }) => {
    // IM-173
    I.see('Discount 8%')
  })

Scenario('Кнопка View Invoice', ({ I }) => {
    // IM-174
    I.see('Invoice from')
    I.click('View Invoice')
    I.switchToNextTab()
    I.waitUrlEquals(testIds.urlInvoicePdf,2)
    I.saveScreenshot("OpenedPDF.png")
    I.seeVisualDiff("OpenedPDF.png", {tolerance: 2, prepareBaseImage: false})
  })
  