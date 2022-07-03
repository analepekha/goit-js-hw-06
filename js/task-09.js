function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const colorBg = document.querySelector('.color')
const btn = document.querySelector('.change-color')


btn.addEventListener('click', () => {

  let currentColor = getRandomHexColor()

  document.body.style.backgroundColor = currentColor;
  colorBg.textContent = currentColor;
})