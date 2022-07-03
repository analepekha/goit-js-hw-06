const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients')
for (let ingredient of ingredients) {
  let item = document.createElement('li')
  item.innerHTML = ingredient;
  item.classList.add('item')
  list.append(item)
}

console.log(list);

