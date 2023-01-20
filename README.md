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

## Развернуть проект локально
- Установить [Git](https://git-scm.com/)
- Установить [Yarn](https://classic.yarnpkg.com/en/docs/install/#windows-stable)
- Клонировать себе этот репозиторий  git clone https://github.com/anurgalieva/invoice-tests.git
- В IDE открыть папку проекта (важно открыть именно папку invoice-tests)
- Введите команду npx create-codeceptjs . для установки зависимостей проекта
- Введите команду npm install codeceptjs-resemblehelper --save для скачивания resemblehelper
- Введите команду npx codeceptjs run для запуска автотестов
