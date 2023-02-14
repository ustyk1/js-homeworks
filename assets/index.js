const task1 = 'Завдання 1. Створіть функцію, яка повертає випадкове число.\n *Введіть діапазон для випадкового числа';
const task2 = 'Завдання 2. Створіть функцію, яка приймає дві змінні та міняє їх значення місцями.';
const task3 = 'Завдання 3. Створіть функцію, яка приймає число та повертає істину, якщо воно парне.';
const task4 = 'Завдання 4. Створіть функцію, яка приймає два числа та повертає найбільший спільний дільник (НСД).';
//* 4. зроблено алгоритмом

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

const findMaxSimpleFactor = (num1, num2) => {
  if (isNaN(num1) || isNaN(num2)) {
    return 0;
  } else {
    while (num1 !== num2) {
      if (num1 > num2) {
        num1 = num1 - num2;
      } else if (num1 < num2) {
        num2 = num2 - num1;
      }
    };
  
   return num1;
  };
};

const isEvenNumber = num => num % 2 ? false : true;

const generateRandomNumber = (minRangeLimit, maxRangeLimit) => 
Math.floor(Math.random() * (maxRangeLimit + 1 - minRangeLimit) + minRangeLimit); 

const buttonTask4 = document.querySelector('#task-4').addEventListener('click', () => {
  clearAnswerBlock();
  writeTaskElements(2, task4);

  const $input1 = document.querySelector('.input-1');
  const $input2 = document.querySelector('.input-2');
 
  document.querySelector('.btn-submit').addEventListener('click', () => {
    let number1 = +$input1.value;
    let number2 = +$input2.value;
    
    const maxSimpleFactor = findMaxSimpleFactor(number1, number2);
    
    $resultDiv.innerHTML =  maxSimpleFactor === 0 ? 'Обчислення неможливе.' :
       maxSimpleFactor === 1 ? 
      `Числа ${number1} ${number2} є взаємно простими: НСД = ${maxSimpleFactor}` : 
      `НСД чисел ${number1} і ${number2} є: ${maxSimpleFactor}`; 
      
    clearInputs()
  });
});


const buttonTask3 = document.querySelector('#task-3').addEventListener('click', () => {
  clearAnswerBlock();
  writeTaskElements(1, task3);

  const $input1 = document.querySelector('.input-1');
 
  document.querySelector('.btn-submit').addEventListener('click', () => {
   
    const number1 = +$input1.value;

    if (isNaN(number1)) {
      $resultDiv.innerHTML = 'Обчислення неможливе.';
    } else {
      const result = isEvenNumber(number1);
      $resultDiv.innerHTML = `Чи є число ${number1} парним? Відповідь: ${result}`;  
    }
    
    clearInputs()
  });
});

const buttonTask2 = document.querySelector('#task-2').addEventListener('click', () => {
  clearAnswerBlock();
  writeTaskElements(2, task2);

  const $input1 = document.querySelector('.input-1');
  const $input2 = document.querySelector('.input-2');

  document.querySelector('.btn-submit').addEventListener('click', () => {
    const replaceValues = function() {
      [variable1, variable2] = [variable2, variable1];
    };

    let variable1 = $input1.value;
    let variable2 = $input2.value;

    replaceValues();

    $resultDiv.innerHTML = `Вхідні дані: змінна 1 - ${variable1}; змінна 2 - ${variable2}.\n Вихідні дані: змінна 1 - ${variable1}; змінна 2 - ${variable2}.`;  
     
    clearInputs()
  });
});

const buttonTask1 = document.querySelector('#task-1').addEventListener('click', () => {
  clearAnswerBlock();
  writeTaskElements(2, task1);

  const $input1 = document.querySelector('.input-1');
  const $input2 = document.querySelector('.input-2');

  document.querySelector('.btn-submit').addEventListener('click', () => {
    const number1 = +$input1.value;
    const number2 = +$input2.value;

    const randomNum = generateRandomNumber(number1, number2);

    $resultDiv.innerHTML = `Випадкове число з діапазону від ${number1} до ${number2} становить ${randomNum}.`;  
     
    clearInputs()
  });
});