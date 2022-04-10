const items = document.querySelectorAll(".countdown-item > h4");
const countdownElement = document.querySelector(".countdown")
// Назачаем дату отсчёта
let countdownDate = new Date(2022, 11, 31, 23, 59, 59).getTime(); // Используем миллисекунды

function getCountdownTime(){
    // Получим текущее время
    const now = new Date().getTime();
    // Найдём разницу времени
    const distance = countdownDate - now;
    // 1 s is 1000 ms
    // 1 min is 60 s
    // 1 h is 60 min
    // 1 day is 24 h

    // Создаём переменные в миллисекундах
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;

    // Произведём подсчёт для дней, часов, минут и секунд
    let days = Math.floor(distance / oneDay);
    let hours = Math.floor((distance % oneDay) / oneHour);
    let minutes = Math.floor((distance % oneHour) / oneMinute);
    let seconds = Math.floor((distance % oneMinute) / 1000);

    // Создаём массив с переменными
    const values = [days, hours, minutes, seconds]

    // Добавляем значения переменных на страницу
    items.forEach( function(item, index){
        item.textContent = values[index] 
     })

     // Если событие случилось 
     if (distance<0) {
         clearInterval(countdown)
         countdownElement.innerHTML = "<h4 class='expired'> Time's up! </h4>";
     }
}

// Обновление счётчика каждую секунду
let countdown = setInterval(getCountdownTime, 1000); 

// Инициализация текущего времени
getCountdownTime();
