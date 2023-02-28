import {data} from "./data.js"

const $container = document.querySelector('.container > ul');

for (let i = 0; i < data.length; i++) {
  const {id, language, popularity} = data[i];

  $container.innerHTML += `<li class="item item-${i}"><span class="item__name">${language}</span><span class="item__range" data-content="${popularity}"></span></li>`;
}

const $items = document.querySelectorAll('.item');

$items.forEach(item => {  
  const percentage = item.lastElementChild.getAttribute('data-content');

  item.lastElementChild.style.flex = percentage / 100 * 5;

  if (percentage < 1 ) {
    item.lastElementChild.classList.add('lowRange')
  } else if (percentage > 15) {
    item.lastElementChild.classList.add('highRange')
  }
});
