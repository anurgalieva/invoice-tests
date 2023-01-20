const testIds = require('./testIds')
const { openEstimate } = require('./openEstimate')

Feature('Estimate web link')

Before(() => {
    openEstimate()
  })

Scenario('Открытие веб-линка в браузере', ({ I }) => {
  // IM-252
  I.see('Estimate from')
})

Scenario('Отображение Issued on', ({ I }) => {
    // IM-177
    I.see('Issued on Jan 20, 2023', testIds.dueDate)
  })

Scenario('Nontaxable позиции', ({ I }) => {
    // IM-178
    I.see('(nontaxable)')
  })

Scenario('Discount для одной позиции', ({ I }) => {
    // IM-179
    I.see('Discount 6%')
    I.see('Discount')
  })

Scenario('Discount общий', ({ I }) => {
    // IM-180
    I.see('Discount 13%')
  })
  
Scenario('Кнопка View Estimate', ({ I }) => {
    // IM-181
    I.see('Estimate from')
    I.click('View Estimate')
    I.switchToNextTab()
    I.waitUrlEquals(testIds.urlEstimatePdf,2)
    I.saveScreenshot("OpenedPdfEstimate.png")
    I.seeVisualDiff("OpenedPdfEstimate.png", {tolerance: 2, prepareBaseImage: false})
  })