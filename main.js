const clickCountElement = document.getElementById('clickCount');
const keypressCountElement = document.getElementById('keypressCount');
const resetButton = document.getElementById('resetButton');


let clickCount = localStorage.getItem('clickCount') || 0;
let keypressCount = localStorage.getItem('keypressCount') || 0;


clickCountElement.textContent = clickCount;
keypressCountElement.textContent = keypressCount;


function handleClick() {
    clickCount++;
    clickCountElement.textContent = clickCount;
    localStorage.setItem('clickCount', clickCount);
  }

  function handleKeypress() {
    keypressCount++;
    keypressCountElement.textContent = keypressCount;
    localStorage.setItem('keypressCount', keypressCount);
  }

  function handleReset() {
    clickCount = 0;
    keypressCount = 0;
    clickCountElement.textContent = clickCount;
    keypressCountElement.textContent = keypressCount;
    localStorage.setItem('clickCount', clickCount);
    localStorage.setItem('keypressCount', keypressCount);
  }

  document.addEventListener('click', handleClick);
  document.addEventListener('keypress', handleKeypress);
  resetButton.addEventListener('click', handleReset);