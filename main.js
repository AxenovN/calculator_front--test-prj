import { AGW_EXISTS, API_URL } from "./config.js";

document.getElementById('getResult').addEventListener('click', function() {
    // Получаем значения из input
    const num1 = document.getElementById('number1').value;
    const num2 = document.getElementById('number2').value;

    // Формируем URL для запроса
    if (AGW_EXISTS) {
        const url = `${API_URL}/calc/sum/num1-${num1}/num2-${num2}`;
    } else {
        // api-gateway отсутствует, значит нужно отправить запрос напрямую сервису
        // сервис принимает запросы такого вида
        const url = `${API_URL}/sum/${num1}/${num2}`;
    }

    // Отправляем GET запрос
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Сеть не отвечает');
            }
            return response.text(); // Предполагаем, что ответ - это текстовое число
        })
        .then(data => {
            // Выводим результат в окно вывода
            document.getElementById('result').innerText = `Результат: ${data}`;
        })
        .catch(error => {
            console.error('Ошибка:', error);
            document.getElementById('result').innerText = 'Произошла ошибка при получении результата.';
        });
});
