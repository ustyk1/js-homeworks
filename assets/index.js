//* 1. Створіть функцію, яка повертає випадкове число

// const generateRandomNumber = (minRangeLimit, maxRangeLimit) => 
//   Math.floor(Math.random() * (maxRangeLimit + 1 - minRangeLimit) + minRangeLimit); 

// let randomNum = generateRandomNumber(2, 5);

// console.log(randomNum);


//* 2. Створіть функцію, яка приймає дві змінні та міняє їх значення місцями

// const replaceValues = (variable1, variable2) => {
//   let temporaryVariable = variable1;

//   variable1 = variable2;
//   variable2 = temporaryVariable;

  // console.log('variable1', variable1);
  // console.log('variabl2', variable2);
// }
// replaceValues(5, 8);


//* 3. Створіть функцію, яка приймає число та повертає істину, якщо воно парне
// let isEvenNumber = num => num % 2 ? false : true;
  
// console.log( isEvenNumber(6));

// //* 4. Створіть функцію, яка приймає два числа та повертає найбільший спільний дільник (НСД)

// зроблено алгоритмом

let number1 = 18;
let number2 = 24;

let findMaxSimpleFactor = (num1, num2) => {
  while (num1 !== num2) {
    if (num1 > num2) {
      num1 = num1 - num2;
    } else {
      num2 = num2 - num1;
    }
  };

 return num1;
};

let maxSimpleFactor = findMaxSimpleFactor(number1, number2);

maxSimpleFactor === 1 ? 
  alert(`Числа ${number1} ${number2} є взаємно простими: НСД = ${maxSimpleFactor}`) : 
  alert(`НСД чисел ${number1} і ${number2} є: ${maxSimpleFactor}`);

console.log(maxSimpleFactor);