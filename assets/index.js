let $input = document.querySelector('.userText');
let $btnStart = document.querySelector('.btn-start');
let $btnClear = document.querySelector('.btn-clear');
let $ul = document.querySelector('.list');

// відслідковуємо натискання кнопки "start" і виконуємо логіку
$btnStart.addEventListener('click', () => {
  $ul.innerHTML = '';
  
  // об`єкт де зберігаємо наші дані
  let letters = {};
  // цикл який створює ключи і підравує
  for (let i = 0; i < $input.value.length; i++) {
    const letter = $input.value[i];

    if (letters[letter]) {
      letters[letter]++;
    } else {
      letters[letter] = 1;
    }
  }

  //наш обєкт сортує від більшого до меншого і отримаємо масив ключів
  let keySort = Object.keys(letters).sort((a, b) =>letters[b] - letters[a])

  //створюємо змінні з списком і довжиною інпута
  let input_length = $input.value.length;

  // вираховуємо в % і створюмо елемент li в ul
  for (let i = 0; i < keySort.length; i++) {
    // символ з масива відсортованих ключів 
    let d = keySort[i];
    // формула підрахунку % ,(число) / (загальна_сумма символів) * 100%.
    let interest = letters[d] / input_length * 100;
    // створюмо li з нашими даними(назвою,кількістю,%) 
    $ul.insertAdjacentHTML('beforeend',
        `<li>"${d}": ${letters[d]} - ${interest.toFixed(3)} %</li>`
    );
  }

  $input.value = '';
});

$btnClear.addEventListener('click', () => ul.innerHTML = '');