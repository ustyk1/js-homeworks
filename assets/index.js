// import {user} from "./data.js"

const favUserList = [];
const $container = document.querySelector('.container');
const $favUsersList = document.querySelector('.fav-users__list');

const isTheSameUser = (list, userName) => list.includes(userName, 0);
const renderFavUser = favUsername => $favUsersList.innerHTML += `<li class="fav-users__username"><span class="fa-sharp fa-solid fa-heart"></span>${favUsername}</li>`;

const getUsers = async () => {
  const users = await fetch('https://jsonplaceholder.typicode.com/users');
  const usersData = await users.json();
  renderUserCards($container, usersData)
}

function renderUserCards(usersContainer, users) {
  users.forEach(user => {
    const {id, name, email, address, phone, website, company} = user;

    usersContainer.innerHTML += `
      <div class="user">
        <div class="user__wrap">
          <img src="https://randomuser.me/api/portraits/women/${id + 16}.jpg" class="user__img" alt="user">
          <ul class="user__data data">
            <li>Name: ${name}</li>
            <li>Email: ${email}</li>
            <li>Address: ${address.street}</li>
            <li>Phone: ${phone}</li>
            <li>Website: <a href="" class="data__link"></a>${website}</li>
            <li>Company: ${company.name}</li>
          </ul>
        </div>
      </div>
    `
  });

  usersContainer.querySelectorAll('.user').forEach(item => {
    item.addEventListener('click', (event) => {
      addToFavUser(event.target)
    });
      
  });
}

function addToFavUser(user) {
  const $userData = user.querySelector('.user__data');

  const userName = $userData.firstElementChild.textContent.slice(6);
  
  if (!isTheSameUser(favUserList, userName)) {
    favUserList.push(userName);
    renderFavUser(userName);
  } else {
    alert(`User ${userName} has already been selected!`);
  }
}

getUsers();



// function renderUser(element, data) {
//   for (let i = 0; i < data.length; i++) {
//     const {id, name, email, address, phone, website, company} = data[i];
//     element.innerHTML += `
//       <div class="user">
//         <div class="user__wrap">
//           <img src="https://randomuser.me/api/portraits/women/${id + 16}.jpg" alt="user" class="user__img">
//           <ul class="user__list">
//             <li>Name: ${name}</li>
//             <li>Email: ${email}</li>
//             <li>Address: ${address.street}</li>
//             <li>Phone: ${phone}</li>
//             <li>Website: <a href="" class="list__link"></a>${website}</li>
//             <li>Company: ${company.name}</li>
//           </ul>
//         </div>
//       </div>
//     `
//   }
// }

// renderUser($container, user)