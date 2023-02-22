const $resultDiv = document.querySelector('.result');
const $userInteraction = document.querySelector('.user-interaction');

const clearInputs = () => document.querySelectorAll('.task-input').forEach(input => input.value = '')
const clearAnswerBlock = () => $resultDiv.innerHTML = '';

function writeTaskElements(inputLength, taskText) {
  $userInteraction.innerHTML = '';
  $userInteraction.innerHTML += `<p>${taskText}</p>`;
 
  for (let i = 1; i <= inputLength; i++) {
    $userInteraction.innerHTML += `<input type="text" class="task-input input-${i}"></input>`;
  }

  $userInteraction.innerHTML += '<button class="btn-submit">Go</button>';  
}

const task1 = '1. Вивести на екран поточну дату у форматі - 08 листопада 2022 року.';
const task2 = '2. Вивести на екран кількість годин, які пройшли з початку відліку до поточної дати та часу.';
const task3 = '3. Порахувати кількість днів до дня народження. Користувач вводить в input дату народження, далі натискає на кнопку і отримує кількість днів до дня народження на екрані. (Дата народження в форматі рррр-мм-дд: 1998-08-02)';
const task4 = '4. Перевірити чи являється поточна дата вихідним днем, результат вивести на екран. Вважати вихідними суботу та неділю. (Дата в форматі рррр-мм-дд)';

const months = ['січня', 'лютого', 'березня', 'квітня', 'травня', 'червня', 'липня', 'серпня', 'вересня', 'жовтня', 'листопада', 'грудня']
const $taskInputs = document.querySelectorAll('.task-button');
const $buttonsWrapper = document.querySelector('.buttons-wrapper');

$buttonsWrapper.addEventListener('click', (e) => {
  $taskInputs.forEach(taskButton => {
    if (taskButton === e.target) {
      taskButton.classList.add('active')
    } else (
      taskButton.classList.remove('active')
    )
  })
});

const $buttonTask1 = document.querySelector('#task-1').addEventListener('click', () => {
  clearAnswerBlock();
  writeTaskElements(0, task1);

  document.querySelector('.btn-submit').addEventListener('click', () => {
    let today = new Date();

    let dayOfToday = today.getDate();
    let monthOfToday = months[today.getMonth()];
    let yearOfToday = today.getFullYear();

    $resultDiv.innerHTML = `Сьогодні ${dayOfToday} ${monthOfToday} ${yearOfToday} року.`;

    clearInputs();
  }); 
});

const $buttonTask2 = document.querySelector('#task-2').addEventListener('click', () => {
  clearAnswerBlock();
  writeTaskElements(0, task2);

  document.querySelector('.btn-submit').addEventListener('click', () => {
    const oneSecondInMillisecond = 1 * 1000;
    const oneMinuteInMilliseconds = 60 * oneSecondInMillisecond;
    const oneHourInMilliseconds = 60 * oneMinuteInMilliseconds;

    const today = new Date();

    const currentTimeInMilliseconds = today.getTime();

    const calcMilliseconds = (time) => time % oneSecondInMillisecond;
    const calcSeconds = (time, ms) => ((time - ms)  % oneMinuteInMilliseconds) / oneSecondInMillisecond;
    const calcMinutes = (time, sec, ms) => ((time - sec * oneSecondInMillisecond - ms) % oneHourInMilliseconds) / oneMinuteInMilliseconds;
    const calcHour = (time, min, sec, ms) => ( time - min * oneMinuteInMilliseconds - sec * oneSecondInMillisecond - ms) / oneHourInMilliseconds;

    const milliseconds = calcMilliseconds(currentTimeInMilliseconds);
    const seconds = calcSeconds(currentTimeInMilliseconds, milliseconds);
    const minutes = calcMinutes(currentTimeInMilliseconds, seconds, milliseconds);
    const hours = calcHour(currentTimeInMilliseconds, minutes, seconds, milliseconds);

    $resultDiv.innerHTML = `Від початку відліку до поточної дати та часу минуло ${hours}h, ${minutes}min, ${seconds}sec та ${milliseconds}ms.`;

    clearInputs();
  }); 
});

const $buttonTask3 = document.querySelector('#task-3').addEventListener('click', () => {
  clearAnswerBlock();
  writeTaskElements(1, task3);

  const $input1 = document.querySelector('.input-1');

  document.querySelector('.btn-submit').addEventListener('click', () => {
    const oneDayInMilliseconds = 24 * 60 * 60 * 1000;
    const today = new Date();
    const yearOfToday = today.getFullYear(); //2023

    const date = $input1.value; //'1998-08-02'

    const userDateOfBirth = new Date(Date.parse(date));

    let nextDateOfBirth = new Date(userDateOfBirth.setFullYear(yearOfToday))
    if (nextDateOfBirth < today) nextDateOfBirth = new Date(userDateOfBirth.setFullYear(yearOfToday + 1));

    const diffDays = Math.round((nextDateOfBirth - today) / oneDayInMilliseconds + 1)

    $resultDiv.innerHTML = `До наступного дня народження залищилось ${diffDays}дн.`;

    clearInputs();
  }); 
});

const $buttonTask4 = document.querySelector('#task-4').addEventListener('click', () => {
  clearAnswerBlock();
  writeTaskElements(1, task4);
  const $input1 = document.querySelector('.input-1');

  document.querySelector('.btn-submit').addEventListener('click', () => {
    const userDate = $input1.value; 
    const date = new Date(userDate);
    const dayOfWeek = date.getDay();

    const dayOfDate = date.getDate();
    const monthOfDate = months[date.getMonth()];
    const yearOfDate = date.getFullYear();
  
    let isDayOff = false;
    if (dayOfWeek === 0 || dayOfWeek === 6) isDayOff = true;
    const not = isDayOff ? '' : 'не';

    $resultDiv.innerHTML = `${dayOfDate} ${monthOfDate} ${yearOfDate} року ${not} є вихідним днем.`;

    clearInputs();
  }); 
});