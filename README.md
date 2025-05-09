# calculator_front--test-prj
Фронт приложение "Калькулятор" тестового проекта calculator-v2-experimental (см. репозиторий calculator-documentation)

## Конфигурация
1. В корень проекта вставить файла config.js
2. В файле config.js добавить строку `export const API_URL = "http://123.123.123.123:12345";`, где вместо "http://123.123.123.123:12345" указать нужный адрес.
3. В файле config.js добавить строку `export const AGW_EXISTS = false;`, где false означает, что api-gateway не установлен, запрос пойдет напрямую сервису, а true - api-gateway встроен между front приложением и сервисом, запрос пойдет через AGW.