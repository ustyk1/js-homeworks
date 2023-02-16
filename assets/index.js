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

const task1 = 'Завдання 1. Напишіть функцію, яка приймає 2 числа і повертає -1, якщо перше менше, ніж друге; 1 - якщо перше більше, ніж друге; 0 - якщо числа рівні.';
const task2 = 'Завдання 2. Напишіть функцію, яка вираховує факторіал переданого їй числа.';
const task3 = 'Завдання 3. Напишіть функцію, яка приймає три окремі цифри і перетворює їх на одне число. Наприклад: цифри 1, 4, 9 перетворяться на число 149';
const task4 = 'Завдання 4. Напишіть функцію, яка приймає довжину та ширину прямокутника і обчислює його площу. Якщо у функцію передали 1 параметр, вона вираховує площу квадрата';
const task5 = 'Завдання 5.  Напишіть функцію, яка перевіряє, чи є передане їй число досконалим. Досконале число – це число, що дорівнює сумі всіх своїх власних дільників (крім самого числа).';
const task6 = 'Завдання 6. Напишіть функцію, яка приймає мінімальне і максимальне значення для діапазону і виводить ті числа з діапазону, які є досконалими. Використовуйте написану раніше функцію, щоб перевірити число на досконалість';
const task7 = 'Завдання 7. Напишіть функцію, яка приймає час (години, хвилини, секунди) і виводить його на екран у форматі «година:хвилини:секунди». Якщо при виклику функції хвилини та/або секунди не були передані, виводити їх як 00.';
const task8 = 'Завдання 8. Напишіть функцію, яка приймає години, хвилини та секунди і повертає цей час у секунди.';
const task9 = 'Завдання 9. Напишіть функцію, яка приймає кількість секунд, переводить їх у години, хвилини та секунди і повертає у вигляді рядка «година:хвилини:секунди».';
const task10 = 'Завдання 10. Напишіть функцію, яка підраховує різницю між датами. Функція приймає 6 параметрів, що описують 2 дати, і повертає результат у вигляді рядка «година:хвилини: секунди». Під час виконання завдання використовуйте функції з попередніх 2 завдань: спочатку обидві дати переведіть у секунди, дізнайтеся різницю в секундах, а потім різницю переведіть назад у «година:хвилини:секунди». *h1, m1, s1, h2, m2, s2';

const oneSecond = 1; //1s
const oneMinuteInSeconds = oneSecond * 60; //60s
const oneHourInSecond = oneMinuteInSeconds * 60; //3600s

const calcSeconds = (userSeconds) => userSeconds % oneMinuteInSeconds;
const calcMinutes = (userSeconds, sec) => ( (userSeconds - sec) % oneHourInSecond ) / oneMinuteInSeconds;
const calcHour = (userSeconds, min, sec) => ( userSeconds - min * oneMinuteInSeconds - sec ) / oneHourInSecond;

function convertNumberToTwoDigitNumber(numbers) {
  let convertedNumbers = [];
  numbers.forEach(num => num < 10 ? convertedNumbers.push('0' + num) : convertedNumbers.push(num));
  return convertedNumbers;
}



//---------------------- Task 10 ---------------------
const buttonTask10 = document.querySelector('#task-10').addEventListener('click', () => {
  clearAnswerBlock();
  writeTaskElements(6, task10);

  const $input1 = document.querySelector('.input-1');
  const $input2 = document.querySelector('.input-2');
  const $input3 = document.querySelector('.input-3');
  const $input4 = document.querySelector('.input-4');
  const $input5 = document.querySelector('.input-5');
  const $input6 = document.querySelector('.input-6');

  document.querySelector('.btn-submit').addEventListener('click', () => {
    let hourOfDate1 = +$input1.value;
    let minutesOfDate1 = +$input2.value;
    let secondsOfDate1 = +$input3.value;
    let hourOfDate2 = +$input4.value;
    let minutesOfDate2 = +$input5.value;
    let secondsOfDate2 = +$input6.value;
    
    if (
      [
        hourOfDate1, 
        minutesOfDate1, 
        secondsOfDate1, 
        hourOfDate2, 
        minutesOfDate2, 
        secondsOfDate2
      ].some((value) => isNaN(value) ? true : !Number.isInteger(value) ? true : false)
    ) { 
      $resultDiv.innerHTML = 'Обчислення неможливе.';
    } else {
      const calcDif = (h1, m1, s1, h2, m2, s2) => {
        const date1InSeconds = h1 * oneHourInSecond + m1 * oneMinuteInSeconds + s1 * oneSecond;

        const date2InSeconds = h2 * oneHourInSecond + m2 * oneMinuteInSeconds + s2 * oneSecond;

        const dateDifInSeconds = date1InSeconds > date2InSeconds ? 
          date1InSeconds - date2InSeconds : date2InSeconds - date1InSeconds;

        let sec = calcSeconds(dateDifInSeconds);
        let min = calcMinutes(dateDifInSeconds, sec);
        let h = calcHour(dateDifInSeconds, min, sec);

        [
          hourOfDate1, 
          minutesOfDate1, 
          secondsOfDate1, 
          hourOfDate2, 
          minutesOfDate2, 
          secondsOfDate2, 
          sec, 
          min, 
          h
        ] = convertNumberToTwoDigitNumber([
          hourOfDate1, 
          minutesOfDate1, 
          secondsOfDate1, 
          hourOfDate2, 
          minutesOfDate2, 
          secondsOfDate2, 
          sec, 
          min, 
          h
        ]);

        return `${h}:${min}:${sec}` 
      }

      const result = calcDif(
        hourOfDate1, 
        minutesOfDate1, 
        secondsOfDate1, 
        hourOfDate2, 
        minutesOfDate2, 
        secondsOfDate2
      );

      $resultDiv.innerHTML = `Час 1: ${hourOfDate1}:${minutesOfDate1}:${secondsOfDate1}, час 2: ${hourOfDate2}:${minutesOfDate2}:${secondsOfDate2}. Різниця у часі становить: ${result}.`
    }
    
    clearInputs();  
  });
});

//---------------------- Task 9 ---------------------

const buttonTask9 = document.querySelector('#task-9').addEventListener('click', () => {
  clearAnswerBlock();
  writeTaskElements(1, task9);

  const $input1 = document.querySelector('.input-1');

  document.querySelector('.btn-submit').addEventListener('click', () => {
    const userSeconds = +$input1.value; //19578s = 5h 26m 18s
    
    if (isNaN(userSeconds)) {
      $resultDiv.innerHTML = 'Обчислення неможливе.';
    } else {
      let sec = calcSeconds(userSeconds);
      let min = calcMinutes(userSeconds, sec);
      let h = calcHour(userSeconds, min, sec);
      
      sec < 10 ? sec = '0' + sec :
      min < 10 ? min = '0' + min : 
      h < 10 ? h = '0' + h : h; 
             
      $resultDiv.innerHTML = `Відповідь: ${h}:${min}:${sec}.`;
    }
    
    clearInputs();  
  });
});

//---------------------- Task 8 ---------------------

const buttonTask8 = document.querySelector('#task-8').addEventListener('click', () => {
  clearAnswerBlock();
  writeTaskElements(3, task8);

  const $input1 = document.querySelector('.input-1');
  const $input2 = document.querySelector('.input-2');
  const $input3 = document.querySelector('.input-3');

  document.querySelector('.btn-submit').addEventListener('click', () => {
    const hours = +$input1.value;
    const minutes = +$input2.value;
    const seconds = +$input3.value;
    
    if (isNaN(hours) || isNaN(minutes) || isNaN(seconds)) {
      $resultDiv.innerHTML = 'Обчислення неможливе.';
    } else {
      const oneHourInSeconds = 1 * 60 * 60;
      const oneMinuteInSeconds = 1 * 60;
      
      const calcSeconds = (hours, minutes, seconds) => hours * oneHourInSeconds + minutes *oneMinuteInSeconds + seconds;

      const result = calcSeconds(hours, minutes, seconds);
         
      $resultDiv.innerHTML = `Відповідь: ${result} секунд.`;
    }
    
    clearInputs();  
  });
});

//---------------------- Task 7 ---------------------

const buttonTask7 = document.querySelector('#task-7').addEventListener('click', () => {
  clearAnswerBlock();
  writeTaskElements(3, task7);

  const $input1 = document.querySelector('.input-1');
  const $input2 = document.querySelector('.input-2');
  const $input3 = document.querySelector('.input-3');

  document.querySelector('.btn-submit').addEventListener('click', () => {
    let hour = +$input1.value;
    let minutes = +$input2.value;
    let seconds = +$input3.value;


    function checkDateParametes(dateParameters) {
      let checkedDateParameters = [];

      dateParameters.forEach(value => value === 0 ? checkedDateParameters.push(value = '00') : checkedDateParameters.push(value));

      return checkedDateParameters;
    }

    const setTime = (hour, minutes, seconds) => {
      return `${hour}:${minutes}:${seconds}`;
    };

    if (
      [
        hour, 
        minutes, 
        seconds
      ].some((value) => isNaN(value) ? true : !Number.isInteger(value) ? true : false)
    ) {
      $resultDiv.innerHTML = 'Обчислення неможливе.';
    } else if (
      hour > 24 && hour < 0 ||
      minutes > 60 && minutes < 0 ||
      seconds > 60 && seconds < 0
    ) {
      $resultDiv.innerHTML = 'Обчислення неможливе.';
    } else { 
      [minutes, seconds] = checkDateParametes([minutes, seconds]);

      if (hour < 10) hour = '0' + hour;
      
      let res = setTime(hour, minutes, seconds)
      $resultDiv.innerHTML = `Відповідь: ${res}.`;
    }
    
    clearInputs();  
  });
});

//---------------------- Task 6 ---------------------

const buttonTask6 = document.querySelector('#task-6').addEventListener('click', () => {
  clearAnswerBlock();
  writeTaskElements(2, task6);

  const $input1 = document.querySelector('.input-1');
  const $input2 = document.querySelector('.input-2');

  document.querySelector('.btn-submit').addEventListener('click', () => {
    const min = +$input1.value;
    const max = +$input2.value;

    if (isNaN(min) || isNaN(max)) {
      $resultDiv.innerHTML = 'Обчислення неможливе.';
    } else {
      let str = '';
    
      for (let i = min; i <= max; i++) {        
        let sumOfDividers = 0;
        
        for (let j = 1; j < i; j++) {
          if (i % j === 0) sumOfDividers += j;
        }

        if (sumOfDividers === i) str = str.concat(' , ', i).slice(1);
      };
    
      $resultDiv.innerHTML = `Відповідь: ${str}.`;
    }
    
    clearInputs();  
  });
});

//---------------------- Task 5 ---------------------

const buttonTask5 = document.querySelector('#task-5').addEventListener('click', () => {
  clearAnswerBlock();
  writeTaskElements(1, task5);

  const $input1 = document.querySelector('.input-1');

  document.querySelector('.btn-submit').addEventListener('click', () => {
    const number = +$input1.value;

    if (isNaN(number)) {
      $resultDiv.innerHTML = 'Обчислення неможливе.';
    } else {
      let sumOfDividers = 0;

      for (let i = 1; i < number; i++) {
        if (number % i === 0) sumOfDividers += i;
      };
    
      sumOfDividers === number ? $resultDiv.innerHTML = `Відповідь: число ${number} є досконалим.` : 
        $resultDiv.innerHTML = `Відповідь: число ${number} не є досконалим.`;
    }
    
    clearInputs();  
  });
});

//---------------------- Task 4 ---------------------

const buttonTask4 = document.querySelector('#task-4').addEventListener('click', () => {
  clearAnswerBlock();
  writeTaskElements(2, task4);

  const $input1 = document.querySelector('.input-1');
  const $input2 = document.querySelector('.input-2');

  document.querySelector('.btn-submit').addEventListener('click', () => {
    const number1 = +$input1.value;
    const number2 = +$input2.value;

    const calcArea = (num1, num2 = num1) => num1 * num2;

    let result = 0;

    if (isNaN(number1) || isNaN(number2)) {
      $resultDiv.innerHTML = 'Обчислення неможливе.';
    } else if (!number1){
      result = calcArea(number2);
      $resultDiv.innerHTML = `Відповідь: площа квадрата становить ${result} у.о.кв.`;  
    } else if (!number2) {
      result = calcArea(number1);
      $resultDiv.innerHTML = `Відповідь: площа квадрата становить ${result} у.о.кв.`;  
    } else {
      result = calcArea(number1, number2);
      $resultDiv.innerHTML = `Відповідь: площа прямокутника становить ${result} у.о.кв.`;  
    }
    
    clearInputs();
  });
});

//---------------------- Task 3 ---------------------

const buttonTask3 = document.querySelector('#task-3').addEventListener('click', () => {
  clearAnswerBlock();
  writeTaskElements(3, task3);

  const $input1 = document.querySelector('.input-1');
  const $input2 = document.querySelector('.input-2');
  const $input3 = document.querySelector('.input-3');

  document.querySelector('.btn-submit').addEventListener('click', () => {
    const number1 = +$input1.value;
    const number2 = +$input2.value;
    const number3 = +$input3.value;

    if (isNaN(number1) || isNaN(number2) || isNaN(number3)) {
      $resultDiv.innerHTML = 'Обчислення неможливе.';
    } else {
      const createNumberFromDigits = (num1, num2, num3) => ('').concat(num1, num2, num3);
    
      const result = createNumberFromDigits(number1, number2, number3);

      $resultDiv.innerHTML = `Відповідь: ${result}.`;  
    }
    
    clearInputs();
  });
});

//---------------------- Task 2 ---------------------

const buttonTask2 = document.querySelector('#task-2').addEventListener('click', () => {
  clearAnswerBlock();
  writeTaskElements(1, task2);

  const $input1 = document.querySelector('.input-1');
 
  document.querySelector('.btn-submit').addEventListener('click', () => {
    const number1 = +$input1.value;

    if (isNaN(number1) || number1 <= 0 || !Number.isInteger(number1)) {
      $resultDiv.innerHTML = 'Обчислення неможливе.';
    } else {
      const calcFactorial = (factorial) => { 
        let result = 1;

        for (let i = 1; i <= factorial; i++) result = result * i;

        return result;
      }

      const factorial = calcFactorial(number1);

      $resultDiv.innerHTML = `Факторіал числа ${number1} становить ${factorial}.`;  
    }
    
    clearInputs();
  });
});

//---------------------- Task 1 ---------------------

const buttonTask1 = document.querySelector('#task-1').addEventListener('click', () => {
  clearAnswerBlock();
  writeTaskElements(2, task1);

  const $input1 = document.querySelector('.input-1');
  const $input2 = document.querySelector('.input-2');
 
  document.querySelector('.btn-submit').addEventListener('click', () => {
    const number1 = +$input1.value;
    const number2 = +$input2.value;

    if (isNaN(number1)) {
      $resultDiv.innerHTML = 'Обчислення неможливе.';
    } else {
      const compareNumbers = (num1, num2) => num1 < num2 ? -1 : num1 > num2 ? 1 : 0;

      let result = compareNumbers(number1, number2);

      $resultDiv.innerHTML = `Введені числа ${number1} і ${number2}.Відповідь: ${result}.`;  
    }
    
    clearInputs();
  });
});