## Автотесты для web-links 
Автоматизировано 13 ручных кейсов (веб-линки Инвойсов и Эстимейтов)

![image](https://user-images.githubusercontent.com/41630350/213654357-897d8073-702d-4c50-aa0b-b9df108ec488.png)

### Стек
- Основной фреймворк: [codeceptJS](https://codecept.io/) 
- Хелпер для взаимодействия с браузером: [Playwright](https://github.com/microsoft/playwright)
- Хелпер для сравнения скриншотов: [ResembleHelper](https://codecept.io/visual/#using-resemble-helper)
- Дополнительный хелпер, который можно установить для **мобильной** автоматизации: [Appium](https://codecept.io/helpers/Appium.html)

### Для ревьюеров
В проекте два файла с тестами (*.test.js). Ссылки, локаторы вынесены в файл testIds.js. В блоке Before функции, которые открывают инвойс/эстимейт в браузере. 
Необходимо проверить: 
> - корректность кода 
> - соответствие ручным проверкам

Для удобства ревью в коде каждого теста есть отсылка к ручному тесту, например, IM-252. Репозиторий с ручными тест-кейсами по [ссылке](https://app.qase.io/project/IM).

## Поддержка
### Развернуть проект локально
- Установить [Git](https://git-scm.com/)
- Установить [Yarn](https://classic.yarnpkg.com/en/docs/install/#windows-stable)
- Клонировать себе этот репозиторий  `git clone https://github.com/anurgalieva/invoice-tests.git`
- В IDE открыть папку проекта (важно открыть именно папку invoice-tests)
- Выполнить команду `npx create-codeceptjs .` для установки зависимостей проекта
- Выполнить команду `npm install codeceptjs-resemblehelper --save` для скачивания resemblehelper
- Выполнить команду `npx codeceptjs run` для запуска автотестов 

### Особенности Playwright 
Конфигурирование фреймворка, доступные методы по [ссылке](https://codecept.io/helpers/Playwright/#playwright)

### Что может сломаться
#### - [x] На разных разрешениях может лагать скриншот тест 
Для обновления base скриншота необходимо прогнать автотест с `prepareBaseImage: true`, затем поменяйте значение на `false`.
#### - [x] Локаторы элементов могут меняться
Замените сломанный локатор в файле `testIds.js`
#### - [x] Ссылка на инвойс/эстимейт может поменяться
Доменная часть указана в файле `codecept.conf.js`.
Ссылку на сам документ можно обновить в файле `testIds.js`


## Масштабирование
- [ ] Подключение отчетов, в том числе [Allure](https://codecept.io/reports/#allure)
- [ ] [Configuring CI](https://codecept.io/continuous-integration/#continuous-integration)
- [ ] Интеграция с Qase.io

