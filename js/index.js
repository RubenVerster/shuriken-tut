let container = document.querySelector('.container');
let windowHeight = window.innerHeight;
let windowWidth = window.innerWidth;

const generateRandomHeight = () => {
  let rand = Math.random();
  return rand * windowHeight;
};

const renderShuriken = () => {
  shuriken = document.createElement('img');
  shuriken.src = '../img/shuriken-picture.png';
  shuriken.className = 'throw-shuriken';
  shuriken.style.animation = 'throw-shuriken forwards 2s';
  shuriken.style.top = `${generateRandomHeight()}px`;

  container.appendChild(shuriken);
};

container.addEventListener('click', () => renderShuriken());
