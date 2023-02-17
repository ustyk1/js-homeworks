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

  $userInteraction.innerHTML += '<button class="btn-submit">Submit</button>';  
}

const task1 = '1. Створити та викликати функцію, яка буде приймати текст та перевіряти його на спам. Якщо спам є, повертати true. В іншому випадку false. Функція має бути нечутливою до регістру. Спам слова - VIP, SALE.';

const task2 = '2. Створити та викликати функцію, яка буде приймати рядок і кількість символів(n). Якщо довжина рядка більше за n символів, виводити скорочений рядок у консоль та вставляти три крапки. Якщо довжина рядка менше за n символів, виводити рядок без змін.';

const checkSpam = function(str) {
  let lowerStr = str.toUpperCase();

  return lowerStr.includes('VIP') || lowerStr.includes('SALE');
}

const stringLengthCheck = (str, length) => str.length > length;

const $buttonTask1 = document.querySelector('#task-1').addEventListener('click', () => {
  clearAnswerBlock();
  writeTaskElements(1, task1);

  const $input1 = document.querySelector('.input-1');

  document.querySelector('.btn-submit').addEventListener('click', () => {
    const userString = $input1.value;

    if (userString === '') {
      $resultDiv.innerHTML = `Ви не ввели рядок для перевірки.`;
    } else {
      const hasSpam = checkSpam(userString);
      $resultDiv.innerHTML = `Чи має рядок спам: ${hasSpam}.`;
    }

    clearInputs();
  }); 
});

const $buttonTask2 = document.querySelector('#task-2').addEventListener('click', () => {
  clearAnswerBlock();
  writeTaskElements(2, task2);

  const $input1 = document.querySelector('.input-1');
  const $input2 = document.querySelector('.input-2');

  document.querySelector('.btn-submit').addEventListener('click', () => {
    const userString = $input1.value;
    const stringLength = $input2.value;

    const isTooLongString = stringLengthCheck(userString, +stringLength);

    if (userString === '' || isNaN(+stringLength) || stringLength === '') {
      $resultDiv.innerHTML = `Невірно введені дані.`;
    } else if (isTooLongString) {
      let shortenedString = ('').concat(userString.slice(0, +stringLength), '...');
      $resultDiv.innerHTML = `Результат: ${shortenedString}.`;
    } else {
      $resultDiv.innerHTML = `Рядок: \'\'${userString}\'\' без змін та задовільняє кількість символів: ${stringLength} `;
    }

    clearInputs();
  }); 
});
