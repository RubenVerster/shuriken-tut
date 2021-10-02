let container = document.querySelector('.container');
let windowHeight = window.innerHeight;
let windowWidth = window.innerWidth;

const keyFrames = document.createElement('style');
keyFrames.innerHTML = `
@keyframes throw-shuriken {
  0% {
    transform: rotate(0deg);
    left: ${-150}px;
    opacity: 1;
  }

  50% {
     transform: rotate(385deg);
    left: ${windowWidth - 150}px;
    opacity: 1;
  }

  80% {
    transform: rotate(385deg);
    left: ${windowWidth - 150}px;
    opacity: 1;
  }

  100% {
    transform: rotate(385deg);
    left: ${windowWidth - 150}px;
    opacity: 0;
  }
}

`;
container.appendChild(keyFrames);

const generateRandomHeight = () => {
  let rand = Math.random();
  if (rand > 0.65) {
    rand -= 0.2;
  }

  if (rand < 0.1) {
    rand += 0.1;
  }
  return (rand * windowHeight).toFixed(0);
};

const kunaiOrShuriken = (decider) => {
  if (decider === 1) {
    return 'kunai';
  } else {
    return 'shuriken';
  }
};

const renderShuriken = () => {
  let decider = Math.floor(Math.random() * 2);

  shuriken = document.createElement('img');
  shuriken.src = `../img/${kunaiOrShuriken(decider)}-picture.png`;
  shuriken.className = 'throw-shuriken';
  shuriken.style.animation = 'throw-shuriken forwards 0.9s';
  shuriken.style.top = `${generateRandomHeight()}px`;

  container.appendChild(shuriken);
};

container.addEventListener('click', () => renderShuriken());

const cleanupWeapons = () => {
  let mess = document.getElementsByClassName('throw-shuriken');
  if (mess.length < 5) {
    return;
  } else {
    mess[0].remove();
  }
  console.log(mess);
};

setInterval(() => {
  cleanupWeapons();
}, 1500);
