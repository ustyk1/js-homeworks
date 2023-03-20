const $input = document.querySelector('#input');
const string = 'Створіть масив CSS-стилів (колір, розмір шрифту, вирівнювання, підкреслення тощо). Кожен елемент масиву – це об’єкт, що складається із двох властивостей: назва та значення стилю. Напишіть функцію, яка приймає масив стилів та текст, і виводить цей текст за допомогою document.write() у тезі "p", додавши у відкритий тег атрибут style з усіма стилями, переліченими у масиві.';

const styles = [
  { name: 'margin', value: '20px' },
  { name: 'font-size', value: '32px' },
  { name: 'color', value: '#f1ebe5' },
  { name: 'text-shadow', value: '0 6.36px 4.896px #c4b59d, 0 -2px 1px #fff' },
  { name: 'letter-spacing', value: '-2px' },
  { name: 'background-color', value: '#eadecb' },
  { name: 'text-align', value: 'center' },
  { name: 'padding', value: '30px' }
];

function writeStyledText(styles, text) {
  let styleString = '';
  for (let i = 0; i < styles.length; i++) {
    styleString += `${styles[i].name}: ${styles[i].value}; `;
  }

  // console.log(text);
  document.open();
  document.write(`<p style="${styleString}">${text}</p>`);
  document.close();
}
writeStyledText(styles, string);