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