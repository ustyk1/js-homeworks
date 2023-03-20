import {lectureHalls} from './data.js'
const { map, filter, tap, fromEvent } = rxjs;

// Напишіть декілька функцій для роботи з ним.
// 1. Виведення на екран усіх аудиторій. 
// 2. Виведення на екран аудиторій для зазначеного факультету.
// 3. Виведення на екран тільки тих аудиторій, які підходять 
// для переданої групи. Об’єкт-група складається з назви, 
// кількості студентів і назви факультету. 
// 4. Функція сортування аудиторій за кількістю місць.
// 5. Функція сортування аудиторій за назвою (за алфавітом)

const $auditoriesWrapper = document.querySelector('.auditories');
const $auditories = $auditoriesWrapper.getElementsByClassName('auditory');
const $dropdownMenu = document.querySelector('.dropdown__menu');
const $form = document.querySelector('.header__search-form');

const clearSyles = () => Array.from($auditories).forEach(auditory => {
  auditory.classList.remove('active');
  auditory.classList.remove('search');
});

function renderAllAuditories(dataOfLectureHalls) {
  dataOfLectureHalls.forEach(lectureHall => {
    const $auditory = document.createElement('div');
    $auditory.className = 'auditory';
    $auditory.dataset.number = `${lectureHall.numberOfAuditoty}`;
    $auditory.dataset.faculty = `${lectureHall.faculty}`;
    $auditory.dataset.name = `${lectureHall.name}`;

    for (let i = 1; i <= lectureHall.numberOfSeats; i++) {
      $auditory.innerHTML += `<div class="lecture-hall-seat"></div>`;
    }
    
    $auditoriesWrapper.append($auditory);
  });
}

function sortAuditoryBySeats() {
  const sortedLectureHalls = lectureHalls.slice().sort((a, b) => a.numberOfSeats - b.numberOfSeats);
  renderAllAuditories(sortedLectureHalls);
}

function getFormData() {
  if (
    isNaN(amount.value) && 
    Number.isInteger(amount.value) &&
    +amount.value <= 20 &&
    +amount.value >= 0
  ) return;

  const formData = new FormData($form);

  return {
    facultyName: formData.get('faculty'),
    amount: Number(formData.get('amount'))
  };
}

function searchLAuditoryByGroup(data) {
  const auditoriesArray = Array.from($auditories);

  auditoriesArray.forEach(auditory => auditory.classList.remove('search'));

  const availableAuditories = lectureHalls.filter(lectureHall => lectureHall.numberOfSeats >= data.amount && lectureHall.faculty === data.facultyName);

  availableAuditories.forEach(avaibleAuditory => auditoriesArray
    .find(auditory => auditory.dataset.name === avaibleAuditory.name)
    .classList.add('search'));
}

fromEvent(searchBtn, 'click')
  .pipe(
    tap(event => event.preventDefault())
  )
  .subscribe(() => searchLAuditoryByGroup(getFormData()));
  
fromEvent(sortBtn, 'click')
  .subscribe(() => {
    $auditoriesWrapper.innerHTML = '';
    sortAuditoryBySeats();
  });
  
fromEvent(alphabetBtn, 'click')
  .subscribe(() => {
    $auditoriesWrapper.innerHTML = '';
  
    const alphabetLectureHalls = lectureHalls.slice().sort((a, b) => a.name.localeCompare(b.name));
    renderAllAuditories(alphabetLectureHalls);
  });

fromEvent(clearBtn, 'click')
  .subscribe(() => clearSyles());  


fromEvent($dropdownMenu, 'click')
  .pipe(
    filter(event => event.target.className === 'menu__item'),
    map(event => event.target.dataset.id)
  )
  .subscribe((checkedFacultyName) => {
    Array.from($auditories).forEach(auditory => auditory.dataset.faculty === checkedFacultyName ? 
      auditory.classList.add('active') : auditory.classList.remove('active'));
  });

renderAllAuditories(lectureHalls);
